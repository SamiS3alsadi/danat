"use client";

import React, { createContext, useContext, useMemo } from "react";
import translations, { Locale, TranslationKeys } from "@/i18n/translations";
import { pathFor } from "@/i18n/routes";

interface LanguageContextType {
  locale: Locale;
  t: TranslationKeys;
  isRTL: boolean;
  /** Prefixes an internal path with the active locale: "/fleet" -> "/ar/fleet". */
  localeHref: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  t: translations.en,
  isRTL: false,
  localeHref: (path: string) => pathFor("en", path),
});

/**
 * The locale comes from the URL via the [lang] segment, so it is already
 * correct in the server-rendered HTML — no localStorage, no post-hydration
 * dir flip.
 */
export const LanguageProvider = ({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) => {
  const value = useMemo<LanguageContextType>(
    () => ({
      locale,
      t: translations[locale] as TranslationKeys,
      isRTL: locale === "ar",
      localeHref: (path: string) => pathFor(locale, path),
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
