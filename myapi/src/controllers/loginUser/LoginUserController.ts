import { Request, Response, NextFunction } from "express";
import { LoginUserService } from "../../services/loginUser/LoginUserService";
import { LogisnUserSchema } from "../../services/loginUser/validLoginUserSchema/LoginUserSchema";

class LoginUserController {
    async handle (req: Request, res: Response, next: NextFunction) {
        try{
            const loginBody =  LogisnUserSchema.parse(req.body)

            const loginService = new LoginUserService()

            const token = await loginService.execute(loginBody)

            res.status(200).send(token)

        }catch(err){
            next(err);
        }
    }
};

export {LoginUserController};