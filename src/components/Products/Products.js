import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../CartContext';
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProductCard = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #888;
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #008000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #006400;
  }
`;

const WishlistButton = styled.button`
  background-color: #ff00ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  margin-right: 10px;

  &:hover {
    background-color: #c700c7;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const QuantitySelect = styled.select`
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Products = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.title} />
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>&#x20B9;{product.price}</ProductPrice>
          <ButtonContainer>
            <WishlistButton>Add to Wishlist</WishlistButton>
            <AddToCartButton
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to Cart
            </AddToCartButton>
          </ButtonContainer>
          <QuantityContainer>
            <QuantitySelect>
              <option value="">-- Select Quantity --</option>
              <option value="0.250">0.250 g</option>
              <option value="0.500">0.500 g</option>
              <option value="0.750">0.750 g</option>
              <option value="1.000">1 kg</option>
            </QuantitySelect>
          </QuantityContainer>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
};

export default Products;
