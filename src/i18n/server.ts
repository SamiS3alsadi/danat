import translations, { TranslationKeys } from "./translations";
import { isLocale } from "./routes";

/**
 * Translations for a server component, resolved from the [lang] route param.
 * Client components use the useLanguage() hook instead.
 */
export function serverT(lang: string): TranslationKeys {
    return translations[isLocale(lang) ? lang : "en"] as TranslationKeys;
}
