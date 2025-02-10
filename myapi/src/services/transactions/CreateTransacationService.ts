import prismaClient from "../../prisma";
import { TransactionsSchema } from "./validTransactionSchema/TransactionSchema";
import { z } from 'zod'
import { CategorySchema } from "../category/validCategorySchema/SchemaCategory";

class CreateTransactionService{
    async execute (transaction: z.infer<typeof TransactionsSchema>) {

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


export {CreateTransactionService};