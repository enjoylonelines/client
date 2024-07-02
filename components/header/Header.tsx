import React from "react";
import { GoBell } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="w-3/4">logo</div>
      <div className="flex items-center w-1/4">
        <div className="w-full">
          <GoBell className="w-5 h-5" />
        </div>
        <div className="w-full">
          <TfiWrite className="w-5 h-5" />
        </div>
        <div className="w-full">
          <IoMenu className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
