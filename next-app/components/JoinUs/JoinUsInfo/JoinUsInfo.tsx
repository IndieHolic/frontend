import { Text, Box } from "@mantine/core";
import classes from "./JoinUsInfo.module.css";

export function JoinUsInfo() {
  return (
    <Box className={classes.Box}>
      <Text className={classes.BlackExtraLight24}>
        아고라에서는 무엇을 할 수 있나요?
      </Text>
    </Box>
  );
}
