import { wrapAPICall } from "lib/wrapAPICall";
import { NextApiRequest, NextApiResponse } from "next";

const apiCall = (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({
    name: "hoge huga",
    email: "hogehuga@gmail.com",
  });
};

// eslint-disable-next-line import/no-default-export
export default wrapAPICall(apiCall);
