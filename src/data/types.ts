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
    specs: CarSpecs;
    description: string;
    isFeatured: boolean;
    isBestDeal: boolean;
    depositRequired: boolean;
    deliveryAvailable: boolean;
}
