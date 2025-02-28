import prismaClient from "../../prisma";
import { TransactionsMoneySchema } from "./Schemas/TransactionsMoneySchema";
import { z } from 'zod'

class CreateTransactionsMoneyService{
    async execute (transaction: z.infer<typeof TransactionsMoneySchema>) {
        const transactionCreated = await prismaClient.transactionsMoney.create({
            data: {
                title: transaction.title,
                price: transaction.price,
                type: transaction.type,
                categoryId: transaction.categoryId,
                userId: transaction.userId
            }
        })
        return transactionCreated
    }
}


export {CreateTransactionsMoneyService};