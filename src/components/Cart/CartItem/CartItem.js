import React from 'react';
import styled from 'styled-components';

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  color: #666;
`;

const RemoveButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  margin:10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;

const EmptyCartMessage = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 10px;
`;

const CartItem = ({ imageSrc, name, price, onRemove }) => {
  return (
    <>
      {imageSrc ? (
        <CartItemWrapper>
          <ProductImage src={imageSrc} alt={name} />
          <ProductDetails>
            <ProductName>{name}</ProductName>
            <ProductPrice>${price}</ProductPrice>
          </ProductDetails>
          <RemoveButton onClick={onRemove}>Remove</RemoveButton>
        </CartItemWrapper>
      ) : (
        <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
      )}
    </>
  );
};

export default CartItem;
