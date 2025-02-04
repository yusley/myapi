import prismaClient from "../../prisma";
import { UserInterface } from "../../interfaces/UserInterface";

class CreateUserService{
    async execute (user: UserInterface) {
        
        const findUser = await prismaClient.user.findFirst({
            where: {
                cpf: user.cpf
            }
        })

        if (findUser){
            throw "Usuário já existe"
        }

        const userCreated = await prismaClient.user.create({
            data: {
                name: user.name,
                cpf: user.cpf,
                email: user.email,
                status: user.status ? true : false 
            }
        })
        
        console.log(userCreated)
        return user
    }
};

export {CreateUserService};