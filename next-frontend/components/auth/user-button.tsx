"use client";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";
import { Button } from "@/components/ui/button";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useRemoveCookie } from "@/hooks/use-remove-cookie";

export const UserButton = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();

  const onClick = () => {
    dispatch(logout());
    useRemoveCookie("access");
    useRemoveCookie("refresh");
  };
  return (
    <>
      {isAuthenticated ? (
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{user?.email}</DropdownMenuItem>
              <DropdownMenuItem>
                {user?.first_name + " " + user?.last_name}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onClick()}
                className="cursor-pointer"
              >
                Đăng xuất
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <Button asChild variant={"outline"}>
            <Link href="/auth/login">Đăng nhập</Link>
          </Button>
          <Button asChild variant={"default"}>
            <Link href="/auth/login">Đăng ký</Link>
          </Button>
        </div>
      )}
    </>
  );
};
