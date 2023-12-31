import { inject, injectable } from "tsyringe"
import { compare } from "bcryptjs"
import jwtConfig from "@config/auth"
import { User } from "@users/entities/User"
import { IUsersRepository } from "@users/repositories/IUsersRepository"
import { AppError } from "src/shared/errors/AppError"
import { sign } from "jsonwebtoken"

type CreateLoginDTO = {
    email: string
    password: string
  }
type IResponse = {
    user: User
    token: string
}


  
  @injectable()
  export class CreateLoginUseCase {
    constructor(
      @inject('UsersRepository') private usersRepository: IUsersRepository,
     
    ) {}
  
    async execute({
      email,
      password,
    }: CreateLoginDTO): Promise<IResponse> {
      const user = await this.usersRepository.findByEmail(email)
      if (!user) {
        throw new AppError('Incorrect email/passoword combination', 401)
      }
      const passowordConfirmed = await compare(password, user.password)
      if (!passowordConfirmed) {
        throw new AppError('Incorrect email/passoword combination', 401)
      }

      const token = sign({}, jwtConfig.jwt.secret, {
        subject: user.id,
        expiresIn: jwtConfig.jwt.expiresIn
      })
      return {
        user, 
        token
      }
      
    }
}