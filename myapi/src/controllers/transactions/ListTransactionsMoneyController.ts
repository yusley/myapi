import { Request, Response } from "express";
import { listTransactionsMoneyService } from "../../services/transactions/ListTransactionsMoneyService";


class listTransactionsMoneyController{
    async handle (req: Request, res: Response) {
        const listTransactionsMoney = new listTransactionsMoneyService()
        
        const transactions = await listTransactionsMoney.execute()
        
        res.send(transactions)
    }
}


export {listTransactionsMoneyController};