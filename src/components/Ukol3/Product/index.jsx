import './style.css';
import { useState } from 'react';

export const Product = ({ image, name, price, onAddToCart }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div
      className="product"
      onClick={() => {
        handleCount();
        onAddToCart(price);
      }}
    >
      <img src={image} className="product__image" />
      <div className="product__body">
        {name}: {price} Kč <br />
        {count} ks
      </div>
    </div>
  );
};
