import { TIsLogged } from "@/Context/ContextTypes";
import jwt, { Secret } from 'jsonwebtoken';
import { TUserInfo } from "@/pages/api/service/userService";

export const setUserInfo = ({id, name, isLogged}: Omit<TIsLogged, "email"| "address"| "city"| "state" | "zipcode" | "neighborhood"| "phone">) => {
  localStorage.setItem("isLogged", JSON.stringify({
    id, name, isLogged: true,
  }));
};

export const getUserInfo = (): Omit<TIsLogged, "email"| "address"| "city"| "state" | "zipcode" | "neighborhood"| "phone"> => {
  const userInfo = JSON.parse(localStorage.getItem("isLogged") || "{}");
  if(userInfo === null){
    return {id: 0, name: "", isLogged: false};
  }else{
  return userInfo;
}
};

const config = require('dotenv').config();

export const generateJWTToken = (userData: TUserInfo): string => {
  const secret: Secret = process.env.JWT_SECRET || 'secret';
  const token = jwt.sign(userData, secret, { expiresIn: '1h' });
  return token;
};

export const verifyJWTToken = (token: string): TUserInfo | null => {
  try {
    const secret: Secret = process.env.JWT_SECRET || 'secret';
    const decoded = jwt.verify(token, secret) as TUserInfo;
    return decoded;
  } catch (error) {
    return null;
  }
};