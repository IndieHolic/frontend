import classes from "./Header.module.css";
import { Box, Group, Image, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { LogInModal } from "../LogInModal/LogInModal";

export function Header() {
  return (
    <Box className={classes.Container}>
      <Box className={classes.Wrapper}>
        <Group gap={"50px"}>
          <Link href="/">
            <Image src="/images/header/agora-logo.svg" />
          </Link>
          <Group gap={"35px"}>
            <Link className={classes.BlackSemiBold20} href="/">
              게임
            </Link>
            <Link className={classes.BlackSemiBold20} href="/">
              에셋
            </Link>
            <Link className={classes.BlackSemiBold20} href="/">
              커뮤니티
            </Link>
            <Link href="/" style={{ height: "20px" }}>
              <IconSearch size={"20px"} stroke={2} />
            </Link>
          </Group>
        </Group>
        <Group gap={"10px"}>
          <Group gap={"20px"}>
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
