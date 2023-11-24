import { Role } from "@roles/entities/Role"

type CreateRoleDTO = {
    name: string
}

export class RolesRepository {
    private roles: Role[]

    constructor(){
        this.roles = []
    }

    create({ name }: CreateRoleDTO) {
        const role =  new Role()
        Object.assign(role, {  // esse metodo é usado para mesclar propriedades
        name,
        created_at: new Date()
   })

        //console.log(role)
    this.roles.push(role)
    return role
    }
}