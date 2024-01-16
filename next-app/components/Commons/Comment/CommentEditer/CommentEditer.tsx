"use client";

import classes from "./CommentEditer.module.css";
import { IconSend, IconUserCircle } from "@tabler/icons-react";
import { Avatar, Box, Group, UnstyledButton } from "@mantine/core";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor } from "@mantine/tiptap";
import Placeholder from "@tiptap/extension-placeholder";

export function CommentEditer() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "솔직한 리뷰를 남겨주세요.",
      }),
    ],
    content: "",
  });

  return (
    <Group align="flex-start" gap={12}>
      <Avatar className={classes.Avatar} size={46}>
        <IconUserCircle size={36} color="#B3B3B3" stroke={1} />
      </Avatar>
      <Box className={classes.EditerBox}>
        <RichTextEditor
          classNames={{ root: classes.RichTextEditorRoot }}
          editor={editor}
        >
          <RichTextEditor.Content />
        </RichTextEditor>
        <UnstyledButton h={26}>
          <IconSend size={26} stroke={1} />
        </UnstyledButton>
      </Box>
    </Group>
  );
}
