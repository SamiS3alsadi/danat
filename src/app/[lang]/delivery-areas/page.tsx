import type { Metadata } from "next";
import { staticPageMetadata } from "@/i18n/meta";
import { isLocale } from "@/i18n/routes";
import DeliveryAreasClient from "./DeliveryAreasClient";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    return staticPageMetadata(isLocale(lang) ? lang : "en", "/delivery-areas");
}

export default function DeliveryAreasPage() {
    return <DeliveryAreasClient />;
}
