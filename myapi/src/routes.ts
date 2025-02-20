import { Router,Request,Response, NextFunction} from "express";
import { listTransactionsMoneyController } from "./controllers/transactions/ListTransactionsMoneyController";
import { ListUsersController } from "./controllers/users/ListUsersControllers";
import { CreateUserControler } from "./controllers/users/CreateUserController";
import { CreateTransactionsMoneyController } from "./controllers/transactions/CreateTransactionsMoneyController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListLoginUserController } from "./controllers/loginUser/ListLoginUserController";
import { LoginUserController } from "./controllers/loginUser/LoginUserController";
import { AuthorizationMiddleware } from "./middlewares/authMiddleware";

const route = Router();

route.get('/', (req: Request,res:Response) => {
    res.send({message:'Hello World with ts'})
})

route.post('/login', (req: Request, res: Response, next: NextFunction) => {
    return new LoginUserController().handle(req,res,next)
})

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna uma lista de usuários
 *     description: Retorna todos os usuários cadastrados.
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
route.get('/users',AuthorizationMiddleware, (req: Request, res: Response , next: NextFunction) => {
    return new ListUsersController().handle(req,res,next)
})

route.post('/users',AuthorizationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    return new CreateUserControler().handle(req,res, next)
})

route.get('/transactions', AuthorizationMiddleware,(req: Request, res: Response, next: NextFunction) => {
    return new listTransactionsMoneyController().handle(req,res,next)
})

route.post('/transactions', AuthorizationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    return new CreateTransactionsMoneyController().handle(req,res,next)
})

route.get('/category', AuthorizationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    return new ListCategoryController().handle(req,res,next)
})

route.post('/category', AuthorizationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    return new CreateCategoryController().handle(req,res,next)
})

route.get('/listloginuser', AuthorizationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    return new ListLoginUserController().handle(req,res,next)
})

route.post('/createloginuser', AuthorizationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    return new ListLoginUserController().handle(req,res,next)
})

export default route;