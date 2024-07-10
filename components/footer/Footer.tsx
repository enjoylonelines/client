import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { MdBookmarkBorder } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fixed bottom-0 flex items-center justify-between max-w-[430px] w-full h-20">
      <div className="flex flex-col items-center justify-center w-full">
        <RiHome2Line />홈
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <MdBookmarkBorder />
        저장
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <BsChatDots />
        커뮤니티
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <FaRegUser />
        MY
      </div>
    </div>
  );
}
