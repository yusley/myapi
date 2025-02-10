import { Request,Response } from "express";
import { ListUsersService } from "../../services/users/ListUsersService";


class ListUsersController{
    
    async handle (req:Request, res:Response) {
        const listUserService = new ListUsersService()
        const users = await listUserService.execute();
        res.send(users);
    };
};

export {ListUsersController};