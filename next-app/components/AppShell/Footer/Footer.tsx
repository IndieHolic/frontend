import { Box, Image, Text, Divider, Stack, Group } from "@mantine/core";
import classes from "./Footer.module.css";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconExternalLink,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <Box className={classes.Container}>
      <Box className={classes.Wrapper}>
        <Box className={classes.TopContainer}>
          <Stack
            w={"175px"}
            h={"104px"}
            align="flex-start"
            justify="flex-start"
            gap="20px"
          >
            <Text className={classes.Gray6Bold18}>정보</Text>
            <Stack align="flex-start" justify="flex-start" gap="12px">
              <Link href="/">
                <Text className={classes.LinkText}>공지사항</Text>
              </Link>
              <Link href="/">
                <Text className={classes.LinkText}>업데이트</Text>
              </Link>
            </Stack>
          </Stack>
          <Stack
            w={"175px"}
            h={"104px"}
            align="flex-start"
            justify="flex-start"
            gap="20px"
          >
            <Text className={classes.Gray6Bold18}>구매 관리</Text>
            <Stack align="flex-start" justify="flex-start" gap="12px">
              <Link href="/">
                <Text className={classes.LinkText}>구매 · 구독 내역</Text>
              </Link>
              <Link href="/">
                <Text className={classes.LinkText}>코인 샵</Text>
              </Link>
              <Link href="/">
                <Text className={classes.LinkText}>인벤토리</Text>
              </Link>
            </Stack>
          </Stack>
          <Stack
            w={"175px"}
            h={"104px"}
            align="flex-start"
            justify="flex-start"
            gap="20px"
          >
            <Text className={classes.Gray6Bold18}>고객센터</Text>
            <Stack align="flex-start" justify="flex-start" gap="12px">
              <Link href="/">
                <Text className={classes.LinkText}>자주묻는 질문</Text>
              </Link>
              <Link href="/">
                <Text className={classes.LinkText}>1:1 문의</Text>
              </Link>
            </Stack>
          </Stack>
          <Stack
            w={"175px"}
            h={"104px"}
            align="flex-start"
            justify="flex-start"
            gap="20px"
          >
            <Text className={classes.Gray6Bold18}>도움말</Text>
            <Stack align="flex-start" justify="flex-start" gap="12px">
              <Link href="/">
                <Text className={classes.LinkText}>이용 약관</Text>
              </Link>
              <Link href="/">
                <Text className={classes.LinkText}>개인정보 처리방침</Text>
              </Link>
            </Stack>
          </Stack>
        </Box>
        <Divider variant="dashed" color="#CCCCCC" />
        <Box className={classes.BottomContainer}>
          <Stack align="flex-start" justify="flex-start" gap="24px">
            <Group w={"100%"} justify="space-between">
              <Image src="/images/footer/agora-logo-gray.svg" />
              <Group gap="10px">
                <Link href="/" style={{ height: "20px" }}>
                  <IconBrandYoutube
                    size={"20px"}
                    color="#808080"
                    stroke={1.5}
                  />
                </Link>
                <Link href="/" style={{ height: "20px" }}>
                  <IconBrandX size={"20px"} color="#808080" stroke={1.5} />
                </Link>
                <Link href="/" style={{ height: "20px" }}>
                  <IconBrandInstagram
                    size={"20px"}
                    color="#808080"
                    stroke={1.5}
                  />
                </Link>
              </Group>
            </Group>
            <Stack align="flex-start" justify="flex-start" gap="8px">
              <Text className={classes.Gray5Regular14}>
                <Text className={classes.Gray5Bold14} component="span">
                  아고라
                </Text>{" "}
                · 대표 김상현
              </Text>
              <Text className={classes.Gray5Regular14}>주소</Text>
              <Group gap={"4px"}>
                <Text className={classes.Gray5Regular14}>
                  사업자등록번호 · 통신판매업 신고번호 ·
                </Text>
                <Link href="/">
                  <Group gap={"2px"}>
                    <Text className={classes.Gray5Regular14} td={"underLine"}>
                      사업자정보 확인
                    </Text>
                    <IconExternalLink
                      size={"14px"}
                      color="#999999"
                      stroke={1.5}
                    />
                  </Group>
                </Link>
              </Group>
              <Text className={classes.Gray5Regular14}>이메일</Text>
            </Stack>
            <Text className={classes.Gray3Regular12}>
              아고라는 개별 디지털콘텐츠의 통신판매중개자로 통신판매의 당사자가
              아니며, AGORA 서비스 내 입점한 개별 콘텐츠 제공자가 등록한 상품,
              상품정보, 거래에 관한 일체의 의무와 책임은 각 콘텐츠 제공자에게
              있습니다.
            </Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
