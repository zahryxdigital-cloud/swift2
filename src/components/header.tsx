"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "/services/document-clearing", label: "Document Clearing" },
      { href: "/services/technical-services", label: "Technical Services" },
      { href: "/services/building-cleaning", label: "Building Cleaning" },
    ],
  },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-2 -ml-8">
            {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center font-bold text-lg text-background">
              SZ
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold tracking-tight">Al Areeq</span>
              <span className="block text-[10px] text-muted tracking-widest uppercase">Facility Management</span>
            </div> */}
            <Image
              src="/logo-ats.png"
              alt="Al Areeq Technical Services"
              width={280}
              height={90}
              priority
              className="h-20  object-cover"
            />
          </Link>


          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname.startsWith("/services")
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                      }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-0 mt-1 w-72 glass rounded-xl p-2 shadow-2xl"
                      >
                        {link.dropdown.map((dl) => (
                          <Link
                            key={dl.href}
                            href={dl.href}
                            className="block px-4 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all"
                          >
                            {dl.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === link.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+971568126777"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              +971 56 812 6777
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg glass text-foreground/80"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5 bg-background/98 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    <div className="ml-4 space-y-1">
                      {link.dropdown.map((dl) => (
                        <Link
                          key={dl.href}
                          href={dl.href}
                          className="block px-4 py-2 rounded-lg text-sm text-muted hover:text-primary hover:bg-white/5"
                          onClick={() => setMobileOpen(false)}
                        >
                          {dl.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg font-medium ${pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-foreground/80 hover:text-primary hover:bg-white/5"
                      }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="tel:+971568126777"
                className="flex items-center gap-2 px-4 py-3 mt-4 rounded-lg bg-primary/10 border border-primary/20 text-primary font-medium"
              >
                <Phone className="w-4 h-4" />
                +971 56 812 6777
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
