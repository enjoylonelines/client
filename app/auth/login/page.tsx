"use client";
import {
  appleButton,
  googleButton,
  kakaoButton,
  logoImage01,
  logoImage02,
} from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const link = "http://13.125.7.51:8080/oauth2/authorization/kakao";

  const handleLogin = () => {
    window.location.href = link;
  };

  return (
    <div className="w-full h-[100vh] px-[55px] pt-[55px] pb-[64px]">
      <Image
        className="m-auto mt-[100px]"
        src={logoImage02}
        alt="로고2"
        width={199}
        height={286.1}
      />
      <Image src={logoImage01} alt="로고" width={359} className="absolute" />
      <div className="flex flex-col gap-[20px] mb-[63.31px] mt-[130px]">
        <Link href={link}>
          <Image
            src={kakaoButton}
            alt="카카오로그인버튼"
            width={319}
            height={50}
          />
        </Link>
        <Link href={link}>
          <Image
            src={appleButton}
            alt="애플로그인버튼"
            width={319}
            height={50}
          />
        </Link>
        <Link href={link}>
          <Image
            src={googleButton}
            alt="구글로그인버튼"
            width={319}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
};

export default page;
