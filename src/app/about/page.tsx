import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us | Danat Aldonia Car Rental Dubai",
    description:
        "Every car, every budget, one standard of service. How Danat Aldonia rents across every category in Dubai, with delivery and transparent pricing.",
};

export default function AboutPage() {
    return <AboutClient />;
}
