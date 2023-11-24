import { Router, Request, Response } from "express"
import { rolesRoute } from "@roles/http/routes/roles.routes"

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: 'Olá Dev!'})
})

routes.use('/roles', rolesRoute)

export { routes }