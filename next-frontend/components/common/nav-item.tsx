"use client";

import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  href: string;
  title: string;
}

export const NavItem = ({ href, title }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname === "/dashboard" && href === "/dashboard") || pathname === href;

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "text-base font-normal transition-all px-2 py-1 rounded-sm duration-300 hover:bg-gray-50 dark:hover:bg-gray-900",
        isActive && "bg-gray-50 dark:bg-gray-900"
      )}
    >
      {title}
    </button>
  );
};
