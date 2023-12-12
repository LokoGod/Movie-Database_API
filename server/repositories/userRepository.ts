import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import validator from 'validator';

const signup = async (email: string, password: string) => {

  // Validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  if  (!validator.isEmail(email))  {
    throw Error('Email is not valid')
  }
    
  const exists = await prisma.user.findUnique({ where: { email: email } });

  if (exists) {
    throw Error(`Email: ${exists} already in use`);
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({ data: { email, password: hash } });

  return user;
};

const userRepository = { signup };
export default userRepository;
