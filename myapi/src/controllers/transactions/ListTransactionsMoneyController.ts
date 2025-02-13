import { Request, Response, NextFunction } from "express";
import { listTransactionsMoneyService } from "../../services/transactions/ListTransactionsMoneyService";


class listTransactionsMoneyController{
    async handle (req: Request, res: Response, next: NextFunction) {
        try{
            const listTransactionsMoney = new listTransactionsMoneyService()
            const transactions = await listTransactionsMoney.execute()
            res.status(200).send(transactions)
        }catch(err){
            next(err)
        }
    }
}


export {listTransactionsMoneyController};