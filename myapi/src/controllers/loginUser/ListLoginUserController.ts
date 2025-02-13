import { Request, Response, NextFunction } from "express";
import { ListLoginUserService } from "../../services/loginUser/ListLoginUserService";

class ListLoginUserController {
    async handle (req: Request, res: Response, next: NextFunction) {
        try{
            const userService = new ListLoginUserService()
            const userLoginUser = await userService.execute()
            res.status(200).send(userLoginUser)
        }catch(err){
            next(err);
        }
    };
};

export {ListLoginUserController};