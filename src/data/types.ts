export type CarType = "Supercar" | "Luxury" | "SUV" | "Sedan" | "Economy" | "Van";

export interface CarSpecs {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
    seats: number;
    transmission: "Automatic" | "Manual";
    fuel: "Petrol" | "Diesel" | "Electric" | "Hybrid";
    luggage: string;
}

export interface Car {
    id: string;
    name: string;
    brand: string;
    slug: string;
    type: CarType;
    segment: "Economy" | "Mid-Range" | "Premium" | "Luxury" | "Supercar";
    pricePerDay: number;
    pricePerWeek: number;
    pricePerMonth: number;
    mainImage: string;
    images: string[];
    /** Shorter name used only in the meta title, to keep it under 60 characters. */
    shortName?: string;
    /** Hand-written meta description; falls back to `description` + price when absent. */
    metaDescription?: string;
    specs: CarSpecs;
    description: string;
    isFeatured: boolean;
    isBestDeal: boolean;
    depositRequired: boolean;
    deliveryAvailable: boolean;
}
