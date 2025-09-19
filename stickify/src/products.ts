// products.ts
import AppleWatch  from './assets/Apple2.jpg';
import AppleHeadphones from './assets/headphones.jpg';
import Iphone17 from './assets/iphone17.jpg';
import KeyboardPic from './assets/keyboard.jpeg';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with 20h battery life.",
    price: 199.99,
    image: `${AppleHeadphones}`,
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track fitness, heart rate, and notifications on the go.",
    price: 149.99,
    image: `${AppleWatch}`,
  },
  {
    id: 3,
    name: "Iphone 17 pro max",
    description: "Best Phone to playaround.",
    price: 59.99,
    image: `${Iphone17}`,
  },

  {
    id: 4,
    name: "Keyboard",
    description: "Ergonomic design with RGB lighting and fast response.",
    price: 59.99,
    image: `${KeyboardPic}`,
  },

  {
    id: 5,
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with 20h battery life.",
    price: 199.99,
    image: `${AppleHeadphones}`,
  },
  {
    id: 6,
    name: "Smartwatch",
    description: "Track fitness, heart rate, and notifications on the go.",
    price: 149.99,
    image: `${AppleWatch}`,
  },
  {
    id: 7,
    name: "Iphone 17 pro max",
    description: "Best Phone to playaround.",
    price: 59.99,
    image: `${Iphone17}`,
  },

  {
    id: 8,
    name: "Keyboard",
    description: "Ergonomic design with RGB lighting and fast response.",
    price: 59.99,
    image: `${KeyboardPic}`,
  },
];
