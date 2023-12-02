import { createRolesController } from "@roles/useCases/createRole"
import { deleteRolesController } from "@roles/useCases/deleteRole"
import { listRolesController } from "@roles/useCases/listRoles"
import { showRolesController } from "@roles/useCases/showRole"
import { updateRolesController } from "@roles/useCases/updateRole"

import { Router, Request, Response } from "express"

import { celebrate, Joi, Segments } from 'celebrate'

const rolesRoute = Router()

rolesRoute.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required()
    })
}) , (req: Request, res: Response) =>{

    return createRolesController.handle(req, res)

})

rolesRoute.get('/', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
        limit: Joi.number()
    })
}), (req: Request, res: Response) =>{
    return listRolesController.handle(req, res)
})

rolesRoute.get('/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().uuid().required(),
    })
}), (req: Request, res: Response) =>{
    return showRolesController.handle(req, res)
})

rolesRoute.put('/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required()
    })
}), (req: Request, res: Response) =>{
    return updateRolesController.handle(req, res)
})

rolesRoute.delete('/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().uuid().required(),
    })
}), (req: Request, res: Response) =>{
    return deleteRolesController.handle(req, res)
})


export {rolesRoute}


