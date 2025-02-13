import { z } from 'zod'

export const CategorySchema = z.object({
    id: z.string().uuid().optional(),
    title: z.string(),
    created_at: z.date().optional(),
    updated_at: z.date().optional()
})