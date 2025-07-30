"use client";
import Link from "next/link";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const labels = {
    en: {
      home: "Home",
      about: "About Us",
      contact: "Contact Us",
    },
    sw: {
      home: "Nyumbani",
      about: "Kuhusu Sisi",

      contact: "Wasiliana Nasi",
    },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: labels[language].home },
    { href: "/about", label: labels[language].about },
    { href: "/contact", label: labels[language].contact },
  ];

  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-200">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 tracking-wide">
          <Link href="/" className="text-xl font-bold text-primary">
            <Image
              className="h-8 w-8"
              src="/images/logo.png"
              alt="Makazi Fumigation logo"
              height={1000}
              width={1000}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded-full border border-primary bg-white">
              <button
                type="button"
                onClick={() => toggleLanguage("en")}
                className={`px-3 py-1.5 text-sm font-medium  transition-colors ${
                  language === "en"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700"
                } focus:relative cursor-pointer`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => toggleLanguage("sw")}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  language === "sw"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700"
                } focus:relative cursor-pointer`}
              >
                Swahili
              </button>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded-full border border-primary bg-white">
                    <button
                      type="button"
                      onClick={() => toggleLanguage("en")}
                      className={`px-3 py-1.5 text-sm font-medium  transition-colors ${
                        language === "en"
                          ? "bg-primary text-white"
                          : "bg-white text-gray-700"
                      } focus:relative cursor-pointer`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleLanguage("sw")}
                      className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                        language === "sw"
                          ? "bg-primary text-white"
                          : "bg-white text-gray-700"
                      } focus:relative cursor-pointer`}
                    >
                      Swahili
                    </button>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
