import { Router, Request, Response } from "express"
import { AppError } from "src/shared/errors/AppError"

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    throw new AppError('Acesso negado', 401)
    return res.json({message: 'Olá Dev!'})
})

export { routes }