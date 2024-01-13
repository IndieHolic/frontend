"use client";

import { IconChevronDown, IconReload } from "@tabler/icons-react";
import classes from "./GameFilter.module.css";
import {
  Box,
  Checkbox,
  Collapse,
  Divider,
  Group,
  ScrollArea,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { TagAddModal } from "../../TagAddModal/TagAddModal";

export function GameFilter() {
  const genreOptions = [
    "RPG",
    "공포",
    "디펜스",
    "레이싱",
    "리듬",
    "비주얼 노벨",
    "슈팅",
    "스포츠",
    "시뮬레이션",
    "액션",
    "어드벤처",
    "전략",
    "캐주얼",
    "퍼즐",
    "플랫포머",
    "기타",
  ];
  const priceOptions = [
    "무료",
    "할인 판매 중",
    "₩ 5,000 미만",
    "₩ 15,000 미만",
  ];
  const limitOptions = [
    "전체 이용가",
    "12세 이용가",
    "15세 이용가",
    "청소년 이용 불가",
  ];

  return (
    <Box className={classes.Wrapper}>
      <ScrollArea
        className={classes.ScrollArea}
        classNames={{ scrollbar: classes.ScrollAreaScrollbar }}
        scrollbarSize={7}
      >
        <Stack align="flex-start" justify="flex-start" gap={12}>
          {/* 필터 초기화 버튼 */}
          <UnstyledButton style={{ alignSelf: "flex-end" }}>
            <Group gap={6}>
              <IconReload size={14} color="#808080" stroke={1.5} />
              <Text className={classes.Gray6Regular14}>필터 초기화</Text>
            </Group>
          </UnstyledButton>
          <CheckboxCollapse title="장르" option={genreOptions} />
          <Divider w={"100%"} color="#E6E6E6" />
          <CheckboxCollapse title="가격" option={priceOptions} />
          <Divider w={"100%"} color="#E6E6E6" />
          <TagAddModal location="all-game" />
          <Divider w={"100%"} color="#E6E6E6" />
          <CheckboxCollapse title="이용 등급" option={limitOptions} />
        </Stack>
      </ScrollArea>
    </Box>
  );
}

interface CheckboxCollapseProps {
  title: string;
  option: string[];
}
export function CheckboxCollapse({ title, option }: CheckboxCollapseProps) {
  const [opened, { toggle }] = useDisclosure(true);

  const checkboxOptions = option.map((item) => {
    return (
      <Group gap={"10px"}>
        <Checkbox
          classNames={{ inner: classes.CheckboxInner }}
          color="#138BCF"
        />
        <Text className={classes.BlackRegular14}>{item}</Text>
      </Group>
    );
  });

  return (
    <Stack w={"100%"} align="flex-start" justify="flex-start" gap={"12px"}>
      <UnstyledButton onClick={toggle} w={"100%"}>
        <Group justify="space-between">
          <Text className={classes.BlackExtraLight18}>{title}</Text>
          <IconChevronDown size={18} stroke={1} />
        </Group>
      </UnstyledButton>
      <Collapse in={opened}>
        <Stack align="flex-start" justify="flex-start" gap={"8px"}>
          {checkboxOptions}
        </Stack>
      </Collapse>
    </Stack>
  );
}
