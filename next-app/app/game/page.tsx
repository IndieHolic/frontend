import { ContentWrapper } from "@/components/Commons/ContentWrapper/ContentWrapper";
import { Banner } from "@/components/Game/Banner/Banner";
import { Collection } from "@/components/Game/Collection/Collection";
import { Stack } from "@mantine/core";

export default function Home() {
  return (
    <ContentWrapper>
      <Stack gap={"50px"} mt={"10px"} mb={"70px"}>
        <Banner />
        <Collection />
        <Collection />
      </Stack>
    </ContentWrapper>
  );
}
