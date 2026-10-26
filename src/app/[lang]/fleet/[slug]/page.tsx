import { Metadata } from "next";
import { notFound } from "next/navigation";
import fleetData from "@/data/fleet.json";
import { Car } from "@/data/types";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/i18n/meta";
import { isLocale, urlFor } from "@/i18n/routes";
import { serverT } from "@/i18n/server";
import CarDetailClient from "./CarDetailClient";

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang, slug } = await params;
    const locale = isLocale(lang) ? lang : "en";
    const car = (fleetData as Car[]).find((c) => c.slug === slug);

    if (!car) {
        return { title: locale === "ar" ? "السيارة غير موجودة | دانة الدنيا" : "Car Not Found | Danat Aldonia" };
    }

    // The price always comes from pricePerDay, so a rate change can never leave a stale title.
    const price = car.pricePerDay.toLocaleString("en-US");
    const name = car.shortName ?? car.name;
    const title =
        locale === "ar"
            ? `استأجر ${car.brand} ${name} في دبي | ${price} درهم/يوم`
            : `Rent ${car.brand} ${name} in Dubai | AED ${price}/day`;

    const description =
        car.metaDescription?.[locale] ??
        (locale === "ar"
            ? `${car.description.ar} يبدأ من ${price} درهم يومياً. توصيل مجاني في دبي.`
            : `${car.description.en} Starting from AED ${price} per day. Free delivery in Dubai.`);

    return buildMetadata({
        locale,
        route: `/fleet/${car.slug}`,
        title,
        description,
        images: [{ url: car.mainImage, alt: `${car.brand} ${car.name} rental Dubai` }],
    });
}

/**
 * Only the slugs from generateStaticParams exist. Without this, an unknown slug
 * renders dynamically and loading.tsx flushes a 200 shell before notFound()
 * resolves — a soft 404. (Pre-existing; the locale move surfaced it.)
 */
export const dynamicParams = false;

export async function generateStaticParams() {
    return (fleetData as Car[]).map((car) => ({ slug: car.slug }));
}

export default async function CarDetailPage({ params }: Props) {
    const { lang, slug } = await params;
    const locale = isLocale(lang) ? lang : "en";
    const t = serverT(lang);
    const car = (fleetData as Car[]).find((c) => c.slug === slug);

    if (!car) notFound();

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: `${car.brand} ${car.name}`,
        description: car.description[locale],
        image: car.mainImage,
        brand: { "@type": "Brand", name: car.brand },
        offers: {
            "@type": "Offer",
            price: car.pricePerDay,
            priceCurrency: "AED",
            priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: car.pricePerDay,
                priceCurrency: "AED",
                unitText: "DAY",
            },
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: siteConfig.name },
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: t.carDetail.breadcrumbHome, item: urlFor(locale, "/") },
            { "@type": "ListItem", position: 2, name: t.carDetail.breadcrumbFleet, item: urlFor(locale, "/fleet") },
            {
                "@type": "ListItem",
                position: 3,
                name: `${car.brand} ${car.name}`,
                item: urlFor(locale, `/fleet/${car.slug}`),
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <CarDetailClient slug={slug} />
        </>
    );
}
