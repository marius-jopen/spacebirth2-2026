"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Watch", href: "/watch" },
  { label: "Media", href: "/media" },
  { label: "Production", href: "/production" },
  { label: "Press", href: "/press" },
  { label: "People", href: "/people" },
  { label: "Game", href: "/game" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "/home";
    return pathname === href;
  };

  const updatePill = useCallback(() => {
    if (!navRef.current || !pillRef.current) return;
    const activeLink = navRef.current.querySelector(
      ".nav-active"
    ) as HTMLElement;
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      pillRef.current.style.width = `${linkRect.width + 16}px`;
      pillRef.current.style.transform = `translateX(${linkRect.left - navRect.left - 8}px)`;
      pillRef.current.style.opacity = "1";
    }
  }, []);

  useEffect(() => {
    updatePill();
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [pathname, updatePill]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 hidden sm:block">
        <div className="flex justify-center pt-[25px]">
          <div className="relative">
            <div
              ref={pillRef}
              className="absolute top-0 h-full rounded-full bg-white/10 transition-all duration-700 ease-[cubic-bezier(0.93,0,0.4,1.17)] opacity-0"
              style={{ zIndex: -1 }}
            />
            <ul
              ref={navRef}
              className="flex gap-0 list-none m-0 p-0"
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`inline-block px-[12px] py-[8px] text-[18px] font-[Inter-Regular] no-underline transition-opacity duration-300 ${
                      isActive(item.href)
                        ? "nav-active text-[#dbdbdb]"
                        : "text-white hover:opacity-70"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="sm:hidden fixed top-0 left-0 w-full z-30 bg-black border-b border-black">
        <div className="flex items-center justify-between h-[50px] px-[15px]">
          <Link
            href="/"
            className="text-white text-[16px] font-[flut] no-underline leading-none"
            style={{ textDecoration: "none" }}
          >
            Spacebirth 2
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-[30px] h-[30px] bg-transparent border-none cursor-pointer z-31 p-0"
            aria-label="Toggle menu"
          >
            <span
              className={`block absolute left-[7px] w-[17px] h-[1px] bg-white transition-transform duration-200 ${
                mobileMenuOpen
                  ? "top-[14px] rotate-45 translate-y-0"
                  : "top-[11px]"
              }`}
            />
            <span
              className={`block absolute left-[7px] w-[17px] h-[1px] bg-white transition-transform duration-200 ${
                mobileMenuOpen
                  ? "bottom-[14px] -rotate-45 translate-y-0"
                  : "bottom-[11px]"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.52,0.16,0.24,1)] ${
            mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-[15px] py-[10px]">
            <ul className="list-none m-0 p-[10px] bg-white/10 rounded-[20px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-[12px] py-[10px] text-[16px] text-center no-underline rounded-full ${
                      isActive(item.href)
                        ? "text-white bg-white/10"
                        : "text-[#dbdbdb]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
