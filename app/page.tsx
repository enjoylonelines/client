import {
  background,
  buttonImage01,
  buttonImage02,
  logoImage01,
} from "@/public/images";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[100vh] pt-[55px] pl-[26px]">
      <Image
        className="mb-[12px]"
        src={logoImage01}
        alt="로고"
        width={166}
        height={39}
      />
      <p className="font-extrabold text-[25px] leading-7 mb-[35px]">
        간편하게 일상생활을 기록하고
        <br />
        공유해보세요
      </p>
      <div className="flex justify-end w-full pr-3">
        <Image
          className="mb-[42px]"
          src={background}
          alt="배경"
          width={302}
          height={602}
        />
      </div>
      <div className="flex gap-5">
        <Link href={"/auth"}>
          <Image src={buttonImage01} alt="버튼1" width={181} height={56} />
        </Link>
        <button>
          <Image src={buttonImage02} alt="버튼2" width={181} height={56} />
        </button>
      </div>
    </div>
  );
}
