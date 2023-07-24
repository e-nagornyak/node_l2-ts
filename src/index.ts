import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import {addressesRouter, productsRouter} from './routes'

const port = process.env.PORT || 4000
const parserMiddleware = bodyParser({})

const app = express()

app.use(parserMiddleware)

app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)

app.get('/', (req: Request, res: Response) => {
    res.status(201)
        .send('<h1 style="font-size: 100px">Home page</h1>')
})


app.listen(port)

