import { sign } from "jsonwebtoken"


export function generateToken(user: any) {
    return sign(user, "JWT Secure Key", {
        //Optional
        //expiresIn: process.env.USER_JWT_EXPIRE_DURATION,
    });
}