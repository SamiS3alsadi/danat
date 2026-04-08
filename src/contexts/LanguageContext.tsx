"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import translations, { Locale, TranslationKeys } from "@/i18n/translations";

interface LanguageContextType {
  locale: Locale;
  t: TranslationKeys;
  isRTL: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  t: translations.en,
  isRTL: false,
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "ar" || saved === "en") {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-locale", locale);
    localStorage.setItem("locale", locale);
  }, [locale]);

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        t: translations[locale] as TranslationKeys,
        isRTL: locale === "ar",
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
