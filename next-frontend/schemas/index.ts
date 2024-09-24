import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email().min(1, {
    message: "Email không được để trống",
  }),
  password: z.string().min(8, {
    message: "Mật khẩu tối thiểu 8 ký tự",
  }),
});

export const RegisterFormSchema = z.object({
  first_name: z.string().min(1, {
    message: "Không được để trống",
  }),
  last_name: z.string().min(1, {
    message: "Không được để trống",
  }),
  email: z.string().email().min(1, {
    message: "Email không được để trống",
  }),
  password: z.string().min(8, {
    message: "Mật khẩu tối thiểu 8 ký tự",
  }),
});
