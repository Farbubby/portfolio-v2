"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Update the indicator position when active item changes
  useEffect(() => {
    const activeIndex = navItems.findIndex((name) => name === activeItem);
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
      const activeIndex = navItems.findIndex((name) => name === activeItem);
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
    <nav className="top-0 z-50 w-full bg-[#0a0c14] border-b border-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <button onClick={() => setActiveItem("Home")}>
          <span className="text-[#0ff4c6] text-2xl font-bold text-glow cursor-pointer">
            Farbubby
          </span>
        </button>
        <div className="hidden md:block">
          <div className="flex items-center relative gap-2">
            {navItems.map((name, index) => (
              <button
                key={name}
                ref={(el) => {
                  navRefs.current[index] = el;
                }}
                className={cn(
                  "text-gray-300 hover:text-white transition-colors duration-200 py-5 px-4 cursor-pointer",
                  activeItem === name && "text-[#0ff4c6] hover:text-[#0ff4c6]"
                )}
                onClick={() => {
                  setActiveItem(name);
                }}>
                <div
                  className={
                    activeItem === name ? "text-glow duration-300" : ""
                  }>
                  {name}
                </div>
              </button>
            ))}
            <div
              className="absolute bottom-0 h-0.5 bg-[#0ff4c6] rounded-t-sm shadow-[0_0_8px_#0ff4c6,0_0_15px_rgba(15,244,198,0.6)] animate-pulse-subtle"
              style={indicatorStyle}
            />
          </div>
        </div>
        <div className="flex md:hidden text-white">Hi</div>
      </div>
    </nav>
  );
}
