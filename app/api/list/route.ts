import { getFeedList } from "@/pages/axios/axiosSettings";
import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GET = (req: NextApiRequest, res: NextApiResponse) => {
  return NextResponse.json("hello NextJs");
};
