"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  /*
    Mobile menu state
  */
  const [menuOpen, setMenuOpen] = useState(false);

  /*
    Close mobile menu when a link is clicked
  */
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* ================= NAVBAR CONTAINER ================= */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Site Name */}
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Sansthita
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-900 transition">
            Home
          </Link>

          <Link href="/gallery" className="hover:text-blue-900 transition">
            Gallery
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

          {/* Donate button highlighted */}
          <Link
            href="/donate"
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Donate
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col items-center space-y-6 py-8 text-gray-700 font-medium">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>

            <Link href="/gallery" onClick={closeMenu}>
              Gallery
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

            {/* Donate button in mobile */}
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
