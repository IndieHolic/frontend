"use client";

import classes from "./Tab.module.css";
import { Box, Group, UnstyledButton } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Tab() {
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState<string>("");
  useEffect(() => {
    if (pathname.endsWith("announce")) setActiveTab("공지");
    else if (pathname.endsWith("review")) setActiveTab("리뷰");
    else setActiveTab("소개");
  }, [pathname]);

  return (
    <Group justify="flex-start" gap={0} w={800}>
      <UnstyledButton
        className={`${classes.TabItem} ${
          activeTab === "소개" && classes.ActiveTab
        }`}
        onClick={() => {
          router.push(`/game/${1234}`, { scroll: false });
        }}
      >
        소개
      </UnstyledButton>
      <UnstyledButton
        className={`${classes.TabItem} ${
          activeTab === "공지" && classes.ActiveTab
        }`}
        onClick={() => {
          router.push(`/game/${1234}/announce`, { scroll: false });
        }}
      >
        공지
      </UnstyledButton>
      <UnstyledButton
        className={`${classes.TabItem} ${
          activeTab === "리뷰" && classes.ActiveTab
        }`}
        onClick={() => {
          router.push(`/game/${1234}/review`, { scroll: false });
        }}
      >
        리뷰
      </UnstyledButton>
      <Box className={classes.TabExtra}></Box>
    </Group>
  );
}
