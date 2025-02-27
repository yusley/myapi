import express from 'express'
import route from './routes';
import { json } from 'body-parser'
import { errorHandle } from './middlewares/errorMiddleware';
import { setupSwagger } from './swagger';
import cors from 'cors'

const app = express();



app.use(express.json());

app.use(cors())

// middlewares
app.use(json())

// routes
app.use(route)

setupSwagger(app)

// middleware de erro
app.use(errorHandle)

app.listen(3333, () => console.log('server running on port 3333'))