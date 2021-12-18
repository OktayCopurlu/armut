import { UserInfoType } from "./types";
import jwt from "jsonwebtoken";

const verifyJWT = (token: string) => {
  return jwt.verify(token, "thisismyuniqesecretkey") as UserInfoType;
};

export default verifyJWT;
