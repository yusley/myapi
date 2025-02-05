import { Router,Request,Response, NextFunction} from "express";
import { listTransactionsMoneyController } from "./controllers/transactions/ListTransactionsMoneyController";
import { ListUsersController } from "./controllers/users/ListUsersControllers";
import { CreateUserControler } from "./controllers/users/CreateUserController";

const route = Router();

route.get('/', (req: Request,res:Response) => {
    res.send({message:'Hello World with ts'})
})


route.get('/users', (req: Request, res: Response) => {
    return new ListUsersController().handle(req,res)
})

route.post('/users', (req: Request, res: Response, next: NextFunction) => {
    return new CreateUserControler().handle(req,res, next)
})

route.get('/transactions', (req: Request, res: Response) => {
    return new listTransactionsMoneyController().handle(req,res)
})

export default route;