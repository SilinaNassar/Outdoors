"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeProvider";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useAuth, SignedIn, SignedOut } from "@clerk/nextjs";

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
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
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

const LeftSidebar = () => {
  const pathname = usePathname();
  const { mode, setMode } = useTheme();
  const { signOut } = useAuth();
  return (
    <>
      <aside className="background-light900_dark200 light-border custom-scrollbar no-scrollbar sticky left-0 top-0 hidden  h-screen  flex-col items-center justify-center overflow-y-auto border-r p-6 pt-20 shadow-light-300 dark:shadow-none md:flex">
        <div className="flex flex-1 flex-col gap-1">
          {sidebarLinks.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;

            return (
              <div className="group relative" key={item.route}>
                <Link
                  href={item.route}
                  className={`${
                    isActive
                      ? "primary-gradient rounded-lg"
                      : "text-dark300_light900"
                  } flex items-center justify-start gap-4 bg-transparent p-4`}
                >
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={25}
                    height={25}
                    className={`${isActive ? "invert" : mode === "dark" ? "invert" : ""}`}
                  />
                  <span className="absolute left-1/2 z-50 mt-5 -translate-x-1/2 -translate-y-8 rounded-lg bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.label}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        <SignedOut>
          <div className="flex flex-col gap-3">
            <Link href="/sign-in">
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                  src="/assets/icons/account.svg"
                  alt="log in"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
                {/* <span className="primary-text-gradient max-lg:hidden">
                  Log In
                </span> */}
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                  src="/assets/icons/sign-up.svg"
                  alt="sign up"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
                {/* <span className="hidden max-lg:hidden">Sign Up</span> */}
              </Button>
            </Link>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="flex flex-col gap-3">
            <Button
              className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
              onClick={() => signOut()}
            >
              <Image
                src="/assets/icons/account.svg"
                alt="log in"
                width={20}
                height={20}
                className="invert-colors"
              />
              {/* <span className="primary-text-gradient hidden max-lg:hidden">
                Log Out
              </span> */}
            </Button>
          </div>
        </SignedIn>
      </aside>
      <Sheet>
        <SheetTrigger className=" fixed top-[350px] z-50 ml-2 flex flex-col items-start justify-center rounded border border-none shadow-light-100 max-sm:hidden md:hidden">
          <Image
            src="/assets/icons/rightArrow.png"
            width={26}
            height={26}
            alt="menu"
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
                  <span className="text-white dark:text-primary-100 ">
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
    </>
  );
};

export default LeftSidebar;
