import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

const port = process.env.PORT || 4000

const app = express()
const parselMiddleware = bodyParser({})

app.use(parselMiddleware)

app.get('/', (req: Request, res: Response) => {
    res.status(201).send('тест')
})

app.listen(port)
