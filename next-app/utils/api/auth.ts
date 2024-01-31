import { ClientAxios } from "@/utils/api/ClientAxios";

export interface SendVerifyEmailRes {
  verifyId: number;
}

export async function sendVerifyEmail(email: string) {
  const res = await ClientAxios.post<SendVerifyEmailRes>(
    "/auth/send-verify",
    undefined,
    {
      params: { email },
    }
  );

  return res.data;
}

export interface RegisterArgs {
  name: string;
  email: string;
  userId: string;
  password: string;
  verifyId: number;
  agreeMarketing: boolean;
}

export async function register(registerArgs: RegisterArgs) {
  await ClientAxios.post("/auth/register", registerArgs);
}

export interface CheckVerifyRes {
  isVerified: boolean;
}

export async function checkVerify(verifyId: number) {
  const res = await ClientAxios.get<CheckVerifyRes>("/auth/check-verify", {
    params: { verifyId },
  });

  return res.data;
}

export interface CheckIdDuplicateRes {
  isExist: boolean;
}

export async function checkIdDuplicate(id: string) {
  const res = await ClientAxios.get<CheckIdDuplicateRes>("/auth/check-id", {
    params: { userId: id },
  });

  return res.data;
}
