import { RolesRepository } from "@roles/repositories/RolesRepository";
import { ListRolesUseCase } from "./ListRolesUseCase";
import { ListrolesController } from "./ListrolesController";

const rolesRepository = new RolesRepository()
const listRolesUseCase = new ListRolesUseCase(rolesRepository)
export const listRolesController = new ListrolesController(listRolesUseCase) 