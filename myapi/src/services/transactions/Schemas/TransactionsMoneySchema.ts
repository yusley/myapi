import { z } from 'zod'
import { CategorySchema } from '../../category/Schemas/CategorySchema'

export const TransactionsMoneySchema = z.object({
    title : z.string(),
    price : z.string(),
    categoryId: z.string(),
    userId: z.string(),
    created_at : z.date().optional(),
    updated_at : z.date().optional()
})