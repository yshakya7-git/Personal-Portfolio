"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";
import HamburgerIcon from "../icons/HamburgerIcon";
import Image from "next/image";
import logo from "../../public/logo.png";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <section className="sticky top-0 z-50 h-16 px-4 py-3 flex justify-between items-center bg-white/80 backdrop-blur-md shadow-sm dark:bg-black/80">
        <Image src={logo} alt="Logo" width={40} height={40} />

        <div className="hidden lg:flex gap-4">
          {navItems.map((item) => {
            const isActive = pathName === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm  transition ${
                  isActive
                    ? "text-secondary border-b-2 border-secondary font-semibold"
                    : "text-[#71717A] font-medium"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-1.5 bg-secondary text-white rounded-full text-sm">
            Hire Me
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden active:scale-95 transition"
          >
            <HamburgerIcon />
          </button>
        </div>
      </section>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-xl p-6 flex flex-col gap-6"
            >
              <button
                onClick={() => setOpen(false)}
                className="self-end text-xl active:scale-95"
              >
                ✕
              </button>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-800 active:scale-95 transition"
                >
                  {item.label}
                </Link>
              ))}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
