"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  const handleLogin = () => {
    //유효성 검사
    window.location.href = "/main";
  };
  return (
    <div className="flex flex-col gap-[34px] items-center">
      <div className="flex flex-col gap-3">
        <label className="font-semibold" htmlFor="email">
          이메일
        </label>
        <input
          name="email"
          type="text"
          placeholder="이메일을 입력해주세요"
          className="w-[372px] h-[38px] border-2 border-[#979797] rounded-3xl font-thin text-[15px] leading-[31px] px-3  "
        />
      </div>
      <div className="flex flex-col gap-3">
        <label className="font-semibold" htmlFor="password">
          비밀번호
        </label>
        <input
          name="password"
          type="text"
          placeholder="비밀번호를 입력해주세요"
          className="w-[372px] h-[38px] border-2 border-[#979797] rounded-3xl font-thin text-[15px] leading-[31px] px-3  "
        />
      </div>
      <button
        onClick={handleLogin}
        className="w-[245px] h-[50px] bg-[#BEBEBE] rounded-3xl font-semibold text-[18px]"
      >
        로그인
      </button>
      <Link href={"/auth/signUp"}>
        <button className="w-[245px] h-[40px] font-semibold text-[18px]">
          회원가입
        </button>
      </Link>
    </div>
  );
};

export default page;
