import { Banner } from "@/components/Game/Banner/Banner";
import { Box, Stack } from "@mantine/core";

export default function Home() {
  return (
    <Stack gap={"0px"}>
      <Banner />
      <Box h={"700px"}></Box>
    </Stack>
  );
}
