import type { Metadata } from "next";
import FleetClient from "./FleetClient";

export const metadata: Metadata = {
    title: "Car Rental Fleet Dubai | Danat Aldonia",
    description:
        "Browse every category from economy to supercars. Filter by category, body type and seats. Delivery across Dubai, insurance included.",
};

export default function FleetPage() {
    return <FleetClient />;
}
