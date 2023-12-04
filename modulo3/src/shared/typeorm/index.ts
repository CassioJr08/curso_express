import { DataSource } from "typeorm"
import { CreateRolesTable1701366349104 } from "./migrations/1701366349104-CreateRolesTable"
import { Role } from "@roles/entities/Role"
import { CreateUsersTable1701709190656 } from "./migrations/1701709190656-CreateUsersTable"
import { AddroleIdToUsersTable1701710657971 } from "./migrations/1701710657971-AddroleIdToUsersTable"
import { User } from "@users/entities/User"

export const dataSource = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [Role, User],
    migrations: [
        CreateRolesTable1701366349104, 
        CreateUsersTable1701709190656,
        AddroleIdToUsersTable1701710657971
    ]
})