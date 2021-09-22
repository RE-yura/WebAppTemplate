import { NextApiRequest, NextApiResponse } from "next";

export const wrapAPICall =
  (fn: (req: NextApiRequest, res: NextApiResponse) => void) =>
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
      await fn(req, res);
    } catch (e) {
      res.status(422).send(e);
    } finally {
      if (!res.headersSent) res.status(405).send("Method Not Allowed");
    }
  };
