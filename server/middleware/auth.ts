import { compare, hash } from 'bcrypt'
import { sign, verify } from 'jsonwebtoken'
import { Prisma } from '@prisma/client'

const SECRET_KEY = '1234'

export async function hashPassword(password: string): Promise<string> {
    return hash(password, 10)
}

