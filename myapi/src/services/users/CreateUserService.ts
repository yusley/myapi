import prismaClient from "../../prisma";
import { z } from 'zod'
import { BaseError, Conflict } from "../../middlewares/errors";
import { UserSchema } from "./validUserSchema/UserSchema";

class CreateUserService{
    async execute (user: z.infer<typeof UserSchema> ) {
    
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
                    password: 'teste',
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