const BASE = import.meta.env.BASE_URL;

const plants = [
  // =========================
  // Aromatic Plants
  // =========================
  {
    id: 1,
    name: "Lavender",
    category: "Aromatic Plants",
    price: 12.99,
    image: `${BASE}images/lavender.jpg`,
    description: "A fragrant plant known for its calming aroma and beautiful purple flowers."
  },
  {
    id: 2,
    name: "Rosemary",
    category: "Aromatic Plants",
    price: 10.99,
    image: `${BASE}images/rosemary.jpg`,
    description: "A fragrant herb that adds a fresh aroma to your indoor garden."
  },
  {
    id: 3,
    name: "Mint",
    category: "Aromatic Plants",
    price: 8.99,
    image: `${BASE}images/mint.jpg`,
    description: "A refreshing aromatic herb that grows well in containers."
  },
  {
    id: 4,
    name: "Basil",
    category: "Aromatic Plants",
    price: 9.99,
    image: `${BASE}images/basil.jpg`,
    description: "A popular aromatic herb with fresh green leaves and a pleasant scent."
  },
  {
    id: 5,
    name: "Lemongrass",
    category: "Aromatic Plants",
    price: 11.99,
    image: `${BASE}images/lemongrass.jpg`,
    description: "A tropical aromatic plant with a bright citrus fragrance."
  },
  {
    id: 6,
    name: "Thyme",
    category: "Aromatic Plants",
    price: 9.49,
    image: `${BASE}images/thyme.jpg`,
    description: "A compact aromatic herb that is perfect for indoor growing."
  },

  // =========================
  // Medicinal Plants
  // =========================
  {
    id: 7,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 14.99,
    image: `${BASE}images/aloe_vera.jpg`,
    description: "A popular succulent traditionally valued for its soothing properties."
  },
  {
    id: 8,
    name: "Snake Plant",
    category: "Medicinal Plants",
    price: 18.99,
    image: `${BASE}images/snake-plant.jpg`,
    description: "A hardy indoor plant known for its upright leaves and easy maintenance."
  },
  {
    id: 9,
    name: "Peppermint",
    category: "Medicinal Plants",
    price: 10.49,
    image: `${BASE}images/peppermint.jpg`,
    description: "A refreshing herb commonly grown for its cooling aroma."
  },
  {
    id: 10,
    name: "Chamomile",
    category: "Medicinal Plants",
    price: 13.99,
    image: `${BASE}images/chamomile.jpg`,
    description: "A delicate flowering plant traditionally used to make herbal tea."
  },
  {
    id: 11,
    name: "Eucalyptus",
    category: "Medicinal Plants",
    price: 16.99,
    image: `${BASE}images/eucalyptus.jpg`,
    description: "An aromatic plant with distinctive leaves and a fresh fragrance."
  },
  {
    id: 12,
    name: "Ginger",
    category: "Medicinal Plants",
    price: 12.49,
    image: `${BASE}images/ginger.jpg`,
    description: "A useful plant grown for its aromatic and flavorful underground rhizome."
  },

  // =========================
  // Decorative Plants
  // =========================
  {
    id: 13,
    name: "Peace Lily",
    category: "Decorative Plants",
    price: 19.99,
    image: `${BASE}images/peace-lily.jpg`,
    description: "An elegant indoor plant with glossy leaves and beautiful white flowers."
  },
  {
    id: 14,
    name: "Monstera",
    category: "Decorative Plants",
    price: 24.99,
    image: `${BASE}images/monstera.jpg`,
    description: "A striking tropical plant recognized by its large split leaves."
  },
  {
    id: 15,
    name: "Spider Plant",
    category: "Decorative Plants",
    price: 15.99,
    image: `${BASE}images/spider-plant.jpg`,
    description: "An attractive easy-care plant with long arching leaves."
  },
  {
    id: 16,
    name: "Pothos",
    category: "Decorative Plants",
    price: 13.99,
    image: `${BASE}images/pothos.jpg`,
    description: "A versatile trailing plant with beautiful heart-shaped leaves."
  },
  {
    id: 17,
    name: "Calathea",
    category: "Decorative Plants",
    price: 21.99,
    image: `${BASE}images/calathea.jpg`,
    description: "A decorative tropical plant with colorful patterned foliage."
  },
  {
    id: 18,
    name: "Rubber Plant",
    category: "Decorative Plants",
    price: 22.99,
    image: `${BASE}images/rubber-plant.jpg`,
    description: "A popular houseplant with large glossy leaves and a bold appearance."
  }
];

export default plants;