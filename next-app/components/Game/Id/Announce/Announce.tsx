import Link from "next/link";
import classes from "./Announce.module.css";
import { Divider, Group, Image, Stack, Text } from "@mantine/core";

export function Announce() {
  return (
    <Stack gap={16}>
      <Link href="/game/1234/announce/1234">
        <Group justify="flex-start" gap={16}>
          <Image className={classes.Image} src="/images/game/banner-icon.png" />
          <Stack align="flex-start" gap={12}>
            <Text className={classes.BlackSemibold20} lineClamp={1}>
              제목
            </Text>
            <Text className={classes.Gray5Regular14}>GM 래빗 · 2024.01.01</Text>
          </Stack>
        </Group>
      </Link>
      <Divider w={"100%"} color="#E6E6E6" />
    </Stack>
  );
}
