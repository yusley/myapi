import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";


class CreateUserControler {
    async handle (req: Request, res: Response){

        const user = new CreateUserService()
        
        user.execute(req.body)

        res.send(req.body)
    };
};

export {CreateUserControler};