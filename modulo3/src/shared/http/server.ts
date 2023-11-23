import 'dotenv/config' //variaveis de ambiente
import express, {Request, Response} from "express"
import 'express-async-errors'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    return res.json({message: 'Olá Dev!'})
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})


