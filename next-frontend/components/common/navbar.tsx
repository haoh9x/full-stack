import { Logo } from "@/components/common/logo";
import { ModeToggle } from "./mode-toggle";
import { NavList } from "./nav-list";
import { UserButton } from "../auth/user-button";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-8xl container mx-auto flex items-center px-4 md:px-8 h-14">
        <div className="flex items-center">
          <Logo />
          <nav className="ml-10">
            <NavList />
          </nav>
        </div>

        <div className="ml-auto flex items-center space-x-3">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
};
