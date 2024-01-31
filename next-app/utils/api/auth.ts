import { ClientAxios } from "@/utils/api/ClientAxios";

export interface sendVerifyEmailRes {
  verifyId: number;
}

export async function sendVerifyEmail(email: string) {
  const res = await ClientAxios.post<sendVerifyEmailRes>(
    "/auth/send-verify",
    undefined,
    {
      params: { email },
    }
  );

  return res.data;
}

export interface registerArgs {
  name: string;
  email: string;
  userId: string;
  password: string;
  verifyId: number;
  agreeMarketing: boolean;
}

export async function register(registerArgs: registerArgs) {
  await ClientAxios.post("/auth/register", registerArgs);
}

export interface checkVerifyRes {
  isVerified: boolean;
}

export async function checkVerify(verifyId: number) {
  const res = await ClientAxios.get<checkVerifyRes>("/auth/check-verify", {
    params: { verifyId },
  });

  return res.data;
}

export interface checkIdDuplicateRes {
  isExist: boolean;
}

export async function checkIdDuplicate(id: string) {
  const res = await ClientAxios.get<checkIdDuplicateRes>("/auth/check-id", {
    params: { userId: id },
  });

  return res.data;
}
