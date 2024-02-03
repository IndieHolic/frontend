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
import { game_display_data_type } from "@/constants/game-display";

interface GameDisplayProps {
  data: game_display_data_type;
}
export function GameDisplay({ data }: GameDisplayProps) {
  return (
    <Link href="/game/1234" target="_blank">
      <Box className={classes.Container}>
        <Stack gap={0}>
          <Box className={classes.Relative}>
            <Image className={classes.Image} src={data.thumbnail} />
            <Overlay
              className={classes.Overlay}
              color="#000"
              backgroundOpacity={0.35}
              blur={10}
            >
              <Text className={classes.WhiteRegular14} lineClamp={4}>
                {data.description}
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
                {data.genre.join(", ")}
              </Text>
              <Text className={classes.BlackBold16} lineClamp={2}>
                {data.title}
              </Text>
            </Stack>
            <Group w={"100%"} align="flex-end" justify="space-between" gap={8}>
              <Stack gap={4}>
                <Group gap={6}>
                  <Avatar className={classes.Avatar} size={20}>
                    <IconUserCircle color="#B3B3B3" stroke={1} />
                  </Avatar>
                  <Text className={classes.Gray6Regular12} lineClamp={1}>
                    {data.developer}
                  </Text>
                </Group>
                <Group gap={6}>
                  <Box className={classes.DiscountBox}>-50%</Box>
                  <Stack align="flex-start" gap={1}>
                    <Text className={classes.Gray6Regular10} h={10}>
                      ₩ 5,000
                    </Text>
                    <Text className={classes.MainSemiBold14}>₩ 2,500</Text>
                  </Stack>
                </Group>
              </Stack>
              <Button
                className={`${classes.Button} ${
                  false && classes.FilledIconHover
                }`}
                variant="filled"
              >
                {true ? (
                  <Image src="/images/game/icon-shopping-bag-white.svg" />
                ) : (
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
