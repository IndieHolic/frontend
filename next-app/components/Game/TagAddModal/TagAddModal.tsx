"use client";

import classes from "./TagAddModal.module.css";
import {
  Box,
  Button,
  Divider,
  Group,
  Modal,
  ScrollArea,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronRight, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

interface TagAddModalProps {
  location: string;
}
export function TagAddModal({ location }: TagAddModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const controlList = [
    "초보자 추천",
    "쉬운 난이도",
    "어려운 난이도",
    "마우스만 사용",
    "컨트롤러 지원",
  ];
  const gameDesignList = [
    "2D",
    "3D",
    "싱글 플레이",
    "멀티 플레이",
    "픽셀 그래픽",
    "고퀄리티 그래픽",
    "좋은 BGM",
  ];
  const gameSystemList = [
    "격투",
    "대전",
    "로그라이크",
    "생존",
    "아케이드",
    "전쟁",
    "턴제",
    "힐링",
  ];
  const eventList = ["G-STAR 2023"];

  const controlTags = controlList.map((item) => (
    <Button
      className={`${classes.TagButton} ${
        selectedTags.includes(item) && classes.SelectedTag
      }`}
      onClick={() => {
        if (selectedTags.includes(item)) {
          // 이미 선택된 태그인 경우, 해당 태그를 제거
          setSelectedTags((prev) =>
            prev.filter((prevItem) => prevItem !== item)
          );
        } else {
          // 선택되지 않은 태그인 경우, 해당 태그를 추가
          setSelectedTags((prev) => [...prev, item]);
        }
      }}
    >
      {item}
    </Button>
  ));

  const gameDesignTags = gameDesignList.map((item) => (
    <Button
      className={`${classes.TagButton} ${
        selectedTags.includes(item) && classes.SelectedTag
      }`}
      onClick={() => {
        if (selectedTags.includes(item)) {
          // 이미 선택된 태그인 경우, 해당 태그를 제거
          setSelectedTags((prev) =>
            prev.filter((prevItem) => prevItem !== item)
          );
        } else {
          // 선택되지 않은 태그인 경우, 해당 태그를 추가
          setSelectedTags((prev) => [...prev, item]);
        }
      }}
    >
      {item}
    </Button>
  ));

  const gameSystemTags = gameSystemList.map((item) => (
    <Button
      className={`${classes.TagButton} ${
        selectedTags.includes(item) && classes.SelectedTag
      }`}
      onClick={() => {
        if (selectedTags.includes(item)) {
          // 이미 선택된 태그인 경우, 해당 태그를 제거
          setSelectedTags((prev) =>
            prev.filter((prevItem) => prevItem !== item)
          );
        } else {
          // 선택되지 않은 태그인 경우, 해당 태그를 추가
          setSelectedTags((prev) => [...prev, item]);
        }
      }}
    >
      {item}
    </Button>
  ));

  const eventTags = eventList.map((item) => (
    <Button
      className={`${classes.TagButton} ${
        selectedTags.includes(item) && classes.SelectedTag
      }`}
      onClick={() => {
        if (selectedTags.includes(item)) {
          // 이미 선택된 태그인 경우, 해당 태그를 제거
          setSelectedTags((prev) =>
            prev.filter((prevItem) => prevItem !== item)
          );
        } else {
          // 선택되지 않은 태그인 경우, 해당 태그를 추가
          setSelectedTags((prev) => [...prev, item]);
        }
      }}
    >
      {item}
    </Button>
  ));

  return (
    <>
      <Modal
        classNames={{
          content: classes.ModalContent,
          header: classes.ModalHeader,
          body: classes.ModalBody,
        }}
        opened={opened}
        onClose={() => {
          if (confirm("태그 선택 창에서 나가시겠습니까?")) close();
        }}
        closeOnClickOutside={false}
        centered
      >
        <Stack align="center" gap={0}>
          <Text className={classes.BlackExtraLight32}>태그</Text>
          <Divider color="#E6E6E6" w={"100%"} mt={25} />
          <ScrollArea w={368} h={258} type="always" scrollbarSize={7} my={16}>
            <Stack align="flex-start" justify="flex-start" gap={8} w={355}>
              <Box className={classes.TagFlexBox}>
                <Group gap={0} h={30}>
                  <Text className={classes.BlackExtraLight18}>조작</Text>
                  <IconChevronRight size={18} stroke={1} />
                </Group>
                {controlTags}
              </Box>
              <Box className={classes.TagFlexBox}>
                <Group gap={0} h={30}>
                  <Text className={classes.BlackExtraLight18}>게임 디자인</Text>
                  <IconChevronRight size={18} stroke={1} />
                </Group>
                {gameDesignTags}
              </Box>
              <Box className={classes.TagFlexBox}>
                <Group gap={0} h={30}>
                  <Text className={classes.BlackExtraLight18}>게임 시스템</Text>
                  <IconChevronRight size={18} stroke={1} />
                </Group>
                {gameSystemTags}
              </Box>
              <Box className={classes.TagFlexBox}>
                <Group gap={0} h={30}>
                  <Text className={classes.BlackExtraLight18}>이벤트</Text>
                  <IconChevronRight size={18} stroke={1} />
                </Group>
                {eventTags}
              </Box>
            </Stack>
          </ScrollArea>
        </Stack>
        <Divider color="#E6E6E6" w={"100%"} />
        <Button
          className={classes.Button}
          onClick={() => close}
          variant="filled"
          mt={18}
        >
          태그 선택 완료
        </Button>
      </Modal>

      {location === "all-game" && (
        <UnstyledButton onClick={open}>
          <Group gap={4}>
            <Text className={classes.BlackExtraLight18}>태그</Text>
            <Text className={classes.BlackExtraLight14}>(2개 선택됨)</Text>
            <IconChevronRight size={18} stroke={1} />
          </Group>
        </UnstyledButton>
      )}
      {location === "game-info" && (
        <UnstyledButton className={classes.TagPlus} onClick={open}>
          <IconPlus size={18} color="#808080" stroke={1} />
        </UnstyledButton>
      )}
    </>
  );
}
