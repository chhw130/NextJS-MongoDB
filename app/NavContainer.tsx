"use client";
import { HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavContainer = () => {
  return (
    <div>
      <nav>
        <HStack spacing={10}>
          <Link href="/">메인페이지로</Link>
          <Link href="/feed">게시물보기</Link>
          <Link href="/write">게시물작성하기</Link>
        </HStack>
      </nav>
    </div>
  );
};

export default NavContainer;
