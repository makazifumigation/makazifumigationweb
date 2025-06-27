"use client";

import { useEffect, useState } from "react";

const LanguageToggle = () => {
  const [language, setLanguage] = useState("en");
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowButton(false);
      } else {
        // Scrolling up
        setShowButton(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Load language from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("language");
    if (stored) setLanguage(stored);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "sw" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    window.location.reload(); // optional, depending on how your i18n is setup
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`fixed bottom-6 left-6 z-50 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary-dark transition-transform duration-500 cursor-pointer ${
        showButton ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      }`}
    >
      {language === "en" ? "Swahili" : "English"}
    </button>
  );
};

export default LanguageToggle;
