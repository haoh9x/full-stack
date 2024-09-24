import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { updateAuth, logout } from "../features/authSlice";
import { Mutex } from "async-mutex";

import { RootState } from "@/redux/store";
import { useAppSelector } from "../hooks";

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_HOST}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.access;

    if (token) {
      headers.set("Cookie", `access=${token}`);
    }

    return headers;
  },
});
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      const token = useAppSelector((state) => state.auth.access);
      try {
        const refreshResult = await baseQuery(
          {
            url: "/auth/jwt/refresh/",
            method: "POST",
            body: { token: token },
          },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          api.dispatch(updateAuth(refreshResult.data));

          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
