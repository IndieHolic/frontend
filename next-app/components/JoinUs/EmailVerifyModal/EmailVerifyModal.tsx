"use client";

import classes from "./EmailVerifyModal.module.css";
import { Text, Modal, Stack, Divider, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function EmailVerifyModal() {
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
          <Text className={classes.BlackExtraLight32}>이메일 인증</Text>
          <Divider color="#E6E6E6" w={"100%"} mt={"25px"} />
          <Stack align="center" gap={"8px"} mt={"16px"}>
            <Text className={classes.BlackRegular18}>
              <Text className={classes.MainMedium18} component="span">
                skku@g.skku.edu
              </Text>
              로
            </Text>
            <Text className={classes.BlackRegular16}>
              인증 메일이 발송되었습니다.
            </Text>
          </Stack>
          <Stack align="center" gap={"8px"} mt={"20px"}>
            <Text className={classes.BlackRegular16}>
              발송된 메일에 포함된 인증 버튼을 누른 뒤에
            </Text>
            <Text className={classes.BlackRegular16}>
              아래의 이메일 인증 완료 버튼을 눌러주시면
            </Text>
            <Text className={classes.BlackRegular16}>
              이메일 인증이 완료됩니다.
            </Text>
          </Stack>
          <Button
            className={classes.Button}
            onClick={close}
            variant="filled"
            mt={"36px"}
          >
            이메일 인증 완료
          </Button>
        </Stack>
      </Modal>

      <Button className={classes.VerifyButton} onClick={open}>
        이메일 인증
      </Button>
    </>
  );
}
