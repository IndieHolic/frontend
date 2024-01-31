"use client";

import classes from "./EmailVerifyModal.module.css";
import { Text, Modal, Stack, Divider, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { checkVerify, sendVerifyEmail } from "@/utils/api/auth";
import { Dispatch, SetStateAction, useState } from "react";
import {
  ShowDefaultNoti,
  ShowErrorNoti,
} from "@/components/Commons/NotificationSystem/NotificationSystem";

interface EmailVerifyModalProps {
  email: string;
  onClick: () => boolean;
  setLastVerifiedEmail: Dispatch<SetStateAction<string | null>>;
  setLastVerifiedId: Dispatch<SetStateAction<number | null>>;
  verifyButtonDisabled: boolean;
}

export function EmailVerifyModal({
  email,
  onClick,
  setLastVerifiedEmail,
  setLastVerifiedId,
  verifyButtonDisabled,
}: EmailVerifyModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [openButtonDisabled, setOpenButtonDisabled] = useState(false);
  const [verifyId, setVerifyId] = useState<number | null>(null);

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
        closeOnEscape={false}
        closeOnClickOutside={false}
        withCloseButton={false}
      >
        <Stack align="center" gap={0}>
          <Text className={classes.BlackExtraLight32}>이메일 인증</Text>
          <Divider color="#E6E6E6" w={"100%"} mt={25} />
          <Stack align="center" gap={"8px"} mt={16}>
            <Text className={classes.BlackRegular18}>
              <Text className={classes.MainMedium18} component="span">
                {email}
              </Text>
              로
            </Text>
            <Text className={classes.BlackRegular16}>
              인증 메일이 발송되었습니다.
            </Text>
          </Stack>
          <Stack align="center" gap={8} mt={20}>
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
            onClick={async () => {
              const res = await checkVerify(verifyId!);
              if (res.isVerified) {
                ShowDefaultNoti({
                  title: "성공!",
                  message: "이메일 인증이 완료되었습니다.",
                });
                setLastVerifiedEmail(email);
                setLastVerifiedId(verifyId!);
                close();
              } else {
                ShowErrorNoti({
                  title: "오류",
                  message: "이메일 인증이 완료되지 않았습니다.",
                });
              }
            }}
            variant="filled"
            mt={36}
          >
            이메일 인증 완료
          </Button>
          <Button
            className={`${classes.Button} ${classes.CancelButton}`}
            onClick={close}
            variant="outline"
            mt={16}
          >
            취소 / 이메일 변경
          </Button>
        </Stack>
      </Modal>

      <Button
        className={`${classes.VerifyButton} ${
          (openButtonDisabled || verifyButtonDisabled) && classes.Disabled
        }`}
        onClick={async () => {
          setOpenButtonDisabled(true);
          if (!onClick()) {
            setOpenButtonDisabled(false);
            return;
          }
          try {
            const res = await sendVerifyEmail(email);
            const verifyId = res.verifyId;
            setVerifyId(verifyId);
            open();
          } catch (error) {
          } finally {
            setOpenButtonDisabled(false);
          }
        }}
        disabled={openButtonDisabled || verifyButtonDisabled}
      >
        이메일 인증
      </Button>
    </>
  );
}
