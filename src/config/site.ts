export const siteConfig = {
  name: "Danat Aldonia Rent a Car",
  tagline: "Premium Car Rental Dubai",
  description:
    "Every car, every budget, one standard of service. Rent economy to supercars in Dubai with 60-minute delivery, insurance included and no hidden fees.",
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
