import { Box, Button, Divider, Group, Stack, Text, Image } from "@mantine/core";
import classes from "./DLCContainer.module.css";
import Link from "next/link";

export function DLCContainer() {
  return (
    <Box className={classes.Container}>
      <Stack gap={24}>
        <Text className={classes.BlackExtraLight20}>이 게임의 DLC</Text>
        <Stack gap={16}>
          <EachDLC isFirst={true} />
          <EachDLC />
        </Stack>
      </Stack>
    </Box>
  );
}

interface EachDLCProps {
  isFirst?: boolean;
}
export function EachDLC({ isFirst = false }: EachDLCProps) {
  const isDiscount = false;

  return (
    <Stack gap={16}>
      {!isFirst && <Divider w={"100%"} color="#E6E6E6" />}
      <Link href="/">
        <Group justify="space-between" gap={12} w={318}>
          <Stack align="flex-start" justify="space-between" gap={0} h={48}>
            <Text className={classes.BlackRegular16} lineClamp={1}>
              사운드 트랙
            </Text>
            {isDiscount ? (
              <Group justify="flex-start" gap={4}>
                <Box className={classes.Discount}>-50%</Box>
                <Text className={classes.Gray5Regular14} td="line-through">
                  ₩ 30,000
                </Text>
                <Text className={classes.MainSemiBold18}>₩ 15,000</Text>
              </Group>
            ) : (
              <Text className={classes.MainSemiBold18} mb={2}>
                ₩ 15,000
              </Text>
            )}
          </Stack>
          <Button
            className={`${classes.Button} ${false && classes.FilledIconHover}`}
            variant="filled"
          >
            {true ? (
              <Image src="/images/game/icon-shopping-bag-white.svg" />
            ) : (
              <Image src="/images/game/icon-shopping-bag-filled-white.svg" />
            )}
          </Button>
        </Group>
      </Link>
    </Stack>
  );
}
