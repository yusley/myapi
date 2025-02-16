import { z } from 'zod'

export const UserSchema = z.object({
    name: z.string(),
    cpf: z.string(),
    email: z.string(),
    status: z.boolean(),
    password: z.string().optional(),
    created_at: z.date().optional(),
    updated_at: z.date().optional()
})

