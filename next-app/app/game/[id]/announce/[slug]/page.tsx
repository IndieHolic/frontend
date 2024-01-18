import { Comment } from "@/components/Commons/Comment/Comment";
import { CommentEditer } from "@/components/Commons/Comment/CommentEditer/CommentEditer";
import { TypoStyle } from "@/components/Commons/TypoStyle/TypoStyle";
import { ReviewSort } from "@/components/Game/Id/Review/ReviewSort/ReviewSort";
import { ShowMoreButton } from "@/components/Game/Id/ShowMoreButton/ShowMoreButton";
import { Divider, Stack, Text } from "@mantine/core";

export default function Home() {
  return (
    <Stack gap={8}>
      <Text fz={24} fw={600}>
        제목
      </Text>
      <Text fz={14} fw={400} c={"#999999"} ta="right">
        GM 래빗 · 2024.01.01
      </Text>
      <TypoStyle>
        <div dangerouslySetInnerHTML={{ __html: "<p>Your html here</p>" }} />
      </TypoStyle>
      <Stack gap={16} mt={74}>
        <Divider w={"100%"} color="#E6E6E6" />
        <CommentEditer />
      </Stack>
      <Stack align="flex-end" mt={8}>
        <Divider w={"100%"} color="#E6E6E6" />
        <ReviewSort />
        <Comment canEdit={false} hasReply={true} />
        <Comment canEdit={false} hasReply={true} />
        <ShowMoreButton />
      </Stack>
    </Stack>
  );
}
