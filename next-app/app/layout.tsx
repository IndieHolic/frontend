import "@mantine/core/styles.layer.css";
import "@/styles/globals.css";
import "@/styles/color-styles.css";
import React from "react";
import type { Metadata } from "next";
import Pretendard from "next/font/local";
import { MantineProvider } from "@mantine/core";
import { AppShell } from "@/components/AppShell/AppShell";

// 공용 폰트 정의
const pretendard = Pretendard({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "AGORA",
  description: "IndieGame Platform",
  icons: "/favicon.ico",
};

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <MantineProvider>
          <AppShell>{children}</AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
