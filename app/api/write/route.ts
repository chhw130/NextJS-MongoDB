import { getFeedList } from "@/pages/axios/axiosSettings";
import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  let data = "";
  try {
    const res = await axios.get(`https://backend.myfavor.site/api/v1/idols/`);
    data = await res.data;
  } catch (error) {
    console.error(error);
  }

  // return res.status(200).json({ data });
  return NextResponse.json({ data }, { status: 200 });
};
