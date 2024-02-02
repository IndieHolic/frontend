import classes from "./MainBanner.module.css";
import { BackgroundImage, Stack, Text } from "@mantine/core";

export function MainBanner() {
  return (
    <BackgroundImage
      w={1200}
      h={700}
      radius={10}
      src={"/images/main-banner.jpg"}
      mt={10}
    >
      <Stack align="center" gap={20} pt={90}>
        <Text className={classes.WhiteExtraBold64}>
          인디게임을 위해 모이는 곳에는
        </Text>
        <Text className={classes.WhiteExtraBold64}>좋은 인디게임이 있다.</Text>
      </Stack>
    </BackgroundImage>
  );
}
