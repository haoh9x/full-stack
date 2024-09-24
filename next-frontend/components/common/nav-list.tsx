import { publicRoutes } from "@/routes";
import { NavItem } from "@/components/common/nav-item";

export const NavList = () => {
  return (
    <div className="flex items-center space-x-3">
      {publicRoutes.map((route) => {
        return (
          <NavItem key={route.href} title={route.title} href={route.href} />
        );
      })}
    </div>
  );
};
