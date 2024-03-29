"use client";

import { useRouter } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function ContentWithNav({
  children,
  title,
  hasSidebar,
  hasArrow,
}: {
  children: React.ReactNode;
  title: string | React.ReactNode;
  hasSidebar?: boolean;
  hasArrow?: boolean;
}) {
  const router = useRouter();

  return (
    <>
      {/* Navbar */}
      <div className="w-full fixed left-0 top-0 navbar bg-background border-b border-b-foreground/10 h-12 z-20">
        {hasSidebar && (
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost absolute left-4 text-3xl btn-sm"
            >
              <IoIosMenu />
            </label>
          </div>
        )}
        {hasArrow && (
          <div className="flex-none lg:hidden" onClick={() => router.back()}>
            <label
              aria-label="back to previous page"
              className="btn btn-square btn-ghost absolute left-4 text-3xl btn-sm"
            >
              <IoIosArrowRoundBack />
            </label>
          </div>
        )}
        <header className="font-bold text-xl flex-1 flex justify-center items-center">
          {title}
        </header>
      </div>
      <div className="px-4 sm:px-10 md:px-20 lg:px-24 w-full flex flex-1 mt-24">
        {/* Page content here */}
        {children}
      </div>
    </>
  );
}
