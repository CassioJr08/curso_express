import { Router, Request, Response } from "express"
import { v4 as uuidv4 } from "uuid"

const rolesRoute = Router()

const roles = []

rolesRoute.post('/', (req: Request, res: Response) =>{
    const { name } = req.body
    const role = {
        id: uuidv4(),
        name,
        created_at: new Date()
    }

    roles.push(role)

    return res.status(201).json(role)
})



export {rolesRoute}