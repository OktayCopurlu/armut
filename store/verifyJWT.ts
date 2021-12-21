import { currentUserInfoType } from "./types";
import jwt from "jsonwebtoken";

const verifyJWT = (token: string) => {
  return jwt.verify(token, "thisismyuniqesecretkey") as currentUserInfoType;
};

export default verifyJWT;
