"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileMenu from "./Mobile-menu";

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
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
