"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export default function Navbar() {
  const active = usePathname().split("/")[1];
  const [activeItem, setActiveItem] = useState(
    active ? capitalizeFirstLetter(active) : "Home"
  );
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Update the indicator position when active item changes
  useEffect(() => {
    const activeIndex = navItems.findIndex(
      (active) => active.name === activeItem
    );
    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      const activeRef = navRefs.current[activeIndex];
      if (activeRef) {
        // Calculate exact width and position
        const textWidth = activeRef.offsetWidth;
        const textLeft = activeRef.offsetLeft;

        setIndicatorStyle({
          width: `${textWidth}px`,
          transform: `translateX(${textLeft}px)`,
          transition: "transform 0.3s ease, width 0.3s ease",
        });
      }
    }
  }, [activeItem]);

  // Handle window resize to reposition the indicator
  useEffect(() => {
    const handleResize = () => {
      const activeIndex = navItems.findIndex(
        (active) => active.name === activeItem
      );
      if (activeIndex !== -1 && navRefs.current[activeIndex]) {
        const activeRef = navRefs.current[activeIndex];
        if (activeRef) {
          const textWidth = activeRef.offsetWidth;
          const textLeft = activeRef.offsetLeft;

          setIndicatorStyle({
            width: `${textWidth}px`,
            transform: `translateX(${textLeft}px)`,
          });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeItem]);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0a0c14] border-b border-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" onClick={() => setActiveItem("Home")}>
          <span className="text-[#0ff4c6] text-2xl font-bold text-glow cursor-pointer hover:text-white duration-200">
            Farbubby
          </span>
        </Link>
        <div className="hidden md:block">
          <div className="flex items-center relative gap-2">
            {navItems.map((active, index) => (
              <Link
                href={active.link}
                key={active.name}
                ref={(el) => {
                  navRefs.current[index] = el;
                }}
                className={cn(
                  "transition-colors duration-200 py-5 px-4 cursor-pointer text-glow-subtle",
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
              </Link>
            ))}
            <div
              className="absolute bottom-0 h-0.75 bg-[#0ff4c6] rounded-t-sm shadow-[0_0_8px_#0ff4c6,0_0_15px_rgba(15,244,198,0.6)] animate-pulse-subtle"
              style={indicatorStyle}
            />
          </div>
        </div>
        <div className="flex md:hidden text-white">
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
        </div>
      </div>
    </nav>
  );
}
