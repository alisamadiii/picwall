"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import Links from "./links";
import Content from "../ui/content";
import Logo from "../logo";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const hideNavbar =
    pathname === "/sign-in" ||
    pathname === "/sign-up" ||
    pathname === "/message/account" ||
    pathname === "/testimonial" ||
    pathname === "/admin/dashboard";

  return hideNavbar ? null : (
    <nav className="bg-light fixed top-0 right-0 left-0 z-50 shadow-xs backdrop-blur-xl dark:border-b">
      <Content>
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Logo size="sm" />
          </Link>

          <Drawer noBodyStyles direction="right">
            <DrawerTrigger className="md:hidden">
              <Menu size={24} />
            </DrawerTrigger>
            <DrawerContent className="h-full rounded-t-none p-8 pt-4">
              <Links isClose />
            </DrawerContent>
          </Drawer>

          <div className="hidden items-center gap-2 md:flex">
            <Links />
          </div>
        </div>
      </Content>
    </nav>
  );
}
