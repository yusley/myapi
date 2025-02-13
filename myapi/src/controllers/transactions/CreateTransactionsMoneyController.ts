import { Request, Response, NextFunction } from "express";
import { TransactionsMoneySchema } from "../../services/transactions/validTransactionSchema/TransactionsMoneySchema";
import { CreateTransactionsMoneyService } from "../../services/transactions/CreateTransacationsMoneyService";

class CreateTransactionsMoneyController {
    async handle (req: Request, res: Response, next: NextFunction) {
        try{
            const transactionMoneyBody = TransactionsMoneySchema.parse(req.body)
            const transactionService = new CreateTransactionsMoneyService()
            const transactionCreated = await transactionService.execute(transactionMoneyBody)
            res.send(transactionCreated)
        }catch(err){
            next(err);
        }
    }
}

export {CreateTransactionsMoneyController}