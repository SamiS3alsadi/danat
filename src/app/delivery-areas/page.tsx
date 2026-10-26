import type { Metadata } from "next";
import DeliveryAreasClient from "./DeliveryAreasClient";

export const metadata: Metadata = {
    title: "Car Delivery Across Dubai | Danat Aldonia",
    description:
        "We deliver to Dubai Marina, Downtown, Business Bay, JBR, Palm Jumeirah, DIFC and beyond within 60 minutes, whichever category you rent.",
};

export default function DeliveryAreasPage() {
    return <DeliveryAreasClient />;
}
