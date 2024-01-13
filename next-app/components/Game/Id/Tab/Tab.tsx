import classes from "./Tab.module.css";
import { Dispatch, SetStateAction } from "react";
import { Box, Group, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/navigation";

interface TabProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}
export function Tab({ activeTab, setActiveTab }: TabProps) {
  const router = useRouter();

  return (
    <Group justify="flex-start" gap={0} w={800}>
      <UnstyledButton
        className={`${classes.TabItem} ${
          activeTab === "소개" && classes.ActiveTab
        }`}
        onClick={() => {
          setActiveTab("소개");
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
          setActiveTab("공지");
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
          setActiveTab("리뷰");
          router.push(`/game/${1234}/review`, { scroll: false });
        }}
      >
        리뷰
      </UnstyledButton>
      <Box className={classes.TabExtra}></Box>
    </Group>
  );
}
