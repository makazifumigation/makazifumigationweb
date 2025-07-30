"use client";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import {
  FaGithub,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container max-w-7xl mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-start">
            <Link href="/" className="text-xl font-bold text-primary">
              Makazi Fumigation&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()}{" "}
              {language === "sw"
                ? "Makazi Fumigation. Haki zote zimehifadhiwa."
                : "Makazi Fumigation. All rights reserved."}
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/makazi_fumigation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaYoutube className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/255685482846"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
