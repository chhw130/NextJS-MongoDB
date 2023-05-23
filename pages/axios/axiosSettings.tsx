"use client";
import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/api/v1" : "",
  withCredentials: true,
});

export const getFeedList = async () =>
  await instance.get(`/list`).then((res) => {
    return res.data;
  });

export const getData = async () =>
  await instance
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.data);

// export const specificIdolInform = () =>
//   instance
//     .get(
//       // "/api/write"
//       "/idols/schedules/"
//       // `https://backend.curb.site/api/v1/feeds/`
//     )
//     .then((response) => response.data);
