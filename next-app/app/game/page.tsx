import { ContentWrapper } from "@/components/Commons/ContentWrapper/ContentWrapper";
import { Banner } from "@/components/Game/Banner/Banner";
import { Box, Stack } from "@mantine/core";

export default function Home() {
  return (
    <ContentWrapper>
      <Stack gap={0}>
        <Banner />
        <Box h={"700px"}></Box>
      </Stack>
    </ContentWrapper>
  );
}
