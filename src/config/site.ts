export const siteConfig = {
  name: "Danat Aldonia Rent a Car",
  tagline: "Premium Car Rental Dubai",
  description:
    "Experience the ultimate luxury car rental in Dubai. Wide range of supercars, SUVs, and luxury sedans with 24/7 support and doorstep delivery.",
  phone: "+971525944022",
  phoneDisplay: "+971 52 594 4022",
  email: "alsdysamy594@gmail.com",
  instagram: "https://instagram.com/1dubairentacar",
  address: "Dubai, United Arab Emirates",
  get whatsappBase() {
    return `https://wa.me/${this.phone}`;
  },
  get tel() {
    return `tel:${this.phone}`;
  },
  whatsappMessage(text: string) {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(text)}`;
  },
};
