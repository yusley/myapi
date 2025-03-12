import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();

interface tokenData {
    token: string
}

class VerifyTokenService{
    async execute (token: tokenData) {
        console.log('chega aqui')
        const assign = process.env.ASSINGN_TOKEN as string
        
        console.log(assign,token.token)

        const validToken = jwt.verify(token.token,assign)

        return validToken
        
    }
}

export {VerifyTokenService};