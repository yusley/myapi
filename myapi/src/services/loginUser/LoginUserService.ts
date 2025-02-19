import jwt from "jsonwebtoken";
import prismaClient from "../../prisma";
import { LogisnUserSchema } from "./validLoginUserSchema/LoginUserSchema";
import {z} from 'zod'
import { BaseError } from "../../middlewares/errors";
import { PasswordEncryt } from "../../utils/passwordEncypt";
import dotenv from 'dotenv'

dotenv.config()

class LoginUserService {
    async execute (user: z.infer<typeof LogisnUserSchema>) {


        const assign = process.env.ASSINGN_TOKEN

        console.log('assinatura',assign)

        if(!assign){
            throw new BaseError('configure uma assinatura!',400)
        }

        const loginExists = await prismaClient.loginUser.findFirst({
            where: {
                username : user.username
            }
        })

        if(!loginExists){
            throw new BaseError('usuário não existe!',403)
        }
        
        const passwordEncypt = new PasswordEncryt()

        const isMatch = await passwordEncypt.compareHash(user.password, loginExists.password)

        if(!isMatch){
            throw new BaseError('senha incorreta!',403)
        }
        
        const token = jwt.sign({'userId':loginExists.id},assign,{expiresIn:'1h'})
        
        
        return {'token':token}

    }
}


export {LoginUserService};