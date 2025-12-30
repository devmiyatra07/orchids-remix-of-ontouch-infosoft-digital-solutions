"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

    return (
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>
  
          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#0A4D8C]"
              >
                {link.name}
              </Link>
            ))}
                <Button asChild className="bg-[#0A4D8C] text-white hover:bg-[#083D6F]">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
            </div>
    
            {/* Mobile Nav Toggle */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-600 hover:text-[#0A4D8C] md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
    
          {/* Mobile Nav Menu */}
          {isOpen && (
            <div className="border-b border-zinc-200 bg-white md:hidden">
              <div className="flex flex-col gap-4 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-zinc-600 hover:text-[#0A4D8C]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                  <Button asChild className="w-full bg-[#0A4D8C] text-white hover:bg-[#083D6F]">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get in Touch
                    </Link>
                  </Button>
              </div>
            </div>
          )}
      </nav>
    );
}
