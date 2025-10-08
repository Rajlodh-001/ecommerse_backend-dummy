// Available filters
export const filters = {
  type: ["electronics", "appliances", "furniture", "clothing"],
  price: ["0-1000", "1000-5000", "5000-20000", "20000-50000"],
  review: [5, 4, 3, 2, 1],
  color: ["white", "black", "red", "blue", "green"],
  material: ["metal", "plastic", "rubber", "wood", "cotton"],
  brand: ["Sony", "Samsung", "LG", "Nike", "Adidas", "Ikea"],
  offer: [10, 20, 40, 50, 70],
};

// Sorting options
export const sortOptions = [
  "price low-high",
  "price high-low",
  "relevance",
  "popularity",
  "new arrivals",
];

export const popularcategory = [
  { furniture: 240, image: "https://placehold.co/200x150" },
  { cloth: 200, image: "https://placehold.co/200x150" },
  { electronics: 180, image: "https://placehold.co/200x150" },
  { appliances: 200, image: "https://placehold.co/200x150" },
  { cleaning: 280, image: "https://placehold.co/200x150" },
  { accessories: 250, image: "https://placehold.co/200x150" },
];

export const recommendation = [
  { id: 1, name: "Sony Headphones", review: 4, price: 3500 },
  { id: 2, name: "Samsung LED TV", review: 5, price: 18000 },
  { id: 3, name: "Nike Running Shoes", review: 4, price: 2500 },
  { id: 4, name: "Ikea Wooden Table", review: 5, price: 12000 },
  { id: 5, name: "LG Refrigerator", review: 3, price: 30000 },
  { id: 6, name: "Adidas T-Shirt", review: 4, price: 1200 },
  { id: 7, name: "Apple iPhone 14", review: 5, price: 75000 },
  { id: 8, name: "Dell Laptop", review: 4, price: 55000 },
];

export const cart = [
  {
    id: 1,
    name: "Sony Headphones",
    type: "electronics",
    color: "black",
    image: "https://placehold.co/200x150",
    quantity: 1,
  },
  {
    id: 2,
    name: "Ikea Wooden Table",
    type: "furniture",
    color: "brown",
    image: "https://placehold.co/200x150",
    quantity: 2,
  },
  {
    id: 3,
    name: "Nike Running Shoes",
    type: "cloth",
    color: "red",
    image: "https://placehold.co/200x150",
    quantity: 1,
  },
];

// export const address = [
//   {
//     name: "Raj Lodh",
//     address: [
//       {
//         addressline1: "A-2405 BL Pallase opp. Maga Mall AB Road. ",
//         addressline2: "P&T Colonay BKC complex Bandra East mumbai Maharashtra",
//       },
//     ],
//     phone: "9876543210",
//     email: "rajlodh@gmail.com",
//     street: "123 MG Road",
//     city: "Mumbai",
//     state: "Maharashtra",
//     country: "India",
//     postalCode: "400001",
//   },
// ];

export const addresses = [
  {
    id: 1,
    firstName: "Raj",
    lastName: "Lodh",
    phone: "+91 9876543210",
    email: "raj.lodh@example.com",
    addressLine1: "123 MG Road",
    addressLine2: "Near Metro Station",
    city: "Bangalore",
    state: "Karnataka",
    postalCode: "560001",
    country: "India",
    type: "Home",
  },
  {
    id: 2,
    firstName: "Raj",
    lastName: "Lodh",
    phone: "+91 9876543210",
    email: "raj.lodh@example.com",
    addressLine1: "456 Brigade Road",
    addressLine2: "Office Complex, 5th Floor",
    city: "Bangalore",
    state: "Karnataka",
    postalCode: "560025",
    country: "India",
    type: "Office",
  },
];
