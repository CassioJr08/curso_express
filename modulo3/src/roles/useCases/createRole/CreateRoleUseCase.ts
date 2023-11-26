import { Role } from "@roles/entities/Role"
import { RolesRepository } from "@roles/repositories/RolesRepository"
import { AppError } from "src/shared/errors/AppError"

type CreateRoleDTO = {
    name: string
}

export class CreateRoleUseCase {
    constructor(private rolesRepository: RolesRepository){}

        execute({ name }: CreateRoleDTO): Role {
            const roleAreadyExists = this.rolesRepository.findByName(name)

            if(roleAreadyExists){
               throw new AppError('Role already exists', 400)
            }
    
            return this.rolesRepository.create({name}) // enviando um objeto porque a classe recebe um objeto
        
        }
}