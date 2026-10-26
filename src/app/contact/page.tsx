import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Danat Aldonia Car Rental Dubai",
    description:
        "Call, WhatsApp or email Danat Aldonia to book a car in Dubai. 24/7 support, 60-minute delivery, and the same service standard for every category.",
};

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
