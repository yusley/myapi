import prismaClient from "../../prisma";
import { BaseError } from "../../utils/errors";
import { TransactionsMoneySchema } from "./Schemas/TransactionsMoneySchema";
import { z } from 'zod'

class CreateTransactionsMoneyService{
    async execute (transaction: z.infer<typeof TransactionsMoneySchema>) {
        
        const categoryExists = await prismaClient.category.findUnique({
            where: {id: transaction.categoryId}
        })

        if (!categoryExists){
            throw new BaseError('Categoria inexistent', 400)
        }

        const userExists = await prismaClient.user.findUnique({
            where: {id: transaction.userId}
        })

        if (!userExists){
            throw new BaseError('Usuario inexistente', 400)
        }

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