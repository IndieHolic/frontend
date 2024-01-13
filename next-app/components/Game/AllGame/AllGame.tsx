"use client";

import classes from "./AllGame.module.css";
import { Box, Stack, Text } from "@mantine/core";
import { GameFlexContainer } from "./GameFlexContainer/GameFlexContainer";
import { GameFilter } from "./GameFilter/GameFilter";
import { GameSort } from "./GameSort/GameSort";
import { useSearchParams } from "next/navigation";

export function AllGame() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const hasSearch = searchParams.has("search");

  return (
    <Box className={classes.Group} mt={16}>
      <Stack align="flex-start" justify="flex-start" gap={38} mt={20}>
        {hasSearch ? (
          <Text className={classes.BlackExtraLight32} lineClamp={1}>
            '{search}'으로 검색된 결과
          </Text>
        ) : (
          <Text className={classes.BlackExtraLight32}>전체 게임</Text>
        )}

        <Stack align="flex-end" justify="flex-start" gap={10}>
          <GameSort />
          <GameFlexContainer />
        </Stack>
      </Stack>
      <GameFilter />
    </Box>
  );
}
