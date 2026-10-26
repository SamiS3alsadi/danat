import { Locale } from "./translations";

export const LOCALES = ["en", "ar"] as const;

/** English has no URL prefix; Arabic lives under /ar. */
export const DEFAULT_LOCALE: Locale = "en";

export const BASE_URL = "https://danataldonia.com";

/**
 * Whether the Arabic tree may be indexed.
 *
 * Arabic ships behind noindex until the page bodies and car copy are
 * translated (Phases 3 and 4) — an Arabic URL serving English prose reads as
 * duplicate content. This one flag drives both the robots meta tag and whether
 * the Arabic URLs are submitted in the sitemap, so lifting it is a one-line
 * change once the translations land.
 */
export const AR_INDEXABLE = false;

/** Every static route, used for the sitemap and the metadata table. */
export const ROUTES = [
    "/",
    "/fleet",
    "/pricing",
    "/about",
    "/faq",
    "/contact",
    "/delivery-areas",
    "/terms",
    "/privacy",
] as const;

export type StaticRoute = (typeof ROUTES)[number];

export function isLocale(value: string): value is Locale {
    return (LOCALES as readonly string[]).includes(value);
}

/** The public path for a route in a locale: "/about" (en) or "/ar/about" (ar). */
export function pathFor(locale: Locale, route: string): string {
    const clean = route === "/" ? "" : route.startsWith("/") ? route : `/${route}`;
    if (locale === DEFAULT_LOCALE) return clean || "/";
    return `/ar${clean}`;
}

/** The absolute URL for a route in a locale — for canonical, hreflang and the sitemap. */
export function urlFor(locale: Locale, route: string): string {
    const path = pathFor(locale, route);
    return path === "/" ? BASE_URL : `${BASE_URL}${path}`;
}

/**
 * Split a pathname into its locale and its unprefixed route.
 * "/ar/fleet" -> { locale: "ar", route: "/fleet" };  "/fleet" -> { locale: "en", route: "/fleet" }
 *
 * "/en/fleet" is also accepted: English is rewritten onto that internal tree,
 * so during prerendering usePathname() reports the /en path even though the
 * public URL is bare. Both spellings must resolve to the same route.
 */
export function routeFromPathname(pathname: string): { locale: Locale; route: string } {
    for (const locale of LOCALES) {
        const prefix = `/${locale}`;
        if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
            return { locale, route: pathname.slice(prefix.length) || "/" };
        }
    }
    return { locale: DEFAULT_LOCALE, route: pathname || "/" };
}
