import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "CCRM 관리자",
  description: "CCRM 관리자",
};

const pretendard = localFont({
  src: "/_fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable} text-main-1 font-light`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
