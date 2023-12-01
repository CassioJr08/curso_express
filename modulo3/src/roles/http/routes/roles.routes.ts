import { createRolesController } from "@roles/useCases/createRole"
import { listRolesController } from "@roles/useCases/listRoles"
import { showRolesController } from "@roles/useCases/showRole"
import { updateRolesController } from "@roles/useCases/updateRole"

import { Router, Request, Response } from "express"

const rolesRoute = Router()

rolesRoute.post('/', (req: Request, res: Response) =>{

    return createRolesController.handle(req, res)

})

rolesRoute.get('/', (req: Request, res: Response) =>{
    return listRolesController.handle(req, res)
})

rolesRoute.get('/:id', (req: Request, res: Response) =>{
    return showRolesController.handle(req, res)
})

rolesRoute.put('/:id', (req: Request, res: Response) =>{
    return updateRolesController.handle(req, res)
})
export {rolesRoute}




