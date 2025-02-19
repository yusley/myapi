import { Router,Request,Response, NextFunction} from "express";
import { listTransactionsMoneyController } from "./controllers/transactions/ListTransactionsMoneyController";
import { ListUsersController } from "./controllers/users/ListUsersControllers";
import { CreateUserControler } from "./controllers/users/CreateUserController";
import { CreateTransactionsMoneyController } from "./controllers/transactions/CreateTransactionsMoneyController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListLoginUserController } from "./controllers/loginUser/ListLoginUserController";
import { LoginUserController } from "./controllers/loginUser/LoginUserController";

const route = Router();

route.get('/', (req: Request,res:Response) => {
    res.send({message:'Hello World with ts'})
})

route.post('/login', (req: Request, res: Response, next: NextFunction) => {
    return new LoginUserController().handle(req,res,next)
})

route.get('/users', (req: Request, res: Response , next: NextFunction) => {
    return new ListUsersController().handle(req,res,next)
})

route.post('/users', (req: Request, res: Response, next: NextFunction) => {
    return new CreateUserControler().handle(req,res, next)
})

route.get('/transactions', (req: Request, res: Response, next: NextFunction) => {
    return new listTransactionsMoneyController().handle(req,res,next)
})

route.post('/transactions', (req: Request, res: Response, next: NextFunction) => {
    return new CreateTransactionsMoneyController().handle(req,res,next)
})

route.get('/category', (req: Request, res: Response, next: NextFunction) => {
    return new ListCategoryController().handle(req,res,next)
})

route.post('/category', (req: Request, res: Response, next: NextFunction) => {
    return new CreateCategoryController().handle(req,res,next)
})

route.get('/listloginuser', (req: Request, res: Response, next: NextFunction) => {
    return new ListLoginUserController().handle(req,res,next)
})

route.post('/createloginuser', (req: Request, res: Response, next: NextFunction) => {
    return new ListLoginUserController().handle(req,res,next)
})

export default route;