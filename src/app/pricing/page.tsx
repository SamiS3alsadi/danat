import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
    title: "Car Rental Prices in Dubai | Danat Aldonia",
    description:
        "Daily, weekly and monthly plans for every category we rent. No hidden fees, insurance included, one standard of service at every budget.",
};

export default function PricingPage() {
    return <PricingClient />;
}
