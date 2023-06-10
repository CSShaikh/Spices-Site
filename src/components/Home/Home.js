import React from 'react';
import Carousel from '../Carousel/Carousel.js';
import ProductCard from '../ProductCard/ProductCard.js';
import Products from '../Products/Products.js';
// import AboutUs from './componenets/'

export default function Home() {
  const productData = [
    {
      id: 1,
      image:
        'https://th.bing.com/th/id/OIP.xqqfFjHgdF5Erxai6VOl3AHaGA?w=250&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      title: 'Dhaniya Powder',
      price: 140,
    },
    {
      id: 2,
      image:
        'https://th.bing.com/th/id/OIP.QWi0CDnrcofXtyqRPgCC8QHaFj?w=214&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      title: 'Red Chilli Powder',
      price: 240,
    },
    {
      id: 3,
      image:
        'https://i0.wp.com/www.urbangreensmarket.com/wp-content/uploads/2019/05/turmeric-powder-1.jpg?fit=1465%2C1465&ssl=1',
      title: 'Product 2',
      price: 14.99,
    },
    {
      id: 4,
      image:
        'https://satvyk.com/wp-content/uploads/2019/01/black-pepper-powder-1024x1024.jpg',
      title: 'Product 2',
      price: 14.99,
    },

    // Add more product objects as needed
  ];
  return (
    <div>
      <Carousel />
      <ProductCard />
      <Products products={productData} />
    </div>
  );
}
