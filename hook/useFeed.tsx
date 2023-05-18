import React from "react";
import axios from "axios";
import { getData } from "@/pages/axios/axiosSettings";
import { useQuery } from "@tanstack/react-query";

const useFeed = () => {
  const fallback: [] = [];
  const { data = fallback } = useQuery(["test"], getData);

  return { data };
};

export default useFeed;
