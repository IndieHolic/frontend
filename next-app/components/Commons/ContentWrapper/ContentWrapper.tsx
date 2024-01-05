import { Box } from "@mantine/core";
import classes from "./ContentWrapper.module.css";

interface ContentWrapperProps {
  children: React.ReactNode;
}
export function ContentWrapper({ children }: ContentWrapperProps) {
  return <Box className={classes.Wrapper}>{children}</Box>;
}
