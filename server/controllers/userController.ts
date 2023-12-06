import userRepository from "../repositories/userRepository";

const loginUser = async (req: any, res: any) => {
  res.json({ msg: "login-user" });
};

const signupUser = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const user = await userRepository.signup(email, password);
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Sign-up error" });
  }
};

export { loginUser, signupUser };
