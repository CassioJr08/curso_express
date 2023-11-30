import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from "uuid"  
//Em um contexto de desenvolvimento de backend usando Node.js, o termo “entidades” geralmente se refere a objetos ou modelos que representam os dados do seu aplicativo.

@Entity('roles')
export class Role {
    @PrimaryColumn()
    id?: string

    @Column()
    name: string

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id){
            this.id = uuidv4()
        }
    }
}