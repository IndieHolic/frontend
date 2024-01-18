"use client";

import classes from "./Comment.module.css";
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Divider,
  Group,
  Menu,
  Stack,
  Text,
  TypographyStylesProvider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconDotsVertical,
  IconMessage,
  IconThumbDown,
  IconThumbUp,
  IconUserCircle,
} from "@tabler/icons-react";
import { CommentEditer } from "./CommentEditer/CommentEditer";
import { useState } from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { RichTextEditor } from "@mantine/tiptap";

interface CommentProps {
  canEdit: boolean; // 수정이 가능한지 여부
  hasReply: boolean; // 답글이 존재하는 컴포넌트인지 여부
}

export function Comment({ canEdit, hasReply }: CommentProps) {
  const [opened, { toggle }] = useDisclosure(false);

  const [edit, setEdit] = useState<boolean>(false);
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
    <Menu classNames={{ item: classes.MenuItem }} position="bottom-end">
      <Stack w={"100%"} gap={16}>
        {!hasReply && <Divider w={"100%"} color="#E6E6E6" />}
        <Group align="flex-start" gap={12}>
          <Avatar className={classes.Avatar} size={46}>
            <IconUserCircle size={36} color="#B3B3B3" stroke={1} />
          </Avatar>
          {edit ? (
            <Stack gap={10} style={{ flexGrow: 1 }}>
              <Box className={classes.EditerBox}>
                <RichTextEditor
                  classNames={{ root: classes.RichTextEditorRoot }}
                  editor={editor}
                >
                  <RichTextEditor.Content />
                </RichTextEditor>
              </Box>
              <Group justify="flex-end" gap={8}>
                <Button className={classes.EditButton}>수정</Button>
                <Button
                  className={classes.CancelButton}
                  onClick={() => {
                    if (confirm("수정을 취소하시겠습니까?")) setEdit(false);
                  }}
                >
                  취소
                </Button>
              </Group>
            </Stack>
          ) : (
            <Stack gap={16} mt={5} style={{ flexGrow: 1 }}>
              <Group justify="space-between">
                <Stack justify="flex-start" gap={5}>
                  <Text className={classes.BlackRegular16}>유저입니당...</Text>
                  <Text className={classes.MainRegular14}>14시간 플레이</Text>
                </Stack>
                <Text className={classes.Gray5Regular14}>14시간 전</Text>
              </Group>
              <TypographyStylesProvider className={classes.Typography}>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      "<p>Your html here</p><p>Your html here</p><p>Your html here</p><p>Your html here</p>",
                  }}
                />
              </TypographyStylesProvider>
              {/* 하단 버튼 삼총사 */}
              <Group justify={hasReply ? "space-between" : "flex-end"}>
                {hasReply && (
                  <Button className={classes.Button} onClick={toggle}>
                    <Group gap={8}>
                      <IconMessage size={20} color="#000" stroke={1} />
                      <Text className={classes.BlackRegular14}>댓글</Text>
                    </Group>
                  </Button>
                )}
                <Group gap={8}>
                  <Button className={classes.Button}>
                    <Group gap={8}>
                      <IconThumbUp size={20} color="#000" stroke={1} />
                      <Text className={classes.BlackRegular14}>0</Text>
                    </Group>
                  </Button>
                  <Button className={classes.Button}>
                    <Group gap={8}>
                      <IconThumbDown size={20} color="#000" stroke={1} />
                      <Text className={classes.BlackRegular14}>0</Text>
                    </Group>
                  </Button>
                  <Menu.Target>
                    <Button className={classes.Button} px={0}>
                      <IconDotsVertical size={16} color="#000" stroke={1.2} />
                    </Button>
                  </Menu.Target>
                </Group>
              </Group>
              {hasReply && (
                <Collapse in={opened}>
                  <Stack gap={16}>
                    <Divider w={"100%"} color="#E6E6E6" />
                    <CommentEditer />
                    <Comment canEdit={true} hasReply={false} />
                  </Stack>
                </Collapse>
              )}
            </Stack>
          )}
        </Group>
        {hasReply && <Divider w={"100%"} color="#E6E6E6" />}
      </Stack>

      <Menu.Dropdown className={classes.MenuDropdown}>
        {canEdit ? (
          <>
            <Menu.Item onClick={() => setEdit(true)}>수정하기</Menu.Item>
            <Menu.Item
              onClick={() => {
                confirm("정말로 삭제하시겠습니까?");
              }}
            >
              삭제하기
            </Menu.Item>
          </>
        ) : (
          <Menu.Item>신고하기</Menu.Item>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}
