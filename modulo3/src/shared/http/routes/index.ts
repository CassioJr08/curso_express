import { Router, Request, Response } from "express"
import { rolesRoute } from "@roles/http/routes/roles.routes"
import { usersRouter } from "@users/http/routes"

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: 'Olá Dev!'})
})

routes.use('/roles', rolesRoute)
routes.use('/users', usersRouter)

export { routes }