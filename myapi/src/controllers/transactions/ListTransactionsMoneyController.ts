import { Request, Response } from "express";
import { listTransactionsMoneyService } from "../../services/transactions/ListTransactionsMoneyService";


class listTransactionsMoneyController{
    async handle (req: Request, res: Response) {
        const ListTransactionsMoney = new listTransactionsMoneyService()
        
        const transactions = await ListTransactionsMoney.execute()
        
        res.send(transactions)
    }
}


export {listTransactionsMoneyController};