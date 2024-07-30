import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          strategy="afterInteractive"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_CLIENT_ID}`}
        ></Script>

        <div className="flex flex-col items-center bg-slate-300 h-screen ">
          <div className="max-w-[430px] h-screen w-full bg-white flex flex-col justify-center items-center ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
