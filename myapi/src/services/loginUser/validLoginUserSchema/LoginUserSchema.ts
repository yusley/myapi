import { z } from 'zod'

export const LoginUserSchema = z.object({
    username : z.string(),
    password : z.string(),
    created_at : z.date().optional(),
    updated_at : z.date().optional()
})