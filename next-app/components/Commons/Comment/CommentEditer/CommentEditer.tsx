"use client";

import classes from "./CommentEditer.module.css";
import { IconAsterisk, IconSend, IconUserCircle } from "@tabler/icons-react";
import {
  Avatar,
  Box,
  Group,
  Text,
  Rating,
  Stack,
  UnstyledButton,
  Button,
} from "@mantine/core";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor } from "@mantine/tiptap";
import Placeholder from "@tiptap/extension-placeholder";
import {
  ShowCompleteNoti,
  ShowDefaultNoti,
} from "../../NotificationSystem/NotificationSystem";

interface CommentEditerProps {
  variant?: "normal" | "normal-edit" | "review" | "review-edit";
  onCancelClick?: () => void;
}
export function CommentEditer({
  variant = "normal",
  onCancelClick = () => {},
}: CommentEditerProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: variant.startsWith("review")
          ? "솔직한 리뷰를 남겨주세요."
          : "댓글을 남겨주세요.",
      }),
    ],
    content: "",
  });

  return (
    <Stack align="flex-start" gap={10}>
      <Group align="flex-start" gap={12} w={"100%"}>
        <Avatar className={classes.Avatar} size={46}>
          <IconUserCircle size={36} color="#B3B3B3" stroke={1} />
        </Avatar>
        {!variant.endsWith("edit") ? (
          <Box className={classes.EditerBox}>
            <RichTextEditor
              classNames={{ root: classes.RichTextEditorRoot }}
              editor={editor}
            >
              <RichTextEditor.Content />
            </RichTextEditor>
            <UnstyledButton
              onClick={() => {
                if (variant === "review")
                  ShowCompleteNoti({
                    title: "리뷰 작성 완료!",
                    message: "리뷰를 작성해 주셔서 감사합니다.",
                  });
                else {
                  ShowDefaultNoti({
                    title: "댓글 작성 완료!",
                    message: "댓글이 정상적으로 남겨졌습니다.",
                  });
                }
              }}
              h={26}
            >
              <IconSend size={26} stroke={1} />
            </UnstyledButton>
          </Box>
        ) : (
          <Stack gap={10} style={{ flexGrow: 1 }}>
            <Box className={classes.EditerBox}>
              <RichTextEditor
                classNames={{ root: classes.RichTextEditorRoot }}
                editor={editor}
              >
                <RichTextEditor.Content />
              </RichTextEditor>
            </Box>
            <Group align="flex-start" justify="space-between">
              {variant === "review-edit" && (
                <Group gap={4}>
                  <IconAsterisk size={8} color="#138BCF" stroke={2.5} />
                  <Text className={classes.MainRegular14}>평점 남기기 ·</Text>
                  <Rating size="sm" defaultValue={3} fractions={2} />
                </Group>
              )}
              <Group justify="flex-end" gap={8}>
                <Button className={classes.EditButton}>수정</Button>
                <Button
                  className={classes.CancelButton}
                  onClick={() => {
                    if (confirm("수정을 취소하시겠습니까?")) onCancelClick();
                  }}
                >
                  취소
                </Button>
              </Group>
            </Group>
          </Stack>
        )}
      </Group>
      {variant === "review" && (
        <Group gap={4} ml={58}>
          <IconAsterisk size={8} color="#138BCF" stroke={2.5} />
          <Text className={classes.MainRegular14}>평점 남기기 ·</Text>
          <Rating size="sm" defaultValue={3} fractions={2} />
        </Group>
      )}
    </Stack>
  );
}
