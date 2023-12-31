import classes from "./SubHeader.module.css";
import { Box, Group, Image, Text, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

interface SubHeaderProps {
  children: React.ReactNode;
}
export function SubHeader({ children }: SubHeaderProps) {
  return (
    <section className={classes.SubHeader}>
      <Box className={classes.Container}>
        <Box className={classes.Wrapper}>
          <Group gap={"10px"}>
            <Image src="/images/game/icon-category.svg" />
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
            variant="filled"
            size="xs"
            placeholder="게임 검색하기"
            leftSection={
              <IconSearch size={"20px"} color="#333333" stroke={2} />
            }
          />
        </Box>
      </Box>
      {children}
    </section>
  );
}
