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
              《Hexile》은 매 스테이지가 확장되는 전략 게임으로, 플레이어는
              끊임없이 스폰되는 AI 적들과 맞서 싸워야 합니다. 폐허가 된
              세계에서의 생존을 위해 자원을 수집하고, 미사일을 제작하여 적들을
              물리치는 것이 궁극적인 목표입니다. 매 턴마다 자원을 확보하고,
              전략적으로 타일을 구매하며, 고도로 맞춤화된 미사일로 적의 방어를
              뚫어야 합니다. 적들의 타일을 점령하고 전쟁의 조류를 바꾸세요. 각
              선택은 승리로 가는 길을 닦거나 패배의 함정에 빠뜨릴 수 있습니다.
              전략가로서 당신의 지혜와 결정이 이 무너진 세계의 운명을
              결정짓습니다. 과연 당신은 이 치열한 전투를 헤쳐나가 폐허 속에서
              희망의 빛을 발견할 수 있을까요?
            </Text>
            <Divider w={"100%"} color="#E6E6E6" />
            {/* 두 번째 섹션 */}
            <Group justify="flex-start" gap={24}>
              <Stack align="flex-start" gap={12}>
                <Text className={classes.BlackRegular14}>장르</Text>
                <Text className={classes.BlackRegular14}>이용 등급</Text>
                <Text className={classes.BlackRegular14}>출시일</Text>
                <Text className={classes.BlackRegular14}>평점</Text>
              </Stack>
              <Stack align="flex-start" gap={12}>
                <Link className={classes.LinkText} href="/">
                  전략 시뮬레이션
                </Link>
                <Link className={classes.LinkText} href="/">
                  12세이용가
                </Link>
                <Text className={classes.Gray6Regular14}>2024.01.05</Text>
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
