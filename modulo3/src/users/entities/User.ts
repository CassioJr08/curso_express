import { Role } from "@roles/entities/Role"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from "uuid"  
// Em um contexto de desenvolvimento de backend
// usando Node.js, o termo “entidades” geralmente
// se refere a objetos ou modelos que representam
// os dados do seu aplicativo.

@Entity('users')
export class User {
    @PrimaryColumn()
    id?: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    isAdmin: boolean

    @Column()
    avatar?: string

    @ManyToOne(() => Role, {
        cascade: true,
    })
    role: Role

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id){
            this.id = uuidv4()
        }
    }
}