import { z } from "zod";

import { useLoginMutation } from "@/redux/features/authApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth } from "@/redux/features/authSlice";
import { LoginFormSchema } from "@/schemas";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSetCookie } from "./use-set-cookie";

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = (values: z.infer<typeof LoginFormSchema>) => {
    login(values)
      .unwrap()
      .then((res) => {
        dispatch(setAuth(res));
        useSetCookie("access", res.access);
        toast.success("Đăng nhập thành công!");
        router.push(DEFAULT_LOGIN_REDIRECT);
      })
      .catch(() => {
        toast.error("Đăng nhập thất bại");
      });
  };

  return {
    isLoading,
    handleSubmit,
  };
};
