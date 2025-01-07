import React, { useState } from 'react';
import '../css/quantityControls.css'

const QuantityControls = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to the cart`);
  };

  return (
    <div className="main-product-container">
      <div className="quantity-controls">
        <button className="decrease-btn" onClick={handleDecrease}>
          -
        </button>
        <input
          type="number"
          className="quantity-input"
          value={quantity}
          min="1"
          readOnly
        />
        <button className="increase-btn" onClick={handleIncrease}>
          +
        </button>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        + ADD TO CART
      </button>
      {/* <p className="sku">SKU: 3008599</p> */}
    </div>
  );
};

export default QuantityControls;
