import { createRolesController } from "@roles/useCases/createRole"
import { listRolesController } from "@roles/useCases/listRoles"

import { Router, Request, Response } from "express"

const rolesRoute = Router()

rolesRoute.post('/', (req: Request, res: Response) =>{

    return createRolesController.handle(req, res)

})

rolesRoute.get('/', (req: Request, res: Response) =>{
    return listRolesController.handle(req, res)
})


export {rolesRoute}


