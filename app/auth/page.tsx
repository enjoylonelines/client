"use client";
import Button from "@/components/auth/Button";
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
    <div className="w-full h-[100vh] px-[22px] pt-[55px]">
      <Image
        src={logoImage01}
        alt="로고"
        width={166}
        height={39}
        className="mb-[154px]"
      />
      <Image
        className="m-auto mb-[99.9px]"
        src={logoImage02}
        alt="로고2"
        width={199}
        height={286.1}
      />
      <p className="mb-3 font-extrabold">3초 가입으로 바로 시작해보세요. </p>

      <div className="flex flex-col gap-[23.33px] mb-[63.31px]">
        <Link href={link}>
          <Image
            src={kakaoButton}
            alt="카카오로그인버튼"
            width={386}
            height={60.4}
          />
        </Link>
        <Link href={link}>
          <Image
            src={appleButton}
            alt="애플로그인버튼"
            width={386}
            height={60.4}
          />
        </Link>
        <Link href={link}>
          <Image
            src={googleButton}
            alt="구글로그인버튼"
            width={386}
            height={60.4}
          />
        </Link>
      </div>
    </div>
  );
};

export default page;
