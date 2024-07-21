import { logoImage01, logoImage02 } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const link = "http://13.125.7.51:8080/oauth2/authorization/kakao";

  return (
    <div className="w-full h-[100vh] px-[55px] pt-[55px] pb-[64px]">
      <Image
        className="mt-[100px] m-auto"
        src={logoImage02}
        alt="로고2"
        width={199}
        height={286.1}
      />
      <Image src={logoImage01} alt="로고" width={359} className="absolute " />
      <div className="mt-[157px] flex flex-col items-center gap-[17px]">
        <Link href="/auth/login">
          <button className="bg-white border-4 border-main text-main_text font-bold text-[25px] w-[317px] h-[61px] rounded-[24px]">
            로그인
          </button>
        </Link>
        <Link href="/auth/signUp">
          <button className="bg-white border-4 border-main text-main_text font-bold text-[25px] w-[317px] h-[61px] rounded-[24px]">
            회원가입
          </button>
        </Link>
        <button className="text-[#565151] font-medium text-[18px]">
          SNS 계정으로 로그인하기
        </button>
      </div>
    </div>
  );
}
