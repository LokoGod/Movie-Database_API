const loginUser = async (req: any, res: any) => {
  res.json({ msg: "login-user" });
};

const signupUser = async (req: any, res: any) => {
  res.json({ msg: "signup-user" });
};

export { loginUser, signupUser };