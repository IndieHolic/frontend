"use client";

import Link from "next/link";
import classes from "./GameInfo.module.css";
import {
  Box,
  Button,
  Divider,
  Group,
  Rating,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { TagAddModal } from "../../TagAddModal/TagAddModal";
import { ShowCompleteNoti } from "@/components/Commons/NotificationSystem/NotificationSystem";

export function GameInfo() {
  const tagList = [
    "로그라이크",
    "액션",
    "힐링",
    "아케이드",
    "싱글 플레이",
    "초보자 추천",
    "쉬운 난이도",
  ];

  const tagItems = tagList.map((item) => (
    <Box key={item} className={classes.TagBox}>
      {item}
    </Box>
  ));

  const isDiscount = true;

  return (
    <Stack gap={20}>
      {/* 게임 정보 컨테이너 */}
      <Box className={classes.Container}>
        <Stack gap={24}>
          <Text className={classes.BlackExtraLight20}>게임 정보</Text>
          <Stack gap={16}>
            {/* 첫 번째 섹션 */}
            <Text className={classes.InfoText} lineClamp={5}>
              《화산의 딸》은 다양한 엔딩이 있는 육성 시뮬레이션 게임으로,
              아내가 죽은 뒤 유일한 보호자가 된 당신은 딸을 정성껏 돌보고 키워야
              합니다. 집 밖에서는 인간과 마족의 갈등이 갈수록 깊어지고 있습니다.
              이때 마족의 수장인 미네르바가 다시 쳐들어온다면 화산국에서는
              올바른 힘이 더욱 필요할 것입니다. 딸은 어떤 여성으로 성장할까요?
              화산국의 미래는 어떻게 될까요? 당신의 선택 하나하나가 모두
              중요합니다.
            </Text>
            <Divider w={"100%"} color="#E6E6E6" />
            {/* 두 번째 섹션 */}
            <Group justify="flex-start" gap={24}>
              <Stack align="flex-start" gap={12}>
                <Text className={classes.BlackRegular14}>장르</Text>
                <Text className={classes.BlackRegular14}>개발사</Text>
                <Text className={classes.BlackRegular14}>배급사</Text>
                <Text className={classes.BlackRegular14}>이용 등급</Text>
                <Text className={classes.BlackRegular14}>출시일</Text>
                <Text className={classes.BlackRegular14}>평점</Text>
              </Stack>
              <Stack align="flex-start" gap={12}>
                <Link className={classes.LinkText} href="/">
                  시뮬레이션
                </Link>
                <Link className={classes.LinkText} href="/">
                  시뮬레이션
                </Link>
                <Link className={classes.LinkText} href="/">
                  시뮬레이션
                </Link>
                <Link className={classes.LinkText} href="/">
                  시뮬레이션
                </Link>
                <Text className={classes.Gray6Regular14}>시뮬레이션</Text>
                <Group gap={4}>
                  <Rating size="xs" value={3.5} fractions={2} readOnly />
                  <Text className={classes.Gray6Regular14}>(3.5)</Text>
                </Group>
              </Stack>
            </Group>
            <Divider w={"100%"} color="#E6E6E6" />
            {/* 세 번째 섹션 */}
            <Stack align="flex-start" justify="flex-start" gap={12} h={132}>
              <Text className={classes.BlackRegular14}>
                이 게임의 인기 태그
              </Text>
              <Box className={classes.FlexBox}>
                <TagAddModal location="game-info" />
                {tagItems}
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {/* 게임 구매 버튼 그룹 */}
      <Group gap={15}>
        <Tooltip className={classes.Tooltip} label="장바구니에 담기">
          <Button
            className={classes.PurchaseButton}
            variant="filled"
            onClick={() =>
              ShowCompleteNoti({
                title: "게임이 장바구니에 담겼습니다.",
                message: "결제를 진행하시려면 장바구니로 이동해 주세요.",
              })
            }
          >
            {isDiscount ? (
              <Group gap={10}>
                <Box className={classes.DiscountBox}>-50%</Box>
                <Stack align="flex-start" gap={2}>
                  <Text className={classes.Gray2Regular14} td="line-through">
                    ₩60,000
                  </Text>
                  <Text className={classes.WhiteSemiBold20}>₩ 30,000</Text>
                </Stack>
              </Group>
            ) : (
              <Text className={classes.WhiteSemiBold22}>₩ 30,000</Text>
            )}
          </Button>
        </Tooltip>
        <Button className={classes.PremiumButton} variant="outline">
          <Stack gap={0}>
            <Text className={classes.SBAggroMainBold20}>AGORA</Text>
            <Text className={classes.SBAggroMainBold20}>Premium</Text>
          </Stack>
        </Button>
      </Group>
      {/* <Button className={classes.PlayButton} variant="outline">
        게임 플레이
      </Button> */}
    </Stack>
  );
}
