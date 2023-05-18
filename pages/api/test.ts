import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
  } else if (req.method === "POST") {
  }
  res.status(200).json("처리완료");
}
