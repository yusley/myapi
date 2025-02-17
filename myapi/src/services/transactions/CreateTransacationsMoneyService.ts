import prismaClient from "../../prisma";
import { TransactionsMoneySchema } from "./validTransactionSchema/TransactionsMoneySchema";
import { z } from 'zod'
import { UserSchema } from "../users/validUserSchema/UserSchema";


class CreateTransactionsMoneyService{
    async execute (transaction: z.infer<typeof TransactionsMoneySchema>) {
        const transactionCreated = await prismaClient.transactionsMoney.create({
            data: {
                title: transaction.title,
                price: transaction.price,
                categoryId: transaction.categoryId,
                userId: transaction.userId
            }
        })
        return transactionCreated
    }
}


export {CreateTransactionsMoneyService};