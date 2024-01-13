"use client";

import classes from "./SubHeader.module.css";
import {
  Box,
  Group,
  Image,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SubHeaderProps {
  children: React.ReactNode;
}
export function SubHeader({ children }: SubHeaderProps) {
  const router = useRouter();
  const [value, setValue] = useState("");

  const SubmitSearch = () => {
    if (value === "") router.push("/game/all-game");
    else router.push(`/game/all-game?search=${value}`);
  };

  return (
    <section className={classes.SubHeader}>
      <Box className={classes.Container}>
        <Box className={classes.Wrapper}>
          <Group gap={10}>
            <Link href="/game/all-game">
              <Image src="/images/game/icon-category.svg" />
            </Link>
            <Text className={classes.WhiteExtraLight18}>·</Text>
            <Link href="/">
              <Text className={classes.WhiteExtraLight18}>크리스마스 특집</Text>
            </Link>
            <Text className={classes.WhiteExtraLight18}>·</Text>
            <Link href="/">
              <Text className={classes.SBAggroMainBold18}>AGORA Primium</Text>
            </Link>
          </Group>
          <TextInput
            classNames={{
              section: classes.TextInputSection,
              input: classes.TextInputInput,
            }}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") SubmitSearch();
            }}
            variant="filled"
            size="xs"
            placeholder="게임 검색하기"
            leftSection={
              <UnstyledButton onClick={() => SubmitSearch} h={20}>
                <IconSearch size={20} color="#333333" stroke={2} />
              </UnstyledButton>
            }
          />
        </Box>
      </Box>
      <section className={classes.MainSection}>{children}</section>
    </section>
  );
}
