import { Metadata } from "next";
import { notFound } from "next/navigation";
import fleetData from "@/data/fleet.json";
import { Car } from "@/data/types";
import { siteConfig } from "@/config/site";
import CarDetailClient from "./CarDetailClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const car = (fleetData as Car[]).find((c) => c.slug === slug);

    if (!car) {
        return { title: "Car Not Found | Danat Aldonia" };
    }

    const title = `Rent ${car.brand} ${car.name} in Dubai | AED ${car.pricePerDay.toLocaleString()}/day`;
    const description = `${car.description} Starting from AED ${car.pricePerDay.toLocaleString()} per day. Free delivery in Dubai.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: car.mainImage, alt: `${car.brand} ${car.name} rental Dubai` }],
            siteName: siteConfig.name,
            type: "website",
        },
    };
}

export async function generateStaticParams() {
    return (fleetData as Car[]).map((car) => ({ slug: car.slug }));
}

export default async function CarDetailPage({ params }: Props) {
    const { slug } = await params;
    const car = (fleetData as Car[]).find((c) => c.slug === slug);

    if (!car) notFound();

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: `${car.brand} ${car.name}`,
        description: car.description,
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
            { "@type": "ListItem", position: 1, name: "Home", item: "https://danataldonia.com" },
            { "@type": "ListItem", position: 2, name: "Fleet", item: "https://danataldonia.com/fleet" },
            {
                "@type": "ListItem",
                position: 3,
                name: `${car.brand} ${car.name}`,
                item: `https://danataldonia.com/fleet/${car.slug}`,
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
