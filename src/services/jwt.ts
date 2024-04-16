import { User } from "@prisma/client";
import { prismaClient } from "../clients/db";
import JWT from "jsonwebtoken";

const JWT_SECERETE = "$uper@12";

class JMTservices {
  public static generatorTokenForUser(user: User) {
    const payload = {
      id: user?.id,
      email: user?.id,
    };

    const token = JWT.sign(payload, JWT_SECERETE);
    return token;
  }
}

export default JMTservices;
