import { Role } from "@roles/entities/Role"

type CreateRoleDTO = {
    name: string
}

export class RolesRepository {
    private roles: Role[]
    private static INSTANCE: RolesRepository

    private constructor(){
        this.roles = []
    }

    public static  getInstance(): RolesRepository {
        if (!RolesRepository.INSTANCE){
            RolesRepository.INSTANCE = new RolesRepository()
        }
        return RolesRepository.INSTANCE
    }

    create({ name }: CreateRoleDTO): Role {
        
        const role =  new Role()
        Object.assign(role, {  // esse metodo é usado para mesclar propriedades
        name,
        created_at: new Date()
   })

        //console.log(role)
        this.roles.push(role)
        return role
    }

    findAll(): Role[] {
        return this.roles
    }

    findByName(name: string): Role | undefined{
        return this.roles.find(role => role.name.toUpperCase() === name.toUpperCase())
    }
}