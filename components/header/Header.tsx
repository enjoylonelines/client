import React from "react";
import { GoBell } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";

{
  /* <GoBell className="w-5 h-5" />
<IoMenu className="w-5 h-5" /> */
}
export default function Header() {
  return (
    <div className="flex items-center justify-center my-3">
      <Image src="/mapstory_logo.png" alt="logo" width={230} height={54} />
    </div>
  );
}
