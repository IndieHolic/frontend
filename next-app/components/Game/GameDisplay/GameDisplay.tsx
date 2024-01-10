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
    <Link href="/" target="_blank">
      <Box className={classes.Container}>
        <Stack gap={0}>
          <Box className={classes.Relative}>
            <Image className={classes.Image} src="/images/game/ALPO.jpg" />
            <Overlay
              className={classes.Overlay}
              color="#000"
              backgroundOpacity={0.35}
              blur={10}
            >
              <Text className={classes.WhiteRegular14} lineClamp={4}>
                하늘 높은 곳에 살던 정령 'ALPO'가 모종의 이유로 중력이
                마구잡이로 뒤바뀐 지하도시까지 떨어지게 됩니다. 다시 원래 있던
                곳으로 돌아가기 위해 지하세계를 탐험하며 위로 올라갈 방법을
                찾아야 하는 2D 플랫포머 게임입니다.
              </Text>
            </Overlay>
          </Box>
          <Stack
            align="flex-start"
            justify="space-between"
            gap={0}
            h={125}
            p={8}
          >
            <Stack gap={4}>
              <Text className={classes.Gray6Regular12} lineClamp={1}>
                어드벤처
              </Text>
              <Text className={classes.BlackBold16} lineClamp={2}>
                ALPO Way Home
              </Text>
            </Stack>
            <Group w={"100%"} align="flex-end" justify="space-between" gap={8}>
              <Stack gap={4}>
                <Group gap={6}>
                  <Avatar className={classes.Avatar} size={20}>
                    <IconUserCircle color="#B3B3B3" stroke={1} />
                  </Avatar>
                  <Text className={classes.Gray6Regular12} lineClamp={1}>
                    Team Escape
                  </Text>
                </Group>
                <Group gap={6}>
                  <Box className={classes.DiscountBox}>-50%</Box>
                  <Stack align="flex-start" gap={1}>
                    <Text className={classes.Gray6Regular10}>₩ 30,000</Text>
                    <Text className={classes.MainSemiBold14}>₩ 15,000</Text>
                  </Stack>
                </Group>
              </Stack>
              <Button
                className={`${classes.Button} ${true && classes.ActiveButton}`}
                variant="filled"
              >
                {false && (
                  <Image src="/images/game/icon-shopping-bag-white.svg" />
                )}
                {true && (
                  <Image src="/images/game/icon-shopping-bag-filled-white.svg" />
                )}
              </Button>
            </Group>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
}
