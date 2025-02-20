import prismaClient from "../../prisma";
import { string, z } from 'zod'
import { BaseError } from "../../utils/errors";
import { UserSchema } from "./validUserSchema/UserSchema";
import { PasswordEncryt } from "../../utils/passwordEncypt";

class CreateUserService{
    async execute (user: z.infer<typeof UserSchema> ) {
        const hashPassword = new PasswordEncryt()
        const password = await hashPassword.generateHash(user.password as string)
        
        const userCreated = await prismaClient.$transaction(async (tx) => {
            const findUser = await tx.user.findFirst({
                where: {
                    cpf: user.cpf
                }
            })
            if (findUser){
                throw new BaseError("Usuário já existe",409)
            }
            const userCreated = await tx.user.create({
                data: {
                    name: user.name,
                    cpf: user.cpf,
                    email: user.email,
                    status: user.status
                }
            })
            if(!userCreated){
                throw new BaseError("Erro ao criar usuário", 400)
            }
            
            const loginUserCreated = await tx.loginUser.create({
                data : {
                    username: user.cpf,
                    password: password,
                    userId: userCreated.id
                }
            })
            return userCreated
        })
        if(!userCreated){
            throw new BaseError("Erro ao criar usuário", 400)
        }
        return userCreated
            
        
    }
};

export {CreateUserService};