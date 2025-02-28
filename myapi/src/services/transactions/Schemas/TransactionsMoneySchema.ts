import { z } from 'zod'
import zodToJsonSchema from 'zod-to-json-schema'

export const TransactionsMoneySchema = z.object({
    title : z.string(),
    price : z.string(),
    type: z.string(),
    categoryId: z.string(),
    userId: z.string(),
    created_at : z.date().optional(),
    updated_at : z.date().optional()
})


export const TransactionsMoneyJsonSchema = zodToJsonSchema(TransactionsMoneySchema)