import express from 'express'
import route from './routes';
import { json } from 'body-parser'
import { errorHandle } from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

// middlewares
app.use(json())

// routes
app.use(route)

// middleware de erro
app.use(errorHandle)

app.listen(3333, () => console.log('server running on port 3333'))