"use client";

import classes from "./LogInModal.module.css";
import {
  Text,
  Modal,
  Stack,
  Divider,
  Button,
  Group,
  Checkbox,
  TextInput,
} from "@mantine/core";
import Link from "next/link";

interface LogInModalProps {
  opened: boolean;
  close: () => void;
}
export function LogInModal({ opened, close }: LogInModalProps) {
  return (
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
      <Stack align="center" gap={0}>
        <Text className={classes.BlackExtraLight32}>로그인</Text>
        <Divider color="#E6E6E6" w={"100%"} mt={25} />
        <TextInput
          classNames={{ input: classes.TextInputInput }}
          data-autofocus
          variant="filled"
          placeholder="아이디"
          mt={25}
        />
        <TextInput
          classNames={{ input: classes.TextInputInput }}
          variant="filled"
          placeholder="비밀번호"
          mt={16}
        />
        <Group gap={10} mt={12} style={{ alignSelf: "flex-start" }}>
          <Checkbox
            classNames={{ inner: classes.CheckboxInner }}
            defaultChecked
            color="#138BCF"
          />
          <Text className={classes.Gray4Regular14}>로그인 상태 유지</Text>
        </Group>
        <Button
          className={classes.Button}
          onClick={close}
          variant="filled"
          mt={36}
        >
          로그인
        </Button>
        <Group gap={20} mt={52}>
          <Link onClick={close} target="_blank" href="/">
            <Text className={classes.LinkText}>아이디 찾기</Text>
          </Link>
          <Divider orientation="vertical" color="#E6E6E6" />
          <Link onClick={close} target="_blank" href="/">
            <Text className={classes.LinkText}>비밀번호 찾기</Text>
          </Link>
          <Divider orientation="vertical" color="#E6E6E6" />
          <Link onClick={close} target="_blank" href="/join-us">
            <Text className={classes.LinkText}>회원가입</Text>
          </Link>
        </Group>
      </Stack>
    </Modal>
  );
}
