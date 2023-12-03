import { Role } from "@roles/entities/Role"
import { IRolesRepository } from "@roles/repositories/IRolesRepository"
import { RolesRepository } from "@roles/repositories/RolesRepository"
import { AppError } from "src/shared/errors/AppError"
import { injectable, inject } from 'tsyringe'

type CreateRoleDTO = {
    name: string
}

@injectable()
export class CreateRoleUseCase {
    constructor(
        @inject('RolesRepository')
        private rolesRepository: IRolesRepository){}//forma simplificada de criar uma propriedade

        async execute({ name }: CreateRoleDTO): Promise<Role> {
            const roleAreadyExists = await this.rolesRepository.findByName(name)

            if(roleAreadyExists){
               throw new AppError('Role already exists', 400)
            }
    
            return this.rolesRepository.create({name}) // enviando um objeto porque a classe recebe um objeto
        
        }
}