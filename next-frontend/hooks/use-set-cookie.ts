"use server";
import { cookies } from "next/headers";

export const useSetCookie = (name: string, value: string) => {
  const cookieStore = cookies();
  cookieStore.set(name, value);
};
