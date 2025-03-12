import { VerifyTokenService } from "../../services/token/verifyTokenService";
import { Request, Response, NextFunction } from "express";

class VerifyTokenController{
    async handle (req: Request, res: Response, next: NextFunction) {
        try{    
            const bodyRequest = req.body;

            const verifyTokenService = new VerifyTokenService()

            const verifyToken = await verifyTokenService.execute(bodyRequest)

            res.send(verifyToken)
        }catch(err){
            next(err)
        }
        
    }
}

export {VerifyTokenController};