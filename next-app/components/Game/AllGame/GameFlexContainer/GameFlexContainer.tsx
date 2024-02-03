import { game_display_data } from "@/constants/game-display";
import { GameDisplay } from "../../GameDisplay/GameDisplay";
import classes from "./GameFlexContainer.module.css";
import { Box } from "@mantine/core";

export function GameFlexContainer() {
  const gamelist = game_display_data.map((item) => <GameDisplay data={item} />);

  return <Box className={classes.FlexContainer}>{gamelist}</Box>;
}
