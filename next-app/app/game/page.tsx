import { ContentWrapper } from "@/components/Commons/ContentWrapper/ContentWrapper";
import { Banner } from "@/components/Game/Banner/Banner";
import {
  Collection,
  CollectionTitle,
} from "@/components/Game/Collection/Collection";
import { Stack } from "@mantine/core";

export default function Home() {
  return (
    <ContentWrapper>
      <Stack gap={50} mt={10} mb={70}>
        <Banner />
        <Stack gap={17}>
          <CollectionTitle />
          <Collection />
        </Stack>
        <Stack gap={17}>
          <CollectionTitle />
          <Collection />
        </Stack>
      </Stack>
    </ContentWrapper>
  );
}
