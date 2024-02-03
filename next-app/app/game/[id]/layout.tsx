import { ContentWrapper } from "@/components/Commons/ContentWrapper/ContentWrapper";
import { Collection } from "@/components/Game/Collection/Collection";
import { DLCContainer } from "@/components/Game/Id/DLCContainer/DLCContainer";
import { DeliberationGrade } from "@/components/Game/Id/DeliberationGrade/DeliberationGrade";
import { GameInfo } from "@/components/Game/Id/GameInfo/GameInfo";
import { GamePreview } from "@/components/Game/Id/GamePreview/GamePreview";
import { SNSShortCut } from "@/components/Game/Id/SNSShortCut/SNSShortCut";
import { Specification } from "@/components/Game/Id/Specification/Specification";
import { Tab } from "@/components/Game/Id/Tab/Tab";
import { Box, Group, Image, Stack, Text } from "@mantine/core";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ContentWrapper>
      <Stack gap={0}>
        {/* 상단 */}
        <Group align="flex-start" gap={18} mt={20}>
          <Stack gap={13}>
            <Group gap={14}>
              <Image w={60} h={60} radius={8} src="/images/game/icon.webp" />
              <Text fw={200} fz={32}>
                Hexsile
              </Text>
            </Group>
            <GamePreview />
          </Stack>
          <Stack gap={20}>
            <GameInfo />
            <Group gap={15}></Group>
          </Stack>
        </Group>
        {/* 메인 파트 */}
        <Group align="flex-start" gap={18} mt={60}>
          <Stack gap={20}>
            <Tab />
            <Box w={800}>{children}</Box>
          </Stack>
          <Stack gap={20} mt={38}>
            <DLCContainer />
            <DeliberationGrade />
            <Specification />
            <SNSShortCut />
          </Stack>
        </Group>
        {/* 하단 */}
        <Stack gap={20} mt={80}>
          <Text fw={200} fz={24}>
            이 게임의 유저들이 플레이한 다른 게임
          </Text>
          <Box mb={45}>
            <Collection />
          </Box>
        </Stack>
      </Stack>
    </ContentWrapper>
  );
}
