import {
  RegisterForm,
  RegisterFormValidation,
} from "@/components/JoinUs/JoinUsInput/JoinUsInput";
import { Dispatch, SetStateAction } from "react";

export function formValidationFunctions(
  setFormValidation: Dispatch<SetStateAction<RegisterFormValidation>>
) {
  return {
    userId: (value: string) => {
      if (!value) {
        setFormValidation((prev) => ({
          ...prev,
          userId: "아이디를 입력해주세요.",
        }));
        return false;
      }
      if (!/^[a-z0-9]{4,16}$/.test(value)) {
        setFormValidation((prev) => ({
          ...prev,
          userId: "아이디 형식이 올바르지 않습니다.",
        }));
        return false;
      }
      return null;
    },
    email: (value: string) => {
      if (!value) {
        setFormValidation((prev) => ({
          ...prev,
          email: "이메일을 입력해주세요.",
        }));
        return false;
      }
      if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
        setFormValidation((prev) => ({
          ...prev,
          email: "이메일 형식이 올바르지 않습니다.",
        }));
        return false;
      }
      return null;
    },
    password: (value: string) => {
      if (!value) {
        setFormValidation((prev) => ({
          ...prev,
          password: "비밀번호를 입력해주세요.",
        }));
        return false;
      }

      if (value.length < 8 || value.length > 16) {
        setFormValidation((prev) => ({
          ...prev,
          password: "비밀번호 형식이 올바르지 않습니다.",
        }));
        return false;
      }

      const english = /[a-zA-Z]/;
      const numbers = /[0-9]/;
      const specialChars = /[^A-Za-z0-9]/;

      let count = 0;
      if (english.test(value)) count++;
      if (numbers.test(value)) count++;
      if (specialChars.test(value)) count++;

      if (count < 2) {
        setFormValidation((prev) => ({
          ...prev,
          password: "비밀번호 형식이 올바르지 않습니다.",
        }));
        return false;
      }
    },
    passwordConfirm: (value: string, values: RegisterForm) => {
      if (value !== values.password) {
        setFormValidation((prev) => ({
          ...prev,
          passwordConfirm: "비밀번호가 일치하지 않습니다.",
        }));
        return false;
      }
      return null;
    },
    name: (value: string) => {
      if (!value) {
        setFormValidation((prev) => ({
          ...prev,
          name: "닉네임을 입력해주세요.",
        }));
        return false;
      }
      if (!/^.{2,16}$/.test(value)) {
        setFormValidation((prev) => ({
          ...prev,
          name: "닉네임 형식이 올바르지 않습니다.",
        }));
        return false;
      }
      return null;
    },
    agreeTerms: (value: boolean) => {
      if (!value) {
        setFormValidation((prev) => ({
          ...prev,
          agreeTerms: "이용약관에 동의해주세요.",
        }));
        return false;
      }
      return null;
    },
    agreePrivacy: (value: boolean) => {
      if (!value) {
        setFormValidation((prev) => ({
          ...prev,
          agreePrivacy: "개인정보 처리방침에 동의해주세요.",
        }));
        return false;
      }
      return null;
    },
  };
}
