import { Router,Request,Response } from "express";

const route = Router();

route.get('/', (req: Request,res:Response) => {
    res.send({message:'Hello World with ts'})
})


route.get('/custumers', (req: Request, res: Response) => {
    
})


export default route;