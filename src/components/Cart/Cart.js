import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../CartContext';
import CartItem from './CartItem/CartItem.js';

const CartContainer = styled.div`
  margin-top: 20px;
`;

const ClearCartButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #c70000;
  }
`;

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <CartContainer>
      {cartItems.length > 0 ? (
        <>
          <ClearCartButton onClick={clearCart}>Clear Cart</ClearCartButton>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              imageSrc={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => removeFromCart(item.id)}
            />
          ))}
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </CartContainer>
  );
};

export default Cart;
