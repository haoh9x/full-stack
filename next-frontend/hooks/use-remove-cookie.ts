"use server";
import { cookies } from "next/headers";

export const useRemoveCookie = (name: string) => {
  const cookieStore = cookies();
  cookieStore.delete(name);
};
