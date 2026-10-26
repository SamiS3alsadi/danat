import translations, { Locale } from "./translations";

/**
 * Prices read "AED 1,200" in English and "1,200 درهم" in Arabic — the label
 * moves after the number, which is why this is a formatter and not a token.
 *
 * Digits stay Western in both locales (en-US grouping) by project decision.
 * Schema keeps the ISO code "AED" and must not use this.
 */
export function formatPrice(amount: number, locale: Locale): string {
    const value = amount.toLocaleString("en-US");
    const currency = translations[locale].common.currency;
    return locale === "ar" ? `${value} ${currency}` : `${currency} ${value}`;
}

/** Fills {placeholders} in a translated template. */
export function fill(template: string, values: Record<string, string | number>): string {
    return Object.entries(values).reduce(
        (out, [key, value]) => out.replaceAll(`{${key}}`, String(value)),
        template,
    );
}
