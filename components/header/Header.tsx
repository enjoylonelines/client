import React from "react";
import Image from "next/image";
import { addFriend, notification, profile_header } from "@/public/images";

export default function Header() {
  return (
    <div className="flex items-center py-4 w-full justify-between px-2">
      <div className="flex gap-4">
        <Image src={profile_header} alt="profile" width={59} height={59} />
        <p className="flex flex-col text-center justify-center">
          <span className="text-xl font-bold">호범 님, 안녕하세요!</span>
          <span className="font-semibold">오늘의 하루를 기록해봐요</span>
        </p>
      </div>
      <div className="flex gap-5">
        <Image src={addFriend} alt="add" width={32} height={32} />
        <Image src={notification} alt="add" width={28} height={30} />
      </div>
    </div>
  );
}
