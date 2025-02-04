import { Router,Request,Response } from "express";
import { listTransactionsMoneyController } from "./controllers/transactions/ListTransactionsMoneyController";
import { ListUsersController } from "./controllers/users/ListUsersControllers";

const route = Router();

route.get('/', (req: Request,res:Response) => {
    res.send({message:'Hello World with ts'})
})


route.get('/users', (req: Request, res: Response) => {
    return new ListUsersController().handle(req,res)
})


route.get('/transactions', (req: Request, res: Response) => {
    return new listTransactionsMoneyController().handle(req,res)
})

export default route;