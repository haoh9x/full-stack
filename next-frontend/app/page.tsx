"use client";
import { LoginForm } from "@/components/auth/login-form";
import {
  useListUserQuery,
  useRetrieveUserQuery,
} from "@/redux/features/authApiSlice";

export default function Home() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  const { data } = useListUserQuery();
  return (
    <>
      Home Page
      <div>
        {user?.email} - {user?.first_name} {user?.last_name} - {user?.username}
      </div>
    </>
  );
}
