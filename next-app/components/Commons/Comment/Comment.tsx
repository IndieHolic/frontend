"use client";

import classes from "./Comment.module.css";
import {
  Avatar,
  Button,
  Collapse,
  Divider,
  Group,
  Menu,
  Rating,
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

interface CommentProps {
  variant?: "normal" | "normal-reply" | "review" | "review-reply";
  canEdit: boolean; // 수정이 가능한지 여부
}
/* variant prop 설명
  normal-reply: normal 상태에서 답글이 있는 상태
  review: 게임 리뷰인 상태로, 평점과 플레이 타임이 드러남
  review-reply: review 상태에서 답글이 있는 상태 */

export function Comment({ variant = "normal", canEdit }: CommentProps) {
  const [opened, { toggle }] = useDisclosure(false);

  const [edit, setEdit] = useState<boolean>(false);

  return (
    <Menu classNames={{ item: classes.MenuItem }} position="bottom-end">
      <Stack w={"100%"} gap={16}>
        {!variant.endsWith("reply") && <Divider w={"100%"} color="#E6E6E6" />}
        {edit ? (
          <CommentEditer
            variant="normal-edit"
            onCancelClick={() => setEdit(false)}
          />
        ) : (
          <Group align="flex-start" gap={12}>
            <Avatar className={classes.Avatar} size={46}>
              <IconUserCircle size={36} color="#B3B3B3" stroke={1} />
            </Avatar>
            <Stack
              gap={16}
              mt={variant.startsWith("review") ? 5 : 10}
              style={{ flexGrow: 1 }}
            >
              <Group justify="space-between">
                <Stack justify="flex-start" gap={5}>
                  <Text className={classes.BlackRegular16}>유저입니당...</Text>
                  {variant.startsWith("review") && (
                    <Group gap={4}>
                      <Text className={classes.MainRegular14}>
                        14시간 플레이
                      </Text>
                      {variant.endsWith("reply") && (
                        <>
                          <Text className={classes.Gray5Regular14}>·</Text>
                          <Rating
                            size="xs"
                            value={3.5}
                            fractions={2}
                            readOnly
                          />
                        </>
                      )}
                    </Group>
                  )}
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
              <Group
                justify={
                  variant.endsWith("reply") ? "space-between" : "flex-end"
                }
              >
                {variant.endsWith("reply") && (
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
              {variant.endsWith("reply") && (
                <Collapse in={opened}>
                  <Stack gap={16}>
                    <Divider w={"100%"} color="#E6E6E6" />
                    <CommentEditer />
                    <Comment
                      variant={variant === "review-reply" ? "review" : "normal"}
                      canEdit={true}
                    />
                  </Stack>
                </Collapse>
              )}
            </Stack>
          </Group>
        )}
        {variant.endsWith("reply") && <Divider w={"100%"} color="#E6E6E6" />}
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
