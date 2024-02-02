"use client";

import { CommentEditer } from "@/components/Commons/Comment/CommentEditer/CommentEditer";
import classes from "./MyReview.module.css";
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Divider,
  Group,
  Menu,
  Rating,
  Stack,
  Text,
  TypographyStylesProvider,
  UnstyledButton,
} from "@mantine/core";
import {
  IconDotsVertical,
  IconMessage,
  IconThumbDown,
  IconThumbUp,
  IconUserCircle,
} from "@tabler/icons-react";
import { useContext, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Comment } from "@/components/Commons/Comment/Comment";
import { AuthContext } from "@/components/Commons/AuthProvider/AuthProvider";

interface MyReviewProps {
  variant: "login" | "non-play" | "empty" | "exist";
}
export function MyReview({ variant }: MyReviewProps) {
  const { openLogInModal } = useContext(AuthContext);
  const [opened, { toggle }] = useDisclosure(false);

  const [edit, setEdit] = useState<boolean>(false);

  return (
    <>
      {variant === "login" && (
        <Box className={classes.AnnounceBox}>
          <Group gap={3}>
            <Text className={classes.BlackRegular14}>리뷰를 작성하시려면</Text>
            <UnstyledButton
              className={classes.LogInText}
              onClick={openLogInModal}
            >
              로그인
            </UnstyledButton>
            <Text className={classes.BlackRegular14}>해주세요.</Text>
          </Group>
        </Box>
      )}
      {variant === "non-play" && (
        <Group gap={12}>
          <Avatar className={classes.Avatar} size={46}>
            <IconUserCircle size={36} color="#B3B3B3" stroke={1} />
          </Avatar>
          <Box className={classes.AnnounceBox} w={742}>
            플레이 시간이 15분 이상이어야 리뷰를 작성하실 수 있습니다.
          </Box>
        </Group>
      )}
      {variant === "empty" && <CommentEditer variant="review" />}
      {variant === "exist" && (
        <Menu classNames={{ item: classes.MenuItem }} position="bottom-end">
          {edit ? (
            <CommentEditer
              variant="review-edit"
              onCancelClick={() => setEdit(false)}
            />
          ) : (
            <Group align="flex-start" gap={12}>
              <Avatar className={classes.Avatar} size={46}>
                <IconUserCircle size={36} color="#B3B3B3" stroke={1} />
              </Avatar>
              <Stack gap={16} mt={5} style={{ flexGrow: 1 }}>
                <Group justify="space-between">
                  <Stack justify="flex-start" gap={5}>
                    <Text className={classes.MainSemiBold16}>나의 리뷰</Text>
                    <Group gap={4}>
                      <Text className={classes.Gray5Regular14}>
                        14시간 플레이
                      </Text>
                      <Text className={classes.Gray5Regular14}>·</Text>
                      <Rating size="xs" value={3.5} fractions={2} readOnly />
                    </Group>
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
                <Group justify="space-between">
                  <Button className={classes.Button} onClick={toggle}>
                    <Group gap={8}>
                      <IconMessage size={20} color="#000" stroke={1} />
                      <Text className={classes.BlackRegular14}>댓글</Text>
                    </Group>
                  </Button>

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
                <Collapse in={opened}>
                  <Stack gap={16}>
                    <Divider w={"100%"} color="#E6E6E6" />
                    <CommentEditer />
                    <Comment variant="review" canEdit={true} />
                  </Stack>
                </Collapse>
              </Stack>
            </Group>
          )}

          <Menu.Dropdown className={classes.MenuDropdown}>
            <Menu.Item onClick={() => setEdit(true)}>수정하기</Menu.Item>
            <Menu.Item
              onClick={() => {
                confirm("정말로 삭제하시겠습니까?");
              }}
            >
              삭제하기
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      )}
    </>
  );
}
