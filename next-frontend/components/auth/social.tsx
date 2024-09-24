"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export const Social = () => {
  const onClick = (provider: "github" | "google") => {
    console.log(provider);
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        onClick={() => onClick("google")}
        size="lg"
        className="w-full"
        variant="outline"
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        onClick={() => onClick("github")}
        type="submit"
        size="lg"
        className="w-full"
        variant="outline"
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
