export type Product = {
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
};

export const PRODUCTS: Product[] = [
  {
    title: "Omniware.lk",
    description:
      "Premium custom PC builds and components: catalog search, categories, and a focused path from discovery to checkout.",
    url: "https://www.omniware.lk/",
    image: "/projects/omniware.png",
    tags: ["E-commerce", "Catalog", "Checkout"],
  },
  {
    title: "The Ceylon Spice Hub",
    description:
      "A storefront experience for Ceylon spices and blends, built for clear navigation and product discovery.",
    url: "https://ceylonspicehub.lk/",
    image: "/projects/ceylon-spice-hub.png",
    tags: ["Retail", "Product Discovery", "UX"],
  },
  {
    title: "Island Safaris Sri Lanka",
    description:
      "A Safari booking platform for elephant safaris in Sri Lanka, with jeep reservations across Minneriya, Kaudulla, and Hurulu, cultural add-ons, PayPal advance payments, and a protected admin dashboard.",
    url: "https://www.islandsafarisl.com/",
    image: "/projects/islandsafari.png",
    tags: ["Tourism", "Booking", "i18n"],
  },
];
