import { MetadataRoute } from "next";
import fleetData from "@/data/fleet.json";
import { Car } from "@/data/types";
import { AR_INDEXABLE, LOCALES, ROUTES, urlFor } from "@/i18n/routes";
import { Locale } from "@/i18n/translations";

const PRIORITY: Record<string, number> = {
    "/": 1,
    "/fleet": 0.9,
    "/pricing": 0.7,
    "/delivery-areas": 0.7,
    "/about": 0.6,
    "/faq": 0.6,
    "/contact": 0.6,
    "/terms": 0.3,
    "/privacy": 0.3,
};

const CHANGE_FREQUENCY: Record<string, "weekly" | "monthly" | "yearly"> = {
    "/": "weekly",
    "/fleet": "weekly",
    "/pricing": "monthly",
    "/delivery-areas": "monthly",
    "/about": "monthly",
    "/faq": "monthly",
    "/contact": "monthly",
    "/terms": "yearly",
    "/privacy": "yearly",
};

/**
 * Both locales are listed, each entry carrying the full set of hreflang
 * alternates. While AR_INDEXABLE is false the Arabic URLs are left out: a
 * sitemap that submits noindex URLs just earns "Submitted URL marked
 * noindex" warnings in Search Console. Flipping that one flag publishes them.
 */
function submittedLocales(): Locale[] {
    return LOCALES.filter((locale) => locale !== "ar" || AR_INDEXABLE);
}

function alternatesFor(route: string) {
    return {
        languages: {
            en: urlFor("en", route),
            ar: urlFor("ar", route),
            "x-default": urlFor("en", route),
        },
    };
}

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const locales = submittedLocales();

    const staticPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
        ROUTES.map((route) => ({
            url: urlFor(locale, route),
            lastModified,
            changeFrequency: CHANGE_FREQUENCY[route],
            priority: PRIORITY[route],
            alternates: alternatesFor(route),
        })),
    );

    const carPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
        (fleetData as Car[]).map((car) => ({
            url: urlFor(locale, `/fleet/${car.slug}`),
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.8,
            alternates: alternatesFor(`/fleet/${car.slug}`),
        })),
    );

    return [...staticPages, ...carPages];
}
