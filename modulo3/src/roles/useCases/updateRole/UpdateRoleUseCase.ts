import { Role } from "@roles/entities/Role"
import { IRolesRepository } from "@roles/repositories/IRolesRepository"
import { RolesRepository } from "@roles/repositories/RolesRepository"
import { AppError } from "src/shared/errors/AppError"
import { injectable, inject } from 'tsyringe'

type UptaderoleDTO = {
    id: string
    name: string
}

@injectable()
export class UpdateRoleUseCase {
    constructor(
        @inject('RolesRepository')
        private rolesRepository: IRolesRepository){}

        async execute({ id, name }: UptaderoleDTO): Promise<Role> {
            const role = await this.rolesRepository.findById(id)

            if(!role){
               throw new AppError('Role not found', 404)
            }
            
            const roleWithSameName = await this.rolesRepository.findByName(name)
            
            if(roleWithSameName && role.name !== roleWithSameName.name){
               throw new AppError('Role name not informed or already in use', 400)
            }

            role.name = name

            return this.rolesRepository.save(role)
        
        }
}