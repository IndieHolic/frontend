"use client";

import classes from "./LogInModal.module.css";
import {
  Text,
  Image,
  Modal,
  UnstyledButton,
  Stack,
  Divider,
  Button,
  Group,
  Checkbox,
  Box,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

export function LogInModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        classNames={{
          content: classes.ModalContent,
          header: classes.ModalHeader,
          body: classes.ModalBody,
        }}
        opened={opened}
        onClose={close}
        centered
      >
        <Stack align="center" gap={"0px"}>
          <Text className={classes.BlackExtraLight32}>로그인</Text>
          <Divider color="#E6E6E6" w={"100%"} mt={"25px"} />
          <TextInput
            classNames={{ input: classes.TextInputInput }}
            data-autofocus
            variant="filled"
            placeholder="아이디"
            mt={"25px"}
          />
          <TextInput
            classNames={{ input: classes.TextInputInput }}
            variant="filled"
            placeholder="비밀번호"
            mt={"16px"}
          />
          <Checkbox
            classNames={{
              root: classes.CheckboxRoot,
              body: classes.CheckboxBody,
              inner: classes.CheckboxInner,
              labelWrapper: classes.CheckboxLabelWrapper,
              label: classes.CheckboxLabel,
            }}
            defaultChecked
            label="로그인 상태 유지"
            color="#138BCF"
            mt={"12px"}
          />

          <Button
            className={classes.Button}
            onClick={close}
            variant="filled"
            mt={"36px"}
          >
            로그인
          </Button>
          <Group gap={"20px"} mt={"52px"}>
            <Link onClick={close} href="/">
              <Text className={classes.LinkText}>아이디 찾기</Text>
            </Link>
            <Divider orientation="vertical" color="#E6E6E6" />
            <Link onClick={close} href="/">
              <Text className={classes.LinkText}>비밀번호 찾기</Text>
            </Link>
            <Divider orientation="vertical" color="#E6E6E6" />
            <Link onClick={close} href="/join-us">
              <Text className={classes.LinkText}>회원가입</Text>
            </Link>
          </Group>
        </Stack>
      </Modal>

      <UnstyledButton className={classes.ImageUser} onClick={open}>
        <Image src="/images/header/icon-user.svg" />
        <Text className={classes.BlackRegular14}>로그인</Text>
      </UnstyledButton>
    </>
  );
}
