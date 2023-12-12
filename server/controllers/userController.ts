import userRepository from "../repositories/userRepository";
import jwt from "jsonwebtoken";

//Secret PW should be in the .env file 
const createToken = (id: any) => {
  return jwt.sign({ id }, "magesecretpasswordekathmawhottome", { expiresIn: "3d" });
};

const loginUser = async (req: any, res: any) => {
  res.json({ msg: "login-user" });
};

const signupUser = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const user = await userRepository.signup(email, password);
    // create token
    const token = createToken(user.id)
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Sign-up error" });
  }
};

export { loginUser, signupUser };
