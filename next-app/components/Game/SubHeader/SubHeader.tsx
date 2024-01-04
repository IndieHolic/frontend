import classes from "./SubHeader.module.css";
import { Box, Group, Text } from "@mantine/core";
import { IconCategory, IconTicket } from "@tabler/icons-react";
import Link from "next/link";

interface SubHeaderProps {
  children: React.ReactNode;
}
export function SubHeader({ children }: SubHeaderProps) {
  return (
    <section className={classes.SubHeader}>
      <Box className={classes.Container}>
        <Box className={classes.Wrapper}>
          <IconCategory size={"28px"} color="white" stroke={1.5} />
          <Text className={classes.WhiteExtraLight18}>·</Text>
          <Link href="/">
            <Text className={classes.WhiteExtraLight18}>크리스마스 특집</Text>
          </Link>
          <Text className={classes.WhiteExtraLight18}>·</Text>
          <Link href="/">
            <Group gap={"5px"}>
              <IconTicket size={"28px"} color="white" stroke={1} />
              <Text className={classes.WhiteExtraLight18}>아고라 패스</Text>
            </Group>
          </Link>
        </Box>
      </Box>
      {children}
    </section>
  );
}
