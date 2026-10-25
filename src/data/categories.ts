import fleetData from "./fleet.json";
import { Car } from "./types";

/** Which field on a car a category is matched against. */
export type CategoryField = "segment" | "type";

export interface Category {
    /** Value used in the ?category= query string, matched against `field`. */
    slug: string;
    /** The car field this category filters on. */
    field: CategoryField;
    /** Index into t.segments.items, so the translated label travels with the category. */
    i18nIndex: number;
}

/**
 * Single source of truth for fleet categories.
 *
 * The homepage tiles and the /fleet filter both read this list, so a category
 * can no longer be advertised in one place while the other has no way to show
 * it. Body types (Sedan/SUV/Van) live on `car.type`; price tiers (Luxury,
 * Supercar) live on `car.segment`.
 */
export const CATEGORIES: Category[] = [
    { slug: "Economy", field: "type", i18nIndex: 0 },
    { slug: "Sedan", field: "type", i18nIndex: 1 },
    { slug: "SUV", field: "type", i18nIndex: 2 },
    { slug: "Van", field: "type", i18nIndex: 3 },
    { slug: "Luxury", field: "segment", i18nIndex: 4 },
    { slug: "Supercar", field: "segment", i18nIndex: 5 },
];

const cars = fleetData as Car[];

export function findCategory(slug: string | null | undefined): Category | undefined {
    if (!slug) return undefined;
    return CATEGORIES.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}

/** How many cars the fleet currently holds in this category. */
export function carCount(category: Category): number {
    return cars.filter((car) => car[category.field] === category.slug).length;
}

/** True when the car belongs to the category named by `slug`. */
export function matchesCategory(car: Car, slug: string): boolean {
    const category = findCategory(slug);
    return category ? car[category.field] === category.slug : false;
}

/** Only categories with at least one car — nothing else is worth linking to. */
export const AVAILABLE_CATEGORIES: Category[] = CATEGORIES.filter((c) => carCount(c) > 0);
