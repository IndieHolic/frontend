import {
  IconBasket,
  IconBell,
  IconDeviceGamepad2,
  IconNews,
  IconSearch,
  IconUpload,
  IconUserSquareRounded,
} from "@tabler/icons-react";
import classes from "./Header.module.css";
import {
  Box,
  Group,
  Image,
  UnstyledButton,
  Text,
  TextInput,
} from "@mantine/core";
import Link from "next/link";

export function Header() {
  return (
    <Box className={classes.Container}>
      <Box className={classes.TopContainer}>
        <Group className={classes.Wrapper} justify="space-between">
          <Link href="/">
            <Image src="/images/header/agora-logo.svg" />
          </Link>
          <Group gap={"10px"}>
            <TextInput
              classNames={{
                root: classes.SearchRoot,
                wrapper: classes.SearchRoot,
                input: classes.SearchInput,
                section: classes.SearchSection,
              }}
              placeholder="검색"
              leftSection={
                <IconSearch size={"20px"} stroke={2} color="#138BCF" />
              }
            />
            <Text className={classes.WhiteMedium14}>·</Text>
            <Link className={classes.ImageBellHover} href="/">
              <Image src="/images/header/icon-bell.svg" />
            </Link>
            <Link href="/" className={classes.ImageUserHover}>
              <Image src="/images/header/icon-user.svg" />
              <Text className={classes.WhiteMedium14}>로그인</Text>
            </Link>
          </Group>
        </Group>
      </Box>
      <Box className={classes.BottomContainer}>
        <Group className={classes.Wrapper} justify="space-between">
          {/* 좌측 컨텐츠 */}
          <Group gap={"10px"}>
            <Link className={classes.MenuTab} href="/">
              <IconDeviceGamepad2 size={"24px"} stroke={1.5} />
              <Text className={classes.BlackSemiBold16}>게임</Text>
            </Link>
            <Link className={classes.MenuTab} href="/">
              <IconBasket size={"24px"} stroke={1.5} />
              <Text className={classes.BlackSemiBold16}>에셋</Text>
            </Link>
            <Link className={classes.MenuTab} href="/">
              <IconNews size={"24px"} stroke={1.5} />
              <Text className={classes.BlackSemiBold16}>커뮤니티</Text>
            </Link>
          </Group>
          {/* 우측 컨텐츠 */}
          <Group gap={"13px"}>
            <Link href="/">
              <Group gap={"3px"}>
                <IconUpload size={"22px"} stroke={1.5} />
                <Text className={classes.BlackMedium14}>업로드</Text>
              </Group>
            </Link>
            <UnstyledButton h={"22px"}>
              <Group gap={"3px"}>
                <Image src="/images/header/icon-client-play.svg" />
                <Text className={classes.BlackMedium14}>클라이언트 실행</Text>
              </Group>
            </UnstyledButton>
          </Group>
        </Group>
      </Box>
    </Box>
  );
}
