import { hash, compare } from 'bcrypt';

import CustomError from '../utils/error/error';
import { generateToken } from '../utils/functions';
import User,{IUser} from '../model/user'

export async function signup(name: string, email: string, password: string) {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new CustomError("Email already registered", 400)

    password = await hash(password, 10);
    let newUser: IUser  = { name, email, password };
    newUser = await User.create(newUser);

    delete newUser.password;
    const token = generateToken({ ...newUser, user_type: "client" });
    return { success: true, message: "Login successful", token, user: newUser };
};

export async function login (email: string, password: string) {
    let user: IUser = await User.findOne({ email }).select("+password");

    if (!user) throw new CustomError("Invalid credentials", 401);

    const isPasswordValid = await compare(password, user.password ?? "");

    if (!isPasswordValid) throw new CustomError("Invalid credentials", 401);

    delete user.password;
    const token = generateToken({ ...user, user_type: "client" });
    return { success: true, message: "Login successful", token, user };
};