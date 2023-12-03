import { IRolesRepository, RolesPaginateProperties } from "@roles/repositories/IRolesRepository";
import { RolesRepository } from "@roles/repositories/RolesRepository";
import { injectable, inject } from 'tsyringe'

type ListrolesUseCaseParams = {
    page: number
    limit: number
}

@injectable()
export class ListRolesUseCase{
    constructor(
        @inject('RolesRepository')
        private rolesRepository: IRolesRepository){}

    async execute({ limit, page}: ListrolesUseCaseParams): Promise<RolesPaginateProperties>{
        const take = limit
        const skip = Number(page - 1) * take
        return this.rolesRepository.findAll({ page, skip, take })
    }
}

