import React from 'react';

const ProductCard = ({ image, title }) => (
  <div style={{ textAlign: 'center' }}>
    <img
      src={image}
      alt={title}
      style={{
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '50%',
        padding: '50px',
      }}
    />
    <h3>{title}</h3>
  </div>
);

const ProductList = () => (
  <div>
    <h2 style={{ textAlign: 'center' }}>Products</h2>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ProductCard
        image="https://sunrise.in/wp-content/uploads/2021/09/basic-ground-spices.jpg"
        title="Ground Spices"
      />
      <ProductCard
        image="https://sunrise.in/wp-content/uploads/2021/09/blended-spice.jpg"
        title="Blended Spices"
      />
      <ProductCard
        image="https://sunrise.in/wp-content/uploads/2021/09/whole-spicies.jpg"
        title="Whole Spices"
      />
    </div>
  </div>
);

export default ProductList;
