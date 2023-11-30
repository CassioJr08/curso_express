import { DataSource } from "typeorm"
import { CreateRolesTable1701366349104 } from "./migrations/1701366349104-CreateRolesTable"

export const dataSource = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [],
    migrations: [CreateRolesTable1701366349104],
})