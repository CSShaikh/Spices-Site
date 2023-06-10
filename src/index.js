import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from './CartContext';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
