import prismaClient from "../../prisma";
import { TransactionsMoneySchema } from "./validTransactionSchema/TransactionsMoneySchema";
import { z } from 'zod'


class CreateTransactionsMoneyService{
    async execute (transaction: z.infer<typeof TransactionsMoneySchema>) {

        const transactionCreated = await prismaClient.transactionsMoney.create({
            data: {
                title: transaction.title,
                price: transaction.price,
                categoryId: transaction.categoryId
            }
        })

        return transactionCreated

    }
}


export {CreateTransactionsMoneyService};