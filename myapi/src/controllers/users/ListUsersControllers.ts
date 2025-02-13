import { Request,Response, NextFunction } from "express";
import { ListUsersService } from "../../services/users/ListUsersService";


class ListUsersController{
    
    async handle (req:Request, res:Response, next: NextFunction) {
        try{
            const listUserService = new ListUsersService()
            const users = await listUserService.execute();
            res.status(200).send(users);
        }catch(err){
            next(err)
        }
    };
};

export {ListUsersController};