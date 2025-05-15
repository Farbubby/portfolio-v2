"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0a0c14] border-b border-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <Link href="/">
          <span className="text-[#0ff4c6] text-2xl font-bold">Farbubby</span>
        </Link>
        <div className="hidden md:block">
          <div className="flex gap-2">
            {navItems.map((name) => (
              <button key={name} className={cn("text-gray-300 py-1 px-4")}>
                <div className="cursor-pointer hover:text-[#0ff4c6] transition-colors duration-200">
                  {name}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex md:hidden">
          <button
            className="text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
