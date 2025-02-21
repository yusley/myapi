import { z } from 'zod'
import zodToJsonSchema from 'zod-to-json-schema'

export const CategorySchema = z.object({
    id: z.string().uuid().optional(),
    title: z.string(),
    created_at: z.date().optional(),
    updated_at: z.date().optional()
})

export const CategoryJson = zodToJsonSchema(CategorySchema)