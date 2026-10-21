"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./Toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/certification", label: "Certification" },
  { href: "/history", label: "History" },
  { href: "/skills", label: "Skills" },
];

function Header() {
  return (
    <nav className="flex justify-center items-center">
      <NavigationMenu>
        <NavigationMenuList>
          {links.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={href}>{label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </nav>
  );
}

export default Header;