import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { BaseError } from '../utils/errors'
import dotenv from 'dotenv'

dotenv.config()

export function AuthorizationMiddleware (req: Request, res: Response, next: NextFunction){

    try{
        const assign = process.env.ASSINGN_TOKEN as string

        const autorizationHeaders = req.headers.authorization as string

        if (!autorizationHeaders) {
            res.status(401).send({
                'success': false,
                'message': 'Format token invalid!'
            })
        }

        const parts = autorizationHeaders.split(' ')

        if(parts?.length !== 2 || parts[0] !== 'Bearer'){
            res.status(401).send({
                'success': false,
                'message': 'Format token invalid!'
            })
        }

        const token = parts[1]

        
        const decode = jwt.verify(token,assign)

        next()

    }catch(err){
        console.log(err)
        next(err)
    }
    
    
}

