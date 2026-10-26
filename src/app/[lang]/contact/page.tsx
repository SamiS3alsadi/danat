import type { Metadata } from "next";
import { staticPageMetadata } from "@/i18n/meta";
import { isLocale } from "@/i18n/routes";
import { siteConfig } from "@/config/site";
import ContactClient from "./ContactClient";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    return staticPageMetadata(isLocale(lang) ? lang : "en", "/contact");
}

const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Danat Aldonia Rent a Car",
    "image": "https://danataldonia.com/images/logo-icon.png",
    "@id": "https://danataldonia.com",
    "url": "https://danataldonia.com",
    "telephone": "+971525944022",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hor Al Anz East, Deira",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2764,
        "longitude": 55.3400
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "21:00"
        }
    ],
    "sameAs": [
        siteConfig.instagram,
        siteConfig.whatsappBase
    ]
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <ContactClient />
        </>
    );
}
