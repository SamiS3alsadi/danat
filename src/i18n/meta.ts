import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Locale } from "./translations";
import { AR_INDEXABLE, StaticRoute, urlFor } from "./routes";

export interface RouteMeta {
    title: string;
    description: string;
}

/**
 * Titles and descriptions per route per locale.
 *
 * Titles stay under 60 characters and descriptions under 155 so neither is
 * truncated in search results. The Arabic copy is machine-drafted and still
 * wants a native-speaker review before the Arabic tree is indexed.
 */
export const ROUTE_META: Record<StaticRoute, Record<Locale, RouteMeta>> = {
    "/": {
        en: {
            title: "Premium Car Rental Dubai | Danat Aldonia Rent a Car",
            description: siteConfig.description,
        },
        ar: {
            title: "تأجير سيارات في دبي | دانة الدنيا لتأجير السيارات",
            description:
                "كل سيارة، كل ميزانية، مستوى خدمة واحد. استأجر من الاقتصادية إلى الخارقة في دبي مع توصيل خلال 60 دقيقة وتأمين شامل وبدون رسوم خفية.",
        },
    },
    "/fleet": {
        en: {
            title: "Car Rental Fleet Dubai | Danat Aldonia",
            description:
                "Browse every category from economy to supercars. Filter by category, body type and seats. Delivery across Dubai, insurance included.",
        },
        ar: {
            title: "أسطول السيارات في دبي | دانة الدنيا",
            description:
                "تصفّح كل الفئات من الاقتصادية إلى السيارات الخارقة. فلتر حسب الفئة ونوع الهيكل وعدد المقاعد. توصيل في دبي وتأمين شامل.",
        },
    },
    "/pricing": {
        en: {
            title: "Car Rental Prices in Dubai | Danat Aldonia",
            description:
                "Daily, weekly and monthly plans for every category we rent. No hidden fees, insurance included, one standard of service at every budget.",
        },
        ar: {
            title: "أسعار تأجير السيارات في دبي | دانة الدنيا",
            description:
                "خطط يومية وأسبوعية وشهرية لكل فئة نوفّرها. بدون رسوم خفية، تأمين شامل، ومستوى خدمة واحد لكل ميزانية.",
        },
    },
    "/about": {
        en: {
            title: "About Us | Danat Aldonia Car Rental Dubai",
            description:
                "Every car, every budget, one standard of service. How Danat Aldonia rents across every category in Dubai, with delivery and transparent pricing.",
        },
        ar: {
            title: "من نحن | دانة الدنيا لتأجير السيارات في دبي",
            description:
                "كل سيارة، كل ميزانية، مستوى خدمة واحد. كيف تعمل دانة الدنيا في تأجير جميع الفئات في دبي مع التوصيل وأسعار شفافة.",
        },
    },
    "/faq": {
        en: {
            title: "Car Rental FAQ | Danat Aldonia Dubai",
            description:
                "Documents, minimum age, insurance, deposits, delivery and payment — what to know before renting a car in Dubai, in any category.",
        },
        ar: {
            title: "الأسئلة الشائعة | دانة الدنيا لتأجير السيارات",
            description:
                "المستندات المطلوبة والحد الأدنى للعمر والتأمين ومبلغ التأمين والتوصيل والدفع — ما تحتاج معرفته قبل استئجار سيارة في دبي.",
        },
    },
    "/contact": {
        en: {
            title: "Contact Us | Danat Aldonia Car Rental Dubai",
            description:
                "Call, WhatsApp or email Danat Aldonia to book a car in Dubai. 24/7 support, 60-minute delivery, and the same service standard for every category.",
        },
        ar: {
            title: "اتصل بنا | دانة الدنيا لتأجير السيارات في دبي",
            description:
                "اتصل بنا أو راسلنا على واتساب أو البريد لحجز سيارة في دبي. دعم على مدار الساعة، توصيل خلال 60 دقيقة، ونفس الخدمة لكل فئة.",
        },
    },
    "/delivery-areas": {
        en: {
            title: "Car Delivery Across Dubai | Danat Aldonia",
            description:
                "We deliver to Dubai Marina, Downtown, Business Bay, JBR, Palm Jumeirah, DIFC and beyond within 60 minutes, whichever category you rent.",
        },
        ar: {
            title: "مناطق توصيل السيارات في دبي | دانة الدنيا",
            description:
                "نوصّل إلى مرسى دبي ووسط مدينة دبي وخليج الأعمال وجميرا بيتش ريزيدنس ونخلة جميرا ومركز دبي المالي وغيرها خلال 60 دقيقة.",
        },
    },
    "/terms": {
        en: {
            title: "Terms & Conditions | Danat Aldonia Rent a Car",
            description:
                "Rental requirements, booking and cancellation, insurance excess, security deposits and traffic fines for car rentals with Danat Aldonia in Dubai.",
        },
        ar: {
            title: "الشروط والأحكام | دانة الدنيا لتأجير السيارات",
            description:
                "شروط الاستئجار والحجز والإلغاء ومبلغ التحمل في التأمين والتأمين المالي والمخالفات المرورية لدى دانة الدنيا في دبي.",
        },
    },
    "/privacy": {
        en: {
            title: "Privacy Policy | Danat Aldonia Rent a Car",
            description:
                "How Danat Aldonia collects, uses and safeguards your personal information when you book a car rental in Dubai.",
        },
        ar: {
            title: "سياسة الخصوصية | دانة الدنيا لتأجير السيارات",
            description:
                "كيف تجمع دانة الدنيا معلوماتك الشخصية وتستخدمها وتحميها عند حجز سيارة في دبي.",
        },
    },
};

export function routeMeta(locale: Locale, route: StaticRoute): RouteMeta {
    return ROUTE_META[route][locale];
}

/**
 * Build a page's Metadata: canonical, reciprocal hreflang for both locales,
 * OpenGraph, and the temporary noindex on Arabic.
 */
export function buildMetadata(opts: {
    locale: Locale;
    /** Unprefixed route, e.g. "/fleet" or "/fleet/rolls-royce-cullinan". */
    route: string;
    title: string;
    description: string;
    images?: { url: string; alt: string }[];
}): Metadata {
    const { locale, route, title, description, images } = opts;

    return {
        title,
        description,
        alternates: {
            canonical: urlFor(locale, route),
            languages: {
                en: urlFor("en", route),
                ar: urlFor("ar", route),
                "x-default": urlFor("en", route),
            },
        },
        openGraph: {
            title,
            description,
            url: urlFor(locale, route),
            siteName: siteConfig.name,
            locale: locale === "ar" ? "ar_AE" : "en_US",
            type: "website",
            ...(images ? { images } : {}),
        },
        ...(locale === "ar" && !AR_INDEXABLE
            ? { robots: { index: false, follow: false } }
            : {}),
    };
}

/** Convenience wrapper for the static routes, which read their copy from the table. */
export function staticPageMetadata(locale: Locale, route: StaticRoute): Metadata {
    const { title, description } = routeMeta(locale, route);
    return buildMetadata({ locale, route, title, description });
}
