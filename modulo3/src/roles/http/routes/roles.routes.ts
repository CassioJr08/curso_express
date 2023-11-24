import { Role } from "@roles/entities/Role"
import { Router, Request, Response } from "express"

const rolesRoute = Router()

const roles: Role[] = []

rolesRoute.post('/', (req: Request, res: Response) =>{
    const { name } = req.body
    const role =  new Role()

    Object.assign(role, { // esse metodo é usado para mesclar propriedades
        name,
        created_at: new Date()
    })
    
    //console.log(role)
    roles.push(role)

    return res.status(201).json(role)
})



export {rolesRoute}