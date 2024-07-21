import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="flex flex-col items-center bg-slate-300">
          <div className="max-w-[430px] min-h-screen w-full h-full bg-main bg-cover bg-center flex justify-center items-center ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
