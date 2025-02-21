import { z } from 'zod'
import zodToJsonSchema from 'zod-to-json-schema'

export const LoginCreateUserSchema = z.object({
    username : z.string(),
    password : z.string(),
    userId : z.string(),
    created_at : z.date().optional(),
    updated_at : z.date().optional()
})


export const LoginUserSchema = z.object({
    username : z.string(),
    password : z.string()
})

export const LoginUserJsonSchema = zodToJsonSchema(LoginUserSchema)