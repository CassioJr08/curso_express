import { RolesRepository } from "@roles/repositories/RolesRepository"
import { Router, Request, Response } from "express"

const rolesRoute = Router()
const rolesRepository = new RolesRepository()


rolesRoute.post('/', (req: Request, res: Response) =>{
    const { name } = req.body
    const roleAreadyExists = rolesRepository.findByName(name)
    if(roleAreadyExists){
        return res.status(400).json({error: 'Role already exists'})
    }
    const role = rolesRepository.create({name}) // enviando um objeto porque a classe recebe um objeto

    return res.status(201).json(role)
})

rolesRoute.get('/', (req: Request, res: Response) =>{

    const roles = rolesRepository.findAll()

    
    return res.status(200).json(roles)
})


export {rolesRoute}


