import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'
import {Express} from 'express'
import { UserJsonSchema } from './services/users/Schemas/UserSchema';
import { LoginUserJson } from './services/loginUser/Schemas/LoginUserSchema';


const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.1.0',
        info :{
            title : 'My API',
            version: '1.0.0',
            description: 'Documentação da minha API com Swagger'
        },
        servers: [
            {
                url : 'http://localhost:3333',
                description: 'Servidor local'
            }
        ],
        components: {
            schemas:{
                    User: UserJsonSchema,
                    LoginUser: LoginUserJson
            }
        },
        
        security: [
            {
                BearerAuth: [],
            },
        ],  
    },
    apis: ['./src/*.ts'],
}

const specs = swaggerJsdoc(options);

console.log('Swagger Specs:', JSON.stringify(specs, null, 2));
export const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}