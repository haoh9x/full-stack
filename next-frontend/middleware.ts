import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { DEFAULT_LOGIN_REDIRECT, authRoutes, publicRoutes } from "@/routes";
import { useAppSelector } from "@/redux/hooks";
import { store } from "@/redux/store";
import { useStore } from "./hooks/use-store";
import authSlice from "./redux/features/authSlice";

export async function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
