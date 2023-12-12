import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { Secret, verify } from "jsonwebtoken";
import authConfig from '@config/auth'

type JwtPaiLoadProps = {
    sub: string
}

export const isAuthenticated = (
    request: Request, response: Response, next: NextFunction
) => {
    const authHeader = request.headers.authorization
    if (!authHeader) {
        throw new AppError('Failed to verify acess token', 401)
    }

    const token = authHeader.replace('Bearer ', '')

    try{
        const decodedToken = verify(token, authConfig.jwt.secret as Secret)
        const { sub } = decodedToken as JwtPaiLoadProps
        request.user = { id: sub }
        next()
    } catch {
        throw new AppError('Inavlid authentication token', 401)
    }

}