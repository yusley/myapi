import { BaseError } from "../../utils/errors";
import prismaClient from "../../prisma";
import { LoginCreateUserSchema } from "./validLoginUserSchema/LoginUserSchema";
import { z } from 'zod'
class CreateLoginUserService {
    async execute (loginUser: z.infer<typeof LoginCreateUserSchema> ) {
        const findLogin = await prismaClient.loginUser.findFirst({
            where : {
                username : loginUser.username
            }
        })
        if(findLogin){
            throw new BaseError("username já existe", 409)
        }
        const loginUserCreated = await prismaClient.loginUser.create({
            data : {
                username: loginUser.username,
                password: loginUser.password,
                userId : loginUser.userId
            }
        })
        return loginUserCreated
    }
};

export {CreateLoginUserService};