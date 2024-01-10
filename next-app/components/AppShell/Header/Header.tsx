import classes from "./Header.module.css";
import { Box, Group, Image, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { LogInModal } from "../LogInModal/LogInModal";

export function Header() {
  return (
    <Box className={classes.Container}>
      <Box className={classes.Wrapper}>
        <Group gap={50}>
          <Link href="/">
            <Image src="/images/header/agora-logo.svg" />
          </Link>
          <Group gap={35}>
            <Link className={classes.BlackSemiBold20} href="/game">
              게임
            </Link>
            <Link className={classes.BlackSemiBold20} href="/">
              에셋
            </Link>
            <Link className={classes.BlackSemiBold20} href="/">
              개발 공간
            </Link>
            <Link href="/" style={{ height: "20px" }}>
              <IconSearch size={20} stroke={2} />
            </Link>
          </Group>
        </Group>
        <Group gap={10}>
          <Group gap={20}>
            <Link className={classes.BlackRegular14} href="/">
              업로드
            </Link>
            <Link className={classes.BlackRegular14} href="/">
              클라이언트 실행
            </Link>
          </Group>
          <Text className={classes.BlackRegular14}>·</Text>
          <Link className={classes.ImageShoppingBag} href="/">
            <Image src="/images/header/icon-shopping-bag.svg" />
          </Link>
          <Link className={classes.ImageBell} href="/">
            <Image src="/images/header/icon-bell.svg" />
          </Link>
          <LogInModal />
        </Group>
      </Box>
    </Box>
  );
}
