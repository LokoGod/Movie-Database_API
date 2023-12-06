import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const signup = async (email: string, password: string) => {
  const exists = await prisma.user.findUnique({ where: { email: email } });
  if (exists) {
    throw Error(`Email: ${exists} already in use`);
  }
};

const userRepository = { signup };
export default userRepository;
