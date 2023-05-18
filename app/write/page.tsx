"use client";
import { Input } from "@chakra-ui/react";
import useFeed from "../../hook/useFeed";

export default function Write() {
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
