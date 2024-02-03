import classes from "./DeliberationGrade.module.css";
import { Box, Image, Stack, Text } from "@mantine/core";

export function DeliberationGrade() {
  return (
    <Box className={classes.Container}>
      <Stack gap={24}>
        <Text className={classes.BlackExtraLight20}>심의 등급</Text>
        <Box className={classes.FlexBox}>
          <Image w={72} src={`/images/game/grade/${12}.svg`} />
          {/* {true && <Image w={72} src="/images/game/grade/sensationality.svg" />}
          {true && <Image w={72} src="/images/game/grade/violence.svg" />}
          {true && <Image w={72} src="/images/game/grade/horror.svg" />}
          {true && <Image w={72} src="/images/game/grade/language.svg" />}
          {true && <Image w={72} src="/images/game/grade/drug.svg" />}
          {true && <Image w={72} src="/images/game/grade/crime.svg" />}
          {true && <Image w={72} src="/images/game/grade/gambling.svg" />} */}
        </Box>
      </Stack>
    </Box>
  );
}
