import prismaClient from "../../prisma";
import { UserInterface } from "../../interfaces/UserInterface";
import { Conflict } from "../../middlewares/errors";
import { UserSchema } from "./validUserSchema/UserSchema";

class CreateUserService{
    
    async execute (user: UserInterface ) {

        const findUser = await prismaClient.user.findFirst({
            where: {
                cpf: user.cpf
            }
        })
        if (findUser){
            
            throw new Conflict("Usuário já existe")
        }
        const userCreated = await prismaClient.user.create({
            data: {
                name: user.name,
                cpf: user.cpf,
                email: user.email,
                status: user.status
            }
        })
        return userCreated
        
    
    }
};

export {CreateUserService};