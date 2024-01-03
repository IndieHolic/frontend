import Link from "next/link";
import classes from "./JoinUs.module.css";
import {
  Text,
  Stack,
  Box,
  Group,
  Divider,
  Checkbox,
  Button,
  TextInput,
} from "@mantine/core";

export function JoinUs() {
  return (
    <Box className={classes.Wrapper}>
      <Text className={classes.BlackExtraLight32}>회원가입</Text>
      <Group align="flex-start" justify="space-between" gap={"0px"}>
        {/* 좌측 상자 */}
        <Box className={classes.Box}>
          {/* 입력 오총사 */}
          <Stack gap={"20px"}>
            <TextInputBox
              title="아이디"
              placeholder="아이디를 입력해 주세요."
              isCheckButton={true}
              isCheck={false}
              isError={false}
              checkMessage="* 사용 가능한 아이디입니다."
              errorMessage="* 이미 사용된 아이디이거나 형식이 올바르지 않습니다."
              message="(영문소문자/숫자, 4~16글자)"
            />
            <TextInputBox
              title="이메일"
              placeholder="이메일을 입력해 주세요."
              isCheck={false}
              isError={false}
              checkMessage="* 사용 가능한 이메일입니다."
              errorMessage="* 이미 사용된 이메일이거나 형식이 올바르지 않습니다."
            />
            <TextInputBox
              title="비밀번호"
              placeholder="비밀번호를 입력해 주세요."
              isError={false}
              errorMessage="* 비밀번호 형식이 올바르지 않습니다."
              message="(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16글자)"
            />
            <TextInputBox
              title="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해 주세요."
              isError={false}
              errorMessage="* 비밀번호가 일치하지 않습니다."
            />
            <TextInputBox
              title="닉네임"
              placeholder="닉네임을 입력해 주세요."
              isCheckButton={true}
              isCheck={false}
              isError={false}
              checkMessage="* 사용 가능한 닉네임입니다."
              errorMessage="* 이미 사용된 닉네임이거나 형식이 올바르지 않습니다."
              message="(2~16글자)"
            />
          </Stack>
          {/* 동의 삼총사 */}
          <Agreement />
          <Button
            className={`${classes.Button} ${false && classes.ButtonActive}`}
            variant="filled"
            mt={"30px"}
          >
            회원 가입
          </Button>
        </Box>
        <Divider orientation="vertical" color="#E6E6E6" />
        {/* 우측 상자 */}
        <Box className={classes.Box}>
          <Text className={classes.BlackExtraLight24}>
            아고라에서는 무엇을 할 수 있나요?
          </Text>
        </Box>
      </Group>
    </Box>
  );
}

interface TextInputBoxProps {
  title: string;
  placeholder: string;
  isCheckButton?: boolean;
  isCheck?: boolean;
  isError?: boolean;
  checkMessage?: string;
  errorMessage?: string;
  message?: string;
}
export function TextInputBox({
  title,
  placeholder,
  isCheckButton = false,
  isCheck = false,
  isError = false,
  checkMessage = "",
  errorMessage = "",
  message = "",
}: TextInputBoxProps) {
  return (
    <Box className={classes.TextInputRoot}>
      <Group gap={"12px"}>
        <Box
          className={`${classes.TextInputBox} ${
            isError && classes.TextInputBoxError
          }`}
        >
          <Text className={classes.MainSemiBold12}>{title}</Text>
          <TextInput
            classNames={{ input: classes.TextInputInput }}
            variant="unstyled"
            size="xs"
            placeholder={placeholder}
          />
        </Box>
        {isCheckButton && (
          <Button className={classes.RepetButton}>중복 확인</Button>
        )}
      </Group>
      {/* 안내 메세지 */}
      <Group gap={"2px"} pl={"9px"}>
        {isCheck && (
          <Text className={classes.MainRegular12}>{checkMessage}</Text>
        )}
        {isError && (
          <Text className={classes.HighlightRegular12}>{errorMessage}</Text>
        )}
        <Text className={classes.Gray5Regular12}>{message}</Text>
      </Group>
    </Box>
  );
}

export function Agreement() {
  return (
    <Stack gap={"8px"} mt={"25px"}>
      <Group gap={"10px"}>
        <Checkbox
          classNames={{ inner: classes.CheckboxInner }}
          color="#138BCF"
        />
        <Text className={classes.BlackRegular14}>
          [필수]{" "}
          <Link className={classes.LinkText} href="/">
            이용약관
          </Link>
          에 동의합니다.
        </Text>
      </Group>
      <Group gap={"10px"}>
        <Checkbox
          classNames={{ inner: classes.CheckboxInner }}
          color="#138BCF"
        />
        <Text className={classes.BlackRegular14}>
          [필수]{" "}
          <Link className={classes.LinkText} href="/">
            개인정보 처리방침
          </Link>
          에 동의합니다.
        </Text>
      </Group>
      <Group gap={"10px"}>
        <Checkbox
          classNames={{ inner: classes.CheckboxInner }}
          color="#138BCF"
        />
        <Text className={classes.BlackRegular14}>
          [선택] 마케팅 정보 및 각종 소식을 이메일로 받겠습니다.
        </Text>
      </Group>
    </Stack>
  );
}
