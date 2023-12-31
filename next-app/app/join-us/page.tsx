import { ContentWrapper } from "@/components/Commons/ContentWrapper/ContentWrapper";
import { JoinUsInfo } from "@/components/JoinUs/JoinUsInfo/JoinUsInfo";
import { JoinUsInput } from "@/components/JoinUs/JoinUsInput/JoinUsInput";
import { Divider, Group, Stack, Text } from "@mantine/core";

export default function Home() {
  return (
    <ContentWrapper>
      <Stack gap={"24px"} mt={"35px"} mb={"40px"}>
        <Text c={"black"} fw={200} fz={"32px"}>
          회원가입
        </Text>
        <Group align="flex-start" justify="space-between" gap={"16px"}>
          <JoinUsInput />
          <Divider orientation="vertical" color="#E6E6E6" />
          <JoinUsInfo />
        </Group>
      </Stack>
    </ContentWrapper>
  );
}
