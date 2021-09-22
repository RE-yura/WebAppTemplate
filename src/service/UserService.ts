import { toCamelObject } from "lib/namingRule";
import { User } from "types";

import { get } from "./FetchWrapper";

const getMe = async (): Promise<User> => {
  try {
    const res = await get(`/user`);
    return toCamelObject<User>(res);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const userService = {
  getMe,
};
