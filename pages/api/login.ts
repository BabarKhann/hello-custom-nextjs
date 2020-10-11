import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

const KEY = "pioneerrrr";

export default (req: NextApiRequest, res: NextApiResponse) => {
  
  if (!req.body) {
    res.statusCode = 404
    res.end("Error: ");
    return;
  }

  const {username, pass} = req.body;

  res.json({
    token: jwt.sign({
      username,
      admin: username === 'admin' && pass === 'admin',
    }, KEY)
  });

}