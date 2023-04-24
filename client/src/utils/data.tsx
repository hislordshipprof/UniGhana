import { images } from "@/components/Global/Image";

export const customers = [
  {
    id: 1,
    name: "Kirk Wolf",
    email: "debra.holt@example.com",
    phone: "+233 570900062",
    address: "Madina, Accra",
    profilePic: images.profile.src,
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+233 570900063",
    address: "East Legon, Accra",
    profilePic: images.person.src,
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+233 570900064",
    address: "Adenta, Accra",
    profilePic: images.profile.src,
  },
];

export const orders = [
  {
    id: 1,
    profilePic: images.howling_wolf.src,
    product_name: "Sony camera",
    price: 1000,
    quantity: 2,
    date: "2021-09-01",
    status: "pending",
  },
  {
    id: 2,
    profilePic: images.howling_wolf.src,
    product_name: "Canon camera",
    price: 2000,
    quantity: 1,
    date: "2021-09-01",
    status: "delivered",
  },
  {
    id: 3,
    profilePic: images.howling_wolf.src,
    product_name: "Nikon camera",
    price: 3000,
    quantity: 3,
    date: "2021-09-01",
    status: "undelivered",
  },
];

export const bookings = [
  {
    id: 1,
    orderId: "#9192",
    profilePic: images.profile.src,
    name: "Kirk Wolf",
    quantity: 2,
    amount: 2000,
    location: "Madina, Accra",
    status: "pending",
  },
  {
    id: 2,
    orderId: "#9193",
    profilePic: images.profile.src,
    name: "John Doe",
    quantity: 1,
    amount: 1000,
    location: "East Legon, Accra",
    status: "delivered",
  },
  {
    id: 3,
    orderId: "#9194",
    profilePic: images.profile.src,
    name: "Jane Smith",
    quantity: 3,
    amount: 3000,
    location: "Adenta, Accra",
    status: "undelivered",
  },
];
