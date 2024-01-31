"use client";

import Link from "next/link";
import classes from "./JoinUsInput.module.css";
import {
  Text,
  Stack,
  Box,
  Group,
  Checkbox,
  Button,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import { EmailVerifyModal } from "../EmailVerifyModal/EmailVerifyModal";
import { UseFormReturnType, useForm } from "@mantine/form";
import { formValidationFunctions } from "@/components/JoinUs/JoinUsInput/JoinUsInput.util";
import { useEffect, useState } from "react";
import { checkIdDuplicate, register } from "@/utils/api/auth";
import { useRouter } from "next/navigation";
import { showNotification } from "@mantine/notifications";

export interface RegisterForm {
  userId: string;
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  agreeTerms: boolean;
  agreePrivacy: boolean;
  agreeMarketing: boolean;
}

export type RegisterFormValidation = Record<
  keyof RegisterForm,
  string | undefined
>;

export function JoinUsInput() {
  const [formValidation, setFormValidation] = useState<RegisterFormValidation>(
    {} as RegisterFormValidation
  );

  const form = useForm<RegisterForm>({
    initialValues: {
      userId: "",
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      agreeTerms: false,
      agreePrivacy: false,
      agreeMarketing: false,
    },
    validate: formValidationFunctions(setFormValidation),
  });
  const { getInputProps, onSubmit } = form;
  const [lastAvailableId, setLastAvailableId] = useState<string | null>(null);
  const idAvailable = lastAvailableId === form.values.userId;
  const [lastVerifiedEmail, setLastVerifiedEmail] = useState<string | null>(
    null
  );
  const [lastVerifiedId, setLastVerifiedId] = useState<number | null>(null);
  const emailVerified =
    lastVerifiedEmail === form.values.email && !!lastVerifiedId;
  const router = useRouter();

  useEffect(() => {
    for (const key in formValidation) {
      const key_ = key as keyof RegisterForm;
      if (form.isDirty(key_) && formValidation[key_]) {
        setFormValidation((prev) => ({
          ...prev,
          [key_]: undefined,
        }));
        form.resetDirty();
      }
    }
  }, [form, formValidation]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!idAvailable) {
      setFormValidation({
        ...formValidation,
        userId: "아이디 중복 확인을 해주세요.",
      });
      form.resetDirty();
      return;
    }
    if (!emailVerified) {
      setFormValidation({
        ...formValidation,
        email: "이메일 인증을 해주세요.",
      });
      form.resetDirty();
      return;
    }
    onSubmit(async (values) => {
      console.log(values);
      await register({
        email: values.email,
        name: values.name,
        password: values.password,
        userId: values.userId,
        verifyId: lastVerifiedId!,
        agreeMarketing: values.agreeMarketing,
      });
      showNotification({
        title: "회원 가입이 완료되었습니다!",
        message: "로그인 후 이용해주세요.",
      });
      router.push("/");
    })();
  };

  return (
    <Box className={classes.Box}>
      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      >
        {/* 입력 오총사 */}
        <Stack gap={20}>
          {/* 아이디 입력 박스 */}
          <Box className={classes.TextInputRoot}>
            <Group gap={12}>
              <Box
                className={`${classes.TextInputBox} ${
                  false && classes.TextInputBoxError
                }`}
              >
                <Text className={classes.MainSemiBold12}>아이디</Text>
                <TextInput
                  classNames={{ input: classes.TextInputInput }}
                  variant="unstyled"
                  size="xs"
                  placeholder="아이디를 입력하세요."
                  {...getInputProps("userId")}
                />
              </Box>
              <Button
                className={`${classes.RepetButton} ${
                  idAvailable && classes.Disabled
                }`}
                disabled={idAvailable}
                onClick={async () => {
                  if (
                    formValidationFunctions(setFormValidation).userId(
                      form.values.userId
                    ) === false
                  ) {
                    form.resetDirty();
                    return;
                  }
                  if ((await checkIdDuplicate(form.values.userId)).isExist) {
                    setFormValidation({
                      ...formValidation,
                      userId: "이미 존재하는 아이디입니다.",
                    });
                    form.resetDirty();
                  } else {
                    setFormValidation({
                      ...formValidation,
                      userId: "사용 가능한 아이디입니다.",
                    });
                    form.resetDirty();
                    setLastAvailableId(form.values.userId);
                  }
                }}
              >
                중복 확인
              </Button>
            </Group>
            {/* 안내 메세지 */}
            <Group gap={2} pl={9}>
              {formValidation && (
                <Text
                  className={
                    idAvailable
                      ? classes.MainRegular12
                      : classes.HighlightRegular12
                  }
                >
                  {formValidation.userId}
                </Text>
              )}
              <Text className={classes.Gray5Regular12}>
                (영문소문자/숫자, 4~16글자)
              </Text>
            </Group>
          </Box>
          {/* 이메일 입력 박스 */}
          <Box className={classes.TextInputRoot}>
            <Group gap={12}>
              <Box
                className={`${classes.TextInputBox} ${
                  false && classes.TextInputBoxError
                }`}
              >
                <Text className={classes.MainSemiBold12}>이메일</Text>
                <TextInput
                  classNames={{ input: classes.TextInputInput }}
                  variant="unstyled"
                  size="xs"
                  placeholder="이메일을 입력하세요."
                  {...getInputProps("email")}
                />
              </Box>
              {/* 이메일 인증 버튼 */}
              <EmailVerifyModal
                email={form.values.email}
                onClick={() => {
                  if (
                    formValidationFunctions(setFormValidation).email(
                      form.values.email
                    ) === false
                  ) {
                    form.resetDirty();
                    return false;
                  }
                  return true;
                }}
                setLastVerifiedEmail={setLastVerifiedEmail}
                setLastVerifiedId={setLastVerifiedId}
                verifyButtonDisabled={emailVerified}
              />
            </Group>
            {/* 안내 메세지 */}
            <Group gap={2} pl={9}>
              {formValidation.email && (
                <Text className={classes.HighlightRegular12}>
                  {formValidation.email}
                </Text>
              )}
            </Group>
          </Box>
          {/* 비밀번호 입력 박스 */}
          <Box className={classes.TextInputRoot}>
            <Box
              className={`${classes.TextInputBox} ${
                false && classes.TextInputBoxError
              }`}
            >
              <Text className={classes.MainSemiBold12}>비밀번호</Text>
              <PasswordInput
                classNames={{ input: classes.TextInputInput }}
                variant="unstyled"
                size="xs"
                placeholder="비밀번호를 입력하세요."
                {...getInputProps("password")}
              />
            </Box>
            {/* 안내 메세지 */}
            <Group gap={2} pl={9}>
              {formValidation.password && (
                <Text className={classes.HighlightRegular12}>
                  {formValidation.password}
                </Text>
              )}
              <Text className={classes.Gray5Regular12}>
                (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16글자)
              </Text>
            </Group>
          </Box>
          {/* 비밀번호 확인 입력 박스 */}
          <Box className={classes.TextInputRoot}>
            <Group gap={12}>
              <Box
                className={`${classes.TextInputBox} ${
                  false && classes.TextInputBoxError
                }`}
              >
                <Text className={classes.MainSemiBold12}>비밀번호 확인</Text>
                <PasswordInput
                  classNames={{ input: classes.TextInputInput }}
                  variant="unstyled"
                  size="xs"
                  placeholder="비밀번호를 다시 입력하세요."
                  {...getInputProps("passwordConfirm")}
                />
              </Box>
            </Group>
            {/* 안내 메세지 */}
            <Group gap={2} pl={9}>
              {formValidation.passwordConfirm && (
                <Text className={classes.HighlightRegular12}>
                  {formValidation.passwordConfirm}
                </Text>
              )}
            </Group>
          </Box>
          {/* 닉네임 입력 박스 */}
          <Box className={classes.TextInputRoot}>
            <Group gap={12}>
              <Box
                className={`${classes.TextInputBox} ${
                  false && classes.TextInputBoxError
                }`}
              >
                <Text className={classes.MainSemiBold12}>닉네임</Text>
                <TextInput
                  classNames={{ input: classes.TextInputInput }}
                  variant="unstyled"
                  size="xs"
                  placeholder="닉네임을 입력하세요."
                  {...getInputProps("name")}
                />
              </Box>
            </Group>
            {/* 안내 메세지 */}
            <Group gap={2} pl={9}>
              {false && (
                <Text className={classes.MainRegular12}>
                  * 사용 가능한 닉네임입니다.
                </Text>
              )}
              {formValidation.name && (
                <Text className={classes.HighlightRegular12}>
                  {formValidation.name}
                </Text>
              )}
              <Text className={classes.Gray5Regular12}>(2~16글자)</Text>
            </Group>
          </Box>
        </Stack>
        {/* 동의 삼총사 */}
        <Agreement form={form} formValidation={formValidation} />
        <Button
          className={`${classes.Button} ${false && classes.ButtonActive}`}
          variant="filled"
          mt={30}
          type="submit"
        >
          회원 가입
        </Button>
      </form>
    </Box>
  );
}

export function Agreement({
  form,
  formValidation,
}: {
  form: UseFormReturnType<RegisterForm, (values: RegisterForm) => RegisterForm>;
  formValidation: RegisterFormValidation;
}) {
  return (
    <Stack gap={8} mt={25}>
      <Group gap={10}>
        <Checkbox
          classNames={{ inner: classes.CheckboxInner }}
          color="#138BCF"
          {...form.getInputProps("agreeTerms")}
        />
        <Text className={classes.BlackRegular14}>
          [필수]{" "}
          <Link className={classes.LinkText} href="/">
            이용약관
          </Link>
          에 동의합니다.
        </Text>
      </Group>
      {formValidation.agreeTerms && (
        <Group gap={2} pl={9}>
          <Text className={classes.HighlightRegular12}>
            {formValidation.agreeTerms}
          </Text>
        </Group>
      )}
      <Group gap={10}>
        <Checkbox
          classNames={{ inner: classes.CheckboxInner }}
          color="#138BCF"
          {...form.getInputProps("agreePrivacy")}
        />
        <Text className={classes.BlackRegular14}>
          [필수]{" "}
          <Link className={classes.LinkText} href="/">
            개인정보 처리방침
          </Link>
          에 동의합니다.
        </Text>
      </Group>
      {formValidation.agreePrivacy && (
        <Group gap={2} pl={9}>
          <Text className={classes.HighlightRegular12}>
            {formValidation.agreePrivacy}
          </Text>
        </Group>
      )}
      <Group gap={10}>
        <Checkbox
          classNames={{ inner: classes.CheckboxInner }}
          color="#138BCF"
          {...form.getInputProps("agreeMarketing")}
        />
        <Text className={classes.BlackRegular14}>
          [선택] 마케팅 정보 및 각종 소식을 이메일로 받겠습니다.
        </Text>
      </Group>
    </Stack>
  );
}
