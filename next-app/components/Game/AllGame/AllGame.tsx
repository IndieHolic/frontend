import classes from "./AllGame.module.css";
import { Box, Stack, Text } from "@mantine/core";
import { GameFlexContainer } from "./GameFlexContainer/GameFlexContainer";
import { GameFilter } from "./GameFilter/GameFilter";
import { GameSort } from "./GameSort/GameSort";

export function AllGame() {
  return (
    <Box className={classes.Group} mt={"16px"}>
      <Stack align="flex-start" justify="flex-start" gap={"38px"} mt={"20px"}>
        <Text className={classes.BlackExtraLight32}>전체 게임</Text>
        <Stack align="flex-end" justify="flex-start" gap={"10px"}>
          <GameSort />
          <GameFlexContainer />
        </Stack>
      </Stack>
      <GameFilter />
    </Box>
  );
}
