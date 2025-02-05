import { Request, Response, NextFunction } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";

import { UserSchema } from "../../services/users/validUserSchema/UserSchema";
class CreateUserControler {
    async handle (req: Request, res: Response, next: NextFunction){
        try{
            const usuario = UserSchema.parse(req.body)
            const user = new CreateUserService()
            
            const userExecute = await user.execute(usuario)
            
            res.status(201).send(userExecute)
        }catch(err){
            next(err)
        }
        
    };
};

export {CreateUserControler};