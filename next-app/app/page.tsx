import { ContentWrapper } from "@/components/Commons/ContentWrapper/ContentWrapper";
import { MainBanner } from "@/components/Main/MainBanner/MainBanner";
import { MainInfo } from "@/components/Main/MainInfo/MainInfo";
import { Box, Stack } from "@mantine/core";

export default function Home() {
  return (
    <Stack align="center" gap={0}>
      <MainBanner />
      <ContentWrapper>
        <MainInfo />
      </ContentWrapper>
    </Stack>
  );
}
