import { RolesRepository } from "@roles/repositories/RolesRepository";
import { ListRolesUseCase } from "./ListRolesUseCase";
import { ListRolesController } from "./ListrolesController";


const rolesRepository = RolesRepository.getInstance()
const listRolesUseCase = new ListRolesUseCase(rolesRepository)
export const listRolesController = new ListRolesController(listRolesUseCase) 
