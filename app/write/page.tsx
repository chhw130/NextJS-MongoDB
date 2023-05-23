"use client";
import useFeed from "@/hook/useFeed";
import { Input } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export default function Write() {
  const data = useFeed();

  console.log(data);

  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <Input name="title" placeholder="글제목" />
        <Input name="description" placeholder="설명" />

        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
