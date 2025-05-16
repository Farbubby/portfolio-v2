"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export default function MobileMenu() {
  const active = usePathname().split("/")[1];
  const [activeItem, setActiveItem] = useState(
    active ? capitalizeFirstLetter(active) : "Home"
  );

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <svg
            className="w-8 h-8 fill-gray-400 hover:fill-white transition-colors cursor-pointer"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
              fillRule="nonzero"
            />
          </svg>
        </SheetTrigger>
        <SheetContent className="bg-gray-900/50 border-gray-700 backdrop-blur-md hover:shadow-[0_0_20px_rgba(15,244,198,0.15)] hover:border-[#0ff4c6]/50 transition-all duration-300">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-12 items-center justify-center p-4 h-full w-full">
            {navItems.map((active) => (
              <SheetClose key={active.name}>
                <a
                  href={active.link}
                  key={active.name}
                  className={cn(
                    "transition-colors duration-200 py-5 px-4 cursor-pointer text-glow-subtle flex flex-col gap-2",
                    activeItem === active.name &&
                      "text-[#0ff4c6] hover:text-[#0ff4c6]"
                  )}
                  onClick={() => {
                    setActiveItem(active.name);
                  }}>
                  <div
                    className={cn(
                      activeItem === active.name
                        ? "text-glow duration-200"
                        : "text-gray-300 hover:text-white duration-200"
                    )}>
                    {active.name}
                  </div>
                  {activeItem === active.name && (
                    <div className="bottom-0 h-0.75 bg-[#0ff4c6] rounded-t-sm shadow-[0_0_8px_#0ff4c6,0_0_15px_rgba(15,244,198,0.6)] animate-pulse-subtle" />
                  )}
                </a>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
