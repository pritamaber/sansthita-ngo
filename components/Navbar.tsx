"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/all/Sansthita logo.jpg"
            alt="Sansthita NGO Logo"
            width={42}
            height={42}
            className="rounded-full"
          />

          <div className="flex flex-col leading-tight">
            <span
              className={`${poppins.className} text-lg sm:text-xl font-bold tracking-wide bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent`}
            >
              Sansthita
            </span>
            <span className="text-xs text-gray-500">
              A Voice for the Voiceless
            </span>
            <span className="text-[10px] text-gray-400">
              Reg. No. S/1L/31619
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6 text-gray-700 font-medium text-sm lg:text-base">
          <Link href="/" className="hover:text-blue-900 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-900 transition">
            About
          </Link>

          <Link href="/works" className="hover:text-blue-900 transition">
            Works
          </Link>

          <Link href="/events" className="hover:text-blue-900 transition">
            Events
          </Link>

          <Link href="/gallery" className="hover:text-blue-900 transition">
            Gallery
          </Link>

          {/* ✅ NEW MEMBERS LINK */}
          <Link href="/members" className="hover:text-blue-900 transition">
            Members
          </Link>

          <Link href="/partners" className="hover:text-blue-900 transition">
            Partners
          </Link>

          <Link href="/supporters" className="hover:text-blue-900 transition">
            Supporters
          </Link>

          <Link href="/contact" className="hover:text-blue-900 transition">
            Contact
          </Link>

          <Link
            href="/donate"
            className="bg-blue-900 text-white px-3 py-2 rounded-lg hover:bg-blue-800 transition whitespace-nowrap"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col items-center space-y-6 py-8 text-gray-700 font-medium">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
            <Link href="/works" onClick={closeMenu}>
              Works
            </Link>
            <Link href="/events" onClick={closeMenu}>
              Events
            </Link>
            <Link href="/gallery" onClick={closeMenu}>
              Gallery
            </Link>

            {/* ✅ MEMBERS MOBILE */}
            <Link href="/members" onClick={closeMenu}>
              Members
            </Link>

            <Link href="/partners" onClick={closeMenu}>
              Partners
            </Link>
            <Link href="/supporters" onClick={closeMenu}>
              Supporters
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>

            <Link
              href="/donate"
              onClick={closeMenu}
              className="bg-blue-900 text-white px-5 py-2 rounded-lg"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
