"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  home,
  plus,
  privateAlbum,
  profile,
  publicAlbum,
} from "@/public/images";

export default function Footer() {
  const router = useRouter();

  const handleClickNav = (endPoint: string) => {
    router.push(`/${endPoint}`);
  };
  return (
    <div className="bg-white flex items-center justify-between max-w-[430px] w-full h-20 relative">
      <div className="flex flex-col items-center justify-center w-full cursor-pointer">
        <div
          onClick={() => handleClickNav("main")}
          className="flex flex-col items-center justify-center bg-main_text w-12 h-12 rounded-[50%] p-2"
        >
          <Image src={home} alt="홈" width={36} height={36} />
          <p className="text-[10px] font-semibold text-white">홈</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div
          onClick={() => handleClickNav("public")}
          className="flex flex-col items-center justify-center w-12 h-12 cursor-pointer"
        >
          <Image src={publicAlbum} alt="공유 앨범" width={36} height={36} />
          <p className="text-[10px] font-semibold">공유앨범</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div
          onClick={() => handleClickNav("upload")}
          className="flex flex-col items-center justify-center w-18 h-18 absolute top-[-25px] cursor-pointer"
        >
          <Image src={plus} alt="플러스" width={65} height={65} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div
          onClick={() => handleClickNav("private")}
          className="flex flex-col items-center justify-center  w-12 h-12 cursor-pointer"
        >
          <Image src={privateAlbum} alt="개인앨범" width={36} height={36} />
          <p className="text-[10px] font-semibold ">개인 앨범</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div
          onClick={() => handleClickNav("profile")}
          className="flex flex-col items-center justify-center w-12 h-12 cursor-pointer"
        >
          <Image src={profile} alt="프로필" width={36} height={36} />
          <p className="text-[10px] font-semibold ">프로필</p>
        </div>
      </div>
    </div>
  );
}
