import { z } from 'zod'
import zodToJsonSchema from 'zod-to-json-schema'

export const UserSchema = z.object({
    name: z.string(),
    cpf: z.string(),
    email: z.string(),
    status: z.boolean(),
    password: z.string(),
    created_at: z.date().optional(),
    updated_at: z.date().optional()
})


export const UserSchemaReturn = z.object({
    name: z.string(),
    cpf: z.string(),
    email: z.string(),
    status: z.boolean(),
    created_at: z.date().optional(),
    updated_at: z.date().optional()
})

export const UserJsonSchema = zodToJsonSchema(UserSchemaReturn)