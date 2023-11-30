import { RolesPaginateProperties, RolesRepository } from "@roles/repositories/RolesRepository";

type ListrolesUseCaseParams = {
    page: number
    limit: number
}
export class ListRolesUseCase{
    constructor(private rolesRepository: RolesRepository){}

    async execute({ limit, page}: ListrolesUseCaseParams): Promise<RolesPaginateProperties>{
        const take = limit
        const skip = Number(page - 1) * take
        return this.rolesRepository.findAll({ page, skip, take })
    }
}

