import type { Metadata } from "next";
import { staticPageMetadata } from "@/i18n/meta";
import { isLocale } from "@/i18n/routes";
import PricingClient from "./PricingClient";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    return staticPageMetadata(isLocale(lang) ? lang : "en", "/pricing");
}

export default function PricingPage() {
    return <PricingClient />;
}
