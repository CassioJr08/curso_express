import 'dotenv/config' //variaveis de ambiente
import express, {Request, Response} from "express"
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})


