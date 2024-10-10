"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut, SignedIn, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeProvider";

const NavContent = () => {
  const pathName = usePathname();
  const { mode, setMode } = useTheme();
  return (
    <section className="flex flex-col gap-4 scroll-auto pt-6">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathName.includes(item.route) && item.route.length > 1) ||
          pathName === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${isActive ? "primary-gradient text-light-900 rounded-lg" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className={`${isActive ? "invert" : mode === "dark" ? "invert" : ""}`}
              />
              <p className={`${isActive ? "base-bold" : ""}`}>{item.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNavbar = () => {
  const { signOut } = useAuth();
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/assets/icons/hamburger.svg"
          width={26}
          height={26}
          alt="menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 scrollable-sidebar max-w-[350px]  border-none"
      >
        {" "}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.webp"
            alt="logo"
            width={45}
            height={45}
          />
          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            {" "}
            Out<span className="text-primary-500">Doors</span>
          </p>
        </Link>
        <SheetClose asChild>
          <NavContent />
        </SheetClose>
        <SignedIn>
          <div className="mt-5 flex flex-col gap-3">
            <SheetClose asChild>
              <Button
                className="small-medium text-dark400_light900 btn-primary min-h-[41px] w-full rounded-lg p-4 shadow-none"
                onClick={() => signOut()}
              >
                <span className="dark:text-primary-100 text-white ">
                  Log out
                </span>
              </Button>
            </SheetClose>
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href="/sign-in" className="mt-3">
                <Button className="small-medium text-dark400_light900 btn-secondary min-h-[41px] w-full rounded-lg p-4 shadow-none">
                  <span className="primary-text-gradient">Log in</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href="/sign-up" className="mt-3">
                <Button className="small-medium text-dark400_light900 btn-primary min-h-[41px] w-full rounded-lg p-4 shadow-none">
                  <span className="primary-text-gradient ">Sign up</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
