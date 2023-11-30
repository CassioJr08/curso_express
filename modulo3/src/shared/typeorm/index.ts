import { DataSource } from "typeorm"
import { CreateRolesTable1701366349104 } from "./migrations/1701366349104-CreateRolesTable"
import { Role } from "@roles/entities/Role"

export const dataSource = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [Role],
    migrations: [CreateRolesTable1701366349104],
})