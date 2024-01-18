import { Box } from "@mantine/core";
import classes from "./TypoStyle.module.css";
import React from "react";

interface TypoStyleProps {
  children: React.ReactNode;
}
export function TypoStyle({ children }: TypoStyleProps) {
  return <Box className={classes.TypoStyle}>{children}</Box>;
}
