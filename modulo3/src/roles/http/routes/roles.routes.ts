import { RolesRepository } from "@roles/repositories/RolesRepository"
import { Router, Request, Response } from "express"

const rolesRoute = Router()
const rolesRepository = new RolesRepository()


rolesRoute.post('/', (req: Request, res: Response) =>{
    const { name } = req.body
    const role = rolesRepository.create({name})

    
    return res.status(201).json(role)
})



export {rolesRoute}


