import LeftSidebar from "@/components/shared/navbar/LeftSidebar";
import Navbar from "@/components/shared/navbar/Navbar";
import RightSidebar from "@/components/shared/navbar/RightSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
      {/* toaster */}
    </main>
  );
};

export default layout;
