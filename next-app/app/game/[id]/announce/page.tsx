import { Announce } from "@/components/Game/Id/Announce/Announce";
import { ShowMoreButton } from "@/components/Game/Id/ShowMoreButton/ShowMoreButton";
import { Stack } from "@mantine/core";

export default function Home() {
  return (
    <Stack gap={16}>
      <Announce />
      <Announce />
      <Announce />
      <Announce />
      <Announce />
      <ShowMoreButton />
    </Stack>
  );
}
