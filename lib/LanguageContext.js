// app/context/LanguageContext.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("language");
    if (stored) setLanguage(stored);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "sw" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    window.location.reload(); // optional
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
