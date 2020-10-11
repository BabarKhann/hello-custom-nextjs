import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // res.statusCode = 404;
   console.log("RES",req.query);
  res.json({ numbers: Math.random() });
}