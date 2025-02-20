import { Request, Response, NextFunction } from "express";
import { LoginUserService } from "../../services/loginUser/LoginUserService";
import { LoginUserSchema } from "../../services/loginUser/Schemas/LoginUserSchema";

class LoginUserController {
    async handle (req: Request, res: Response, next: NextFunction) {
        try{
            const loginBody =  LoginUserSchema.parse(req.body)

            const loginService = new LoginUserService()

            const token = await loginService.execute(loginBody)

            res.status(200).send(token)

        }catch(err){
            next(err);
        }
    }
};

export {LoginUserController};