import { RolesRepository } from "@roles/repositories/RolesRepository"
import { createRolesController } from "@roles/useCases/createRole"

import { Router, Request, Response } from "express"

const rolesRoute = Router()
const rolesRepository = new RolesRepository()


rolesRoute.post('/', (req: Request, res: Response) =>{

    return createRolesController.handle(req, res)

})

rolesRoute.get('/', (req: Request, res: Response) =>{

    const roles = rolesRepository.findAll()
    
    return res.status(200).json(roles)
})


export {rolesRoute}


