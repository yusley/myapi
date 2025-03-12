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
import { VerifyTokenController } from "./controllers/token/verifyTokenController";

const route = Router();

route.get('/', (req: Request,res:Response) => {
    res.send({message:'Hello World with ts'})
})


/**
 * @swagger
 * /login:
 *   post:
 *     summary: Faz login na aplicação
 *     description: Autentica um usuário com username e password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginUser'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Dados inválidos fornecidos.
 *       401:
 *         description: Credenciais inválidas.
 */
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

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria usuários
 *     description: Cria usuários com os parâmetros fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *                   
 *       400:
 *         description: Dados inválidos fornecidos.
 *       401:
 *         description: Credenciais inválidas.
 * */
route.post('/users',AuthorizationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    return new CreateUserControler().handle(req,res, next)
})

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Retorna uma lista de transações
 *     description: Retorna todas as transações cadastrados.
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TransactionMoney'
 */
route.get('/transactions', AuthorizationMiddleware,(req: Request, res: Response, next: NextFunction) => {
    return new listTransactionsMoneyController().handle(req,res,next)
})

/**
 * @swagger
 * /transactions:
 *   post:
 *     summary: Cria uma transação
 *     description: Cria transações com os parâmetros fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TransactionMoney'
 *     responses:
 *       200:
 *         description: Retorna a transação criada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransactionMoney'
 *                   
 *       400:
 *         description: Dados inválidos fornecidos.
 *       401:
 *         description: Credenciais inválidas.
 * */
route.post('/transactions', AuthorizationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    return new CreateTransactionsMoneyController().handle(req,res,next)
})

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Retorna uma lista de categorias
 *     description: Retorna todas as categorias cadastradas.
 *     responses:
 *       200:
 *         description: Lista de categorias retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
route.get('/category', AuthorizationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    return new ListCategoryController().handle(req,res,next)
})

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Cria uma Categoria
 *     description: Cria uma categoria com os parâmetros fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Retorna a categoria criada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *                   
 *       400:
 *         description: Dados inválidos fornecidos.
 *       401:
 *         description: Credenciais inválidas.
 * */
route.post('/category', AuthorizationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    return new CreateCategoryController().handle(req,res,next)
})

route.post('/verifytoken', (req: Request, res: Response, next: NextFunction) => {
    return new VerifyTokenController().handle(req,res,next)
})

route.get('/listloginuser', AuthorizationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    return new ListLoginUserController().handle(req,res,next)
})

route.post('/createloginuser', AuthorizationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    return new ListLoginUserController().handle(req,res,next)
})

export default route;