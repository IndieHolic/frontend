import {
  Avatar,
  Box,
  Button,
  Group,
  Image,
  Overlay,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./GameDisplay.module.css";
import { IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";

export function GameDisplay() {
  return (
    <Link className={classes.Relative} href="/">
      <Box className={classes.Container}>
        <Stack gap={0}>
          <Image className={classes.Image} src="/images/game/ALPO.jpg" />
          <Stack
            align="flex-start"
            justify="space-between"
            gap={0}
            h={"125px"}
            p={"8px"}
          >
            <Stack gap={"4px"}>
              <Text className={classes.Gray6Regular12} lineClamp={1}>
                어드벤처
              </Text>
              <Text className={classes.BlackBold16} lineClamp={2}>
                ALPO Way Home
              </Text>
            </Stack>
            <Stack gap={"4px"}>
              <Group gap={"6px"}>
                <Avatar className={classes.Avatar} size={"20px"}>
                  <IconUserCircle color="#B3B3B3" stroke={1} />
                </Avatar>
                <Text className={classes.Gray6Regular12} lineClamp={1}>
                  Team Escape
                </Text>
              </Group>
              <Group gap={"6px"}>
                <Box className={classes.DiscountBox}>-50%</Box>
                <Stack align="flex-start" gap={"1px"}>
                  <Text className={classes.Gray6Regular10}>₩ 30,000</Text>
                  <Text className={classes.MainSemiBold14}>₩ 15,000</Text>
                </Stack>
              </Group>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Overlay
        className={classes.Overlay}
        color="#000"
        backgroundOpacity={0.45}
        blur={10}
      >
        <Text className={classes.WhiteRegular14} lineClamp={5}>
          하늘 높은 곳에 살던 정령 'ALPO'가 모종의 이유로 중력이 마구잡이로
          뒤바뀐 지하도시까지 떨어지게 됩니다. 다시 원래 있던 곳으로 돌아가기
          위해 지하세계를 탐험하며 위로 올라갈 방법을 찾아야 하는 2D 플랫포머
          게임입니다.
        </Text>
        <Button className={classes.Button} variant="filled">
          <Image src="/images/game/icon-shopping-bag-white.svg" />
        </Button>
        {false && (
          <Button className={classes.ActiveButton} variant="filled">
            <Image src="/images/game/icon-shopping-bag-filled-white.svg" />
          </Button>
        )}
      </Overlay>
    </Link>
  );
}
