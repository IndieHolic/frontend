import { Comment } from "@/components/Commons/Comment/Comment";
import { MyReview } from "@/components/Game/Id/Review/MyReview/MyReview";
import { ReviewSort } from "@/components/Game/Id/Review/ReviewSort/ReviewSort";
import { ShowMoreButton } from "@/components/Game/Id/ShowMoreButton/ShowMoreButton";
import { Divider, Stack } from "@mantine/core";

export default function Home() {
  return (
    <Stack gap={20}>
      <MyReview variant="exist" />
      <Stack align="flex-end" gap={16}>
        <Divider w={"100%"} color="#E6E6E6" />
        <ReviewSort />
        <Comment variant="review-reply" canEdit={false} />
        <Comment variant="review-reply" canEdit={false} />
        <ShowMoreButton />
      </Stack>
    </Stack>
  );
}
