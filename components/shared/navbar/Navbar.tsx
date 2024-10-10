import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNavbar from "./MobileNavbar";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 shadow-light-100 fixed z-10 max-h-[70px] w-full gap-5 p-6 sm:px-12 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/icons/logo.webp"
          alt="logo"
          width={60}
          height={60}
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          {" "}
          Out<span className="text-primary-500">Doors</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#004176",
              },
            }}
          />
        </SignedIn>
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
