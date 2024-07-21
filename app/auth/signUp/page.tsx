"use client";
import Input from "@/components/auth/Input";
import { useRouter } from "next/navigation";
import React from "react";

const SignUpPage = () => {
  const router = useRouter();

  const handleSubmit = () => {
    //input 유효 검사
    // 리다이렉션
    router.replace("/auth/login/email");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Input
        type="text"
        name="name"
        label={"이름"}
        placeholder="이름을 입력해주세요"
      />
      <Input
        type="email"
        name="email"
        label="이메일"
        placeholder="이메일을 입력해주세요"
      />
      <div className="flex flex-col gap-3">
        <label className="font-semibold" htmlFor="password">
          비밀번호
        </label>
        <p className="text-xs font-semibold text-[#4b4b4b] ml-1">
          8자 이상 30자 이하 숫자, 특수기호가 포함되어야 합니다.
        </p>
        <input
          placeholder="비밀번호를 입력해주세요"
          className="w-[372px] h-[38px] border-2 border-[#979797] rounded-3xl font-thin text-[15px] leading-[31px] px-3  "
        />
        <input
          placeholder="비밀번호를 다시 입력해주세요"
          className="w-[372px] h-[38px] border-2 border-[#979797] rounded-3xl font-thin text-[15px] leading-[31px] px-3  "
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-[245px] h-[50px] bg-[#BEBEBE] rounded-3xl font-semibold text-[18px] mt-[40px]"
      >
        가입하기
      </button>
    </div>
  );
};

export default SignUpPage;
