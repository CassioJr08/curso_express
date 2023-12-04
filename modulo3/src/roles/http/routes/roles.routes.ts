
import { Router, Request, Response } from "express"

import { celebrate, Joi, Segments } from 'celebrate'
import { CreateRoleController } from "@roles/useCases/createRole/CreateRoleController"
import { ListRolesController } from "@roles/useCases/listRoles/ListrolesController"
import { UpdateRoleController } from "@roles/useCases/updateRole/UpdateRoleController"
import { ShowRoleController } from "@roles/useCases/showRole/ShowRoleController"
import { DeleteRoleController } from "@roles/useCases/deleteRole/DeleteRoleController"
import { container } from 'tsyringe'

const rolesRoute = Router()
const createRolesController = container.resolve(CreateRoleController)
const listRolesController = container.resolve(ListRolesController)
const updateRolesController = container.resolve(UpdateRoleController)
const showRolesController = container.resolve(ShowRoleController)
const deleteRolesController = container.resolve(DeleteRoleController)

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


