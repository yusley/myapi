import { Request, Response, NextFunction } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";

import { UserSchema } from "../../services/users/validUserSchema/UserSchema";
class CreateUserControler {
    async handle (req: Request, res: Response, next: NextFunction){
        try{
            const userBody = UserSchema.parse(req.body)
            const userService = new CreateUserService()
            const userExecute = await userService.execute(userBody)
            res.status(201).send(userExecute)
        }catch(err){
            next(err)
        }
    };
};

export {CreateUserControler};