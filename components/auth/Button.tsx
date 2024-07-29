import { kakaoLoginButtonImage } from "@/public/images";
import Image from "next/image";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loginType: "kakao" | "google";
}

const Button = ({ loginType, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      <Image src={kakaoLoginButtonImage} alt="카카오로그인버튼" />
    </button>
  );
};

export default Button;
