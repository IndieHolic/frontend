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
} from "@mantine/core";
import { EmailVerifyModal } from "../EmailVerifyModal/EmailVerifyModal";

export function JoinUsInput() {
  return (
    <Box className={classes.Box}>
      {/* 입력 오총사 */}
      <Stack gap={"20px"}>
        {/* 아이디 입력 박스 */}
        <Box className={classes.TextInputRoot}>
          <Group gap={"12px"}>
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
              />
            </Box>
            <Button className={classes.RepetButton}>중복 확인</Button>
          </Group>
          {/* 안내 메세지 */}
          <Group gap={"2px"} pl={"9px"}>
            {false && (
              <Text className={classes.MainRegular12}>
                * 사용 가능한 아이디입니다.
              </Text>
            )}
            {false && (
              <Text className={classes.HighlightRegular12}>
                * 이미 사용된 아이디이거나 형식이 올바르지 않습니다.
              </Text>
            )}
            <Text className={classes.Gray5Regular12}>
              (영문소문자/숫자, 4~16글자)
            </Text>
          </Group>
        </Box>
        {/* 이메일 입력 박스 */}
        <Box className={classes.TextInputRoot}>
          <Group gap={"12px"}>
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
              />
            </Box>
            {/* 이메일 인증 버튼 */}
            <EmailVerifyModal />
          </Group>
          {/* 안내 메세지 */}
          <Group gap={"2px"} pl={"9px"}>
            {false && (
              <Text className={classes.HighlightRegular12}>
                * 이메일 인증을 해 주세요.
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
            <TextInput
              classNames={{ input: classes.TextInputInput }}
              variant="unstyled"
              size="xs"
              placeholder="비밀번호를 입력하세요."
            />
          </Box>
          {/* 안내 메세지 */}
          <Group gap={"2px"} pl={"9px"}>
            {false && (
              <Text className={classes.HighlightRegular12}>
                * 비밀번호 형식이 올바르지 않습니다.
              </Text>
            )}
            <Text className={classes.Gray5Regular12}>
              (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16글자)
            </Text>
          </Group>
        </Box>
        {/* 비밀번호 확인 입력 박스 */}
        <Box className={classes.TextInputRoot}>
          <Group gap={"12px"}>
            <Box
              className={`${classes.TextInputBox} ${
                false && classes.TextInputBoxError
              }`}
            >
              <Text className={classes.MainSemiBold12}>비밀번호 확인</Text>
              <TextInput
                classNames={{ input: classes.TextInputInput }}
                variant="unstyled"
                size="xs"
                placeholder="비밀번호를 다시 입력하세요."
              />
            </Box>
          </Group>
          {/* 안내 메세지 */}
          <Group gap={"2px"} pl={"9px"}>
            {false && (
              <Text className={classes.HighlightRegular12}>
                * 비밀번호가 일치하지 않습니다.
              </Text>
            )}
          </Group>
        </Box>
        {/* 닉네임 입력 박스 */}
        <Box className={classes.TextInputRoot}>
          <Group gap={"12px"}>
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
              />
            </Box>
            <Button className={classes.RepetButton}>중복 확인</Button>
          </Group>
          {/* 안내 메세지 */}
          <Group gap={"2px"} pl={"9px"}>
            {false && (
              <Text className={classes.MainRegular12}>
                * 사용 가능한 닉네임입니다.
              </Text>
            )}
            {false && (
              <Text className={classes.HighlightRegular12}>
                * 이미 사용된 닉네임이거나 형식이 올바르지 않습니다.
              </Text>
            )}
            <Text className={classes.Gray5Regular12}>(2~16글자)</Text>
          </Group>
        </Box>
      </Stack>
      {/* 동의 삼총사 */}
      <Agreement />
      <Button
        className={`${classes.Button} ${false && classes.ButtonActive}`}
        variant="filled"
        mt={"30px"}
        disabled
      >
        회원 가입
      </Button>
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
