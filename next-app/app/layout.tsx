import "@mantine/core/styles.layer.css";
import "@mantine/notifications/styles.layer.css";
import "@mantine/carousel/styles.layer.css";
import "@mantine/tiptap/styles.layer.css";
import "@/public/fonts/SBAggroB.css";
import "@/styles/globals.css";
import "@/styles/color-styles.css";
import React from "react";
import type { Metadata } from "next";
import Pretendard from "next/font/local";
import { MantineProvider } from "@mantine/core";
import { AppShell } from "@/components/AppShell/AppShell";
import { Notifications } from "@mantine/notifications";
import { AuthProvider } from "@/components/Commons/AuthProvider/AuthProvider";

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
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={pretendard.className}>
        <MantineProvider>
          <AuthProvider>
            <Notifications />
            <AppShell>{children}</AppShell>
          </AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
