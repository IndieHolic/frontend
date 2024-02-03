import classes from "./Specification.module.css";
import { Box, Group, Stack, Text } from "@mantine/core";

export function Specification() {
  return (
    <Box className={classes.Container}>
      <Stack gap={24}>
        <Text className={classes.BlackExtraLight20}>최소 사양</Text>
        <Group justify="flex-start" gap={24}>
          <Stack gap={12}>
            <Text className={classes.Gray6Regular14}>운영체제</Text>
            <Text className={classes.Gray6Regular14}>프로세서</Text>
            <Text className={classes.Gray6Regular14}>메모리</Text>
            <Text className={classes.Gray6Regular14}>그래픽</Text>
            <Text className={classes.Gray6Regular14}>저장 공간</Text>
          </Stack>
          <Stack gap={12}>
            <Text className={classes.BlackRegular14}>Windows 7</Text>
            <Text className={classes.BlackRegular14}>Intel Core i3</Text>
            <Text className={classes.BlackRegular14}>4GB</Text>
            <Text className={classes.BlackRegular14}>
              Intel HD Graphics 4000
            </Text>
            <Text className={classes.BlackRegular14}>20MB</Text>
          </Stack>
        </Group>
      </Stack>
    </Box>
  );
}
