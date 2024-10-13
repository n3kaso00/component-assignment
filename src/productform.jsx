import React, { useState } from "react";

const ProductForm = ({ products, setOrder}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity(prevQuantity => Math.max(0, prevQuantity + change));
  };

  const handleProductChange = (e) => {
    setSelectedIndex(e.target.value);
  };

  const handleOrder = () => {
    const selectedProduct = products[selectedIndex];
    setOrder({
      name: selectedProduct.name,
      price: selectedProduct.price,
      quantity: quantity
    });
  };

  return (
    <div className="product-form">
      <select value={selectedIndex} onChange={handleProductChange}>
        {products.map((product, index) => (
          <option key={index} value={index}>
            {product.name}
          </option>
        ))}
      </select>

      <div className="quantity-control">
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>

      <button onClick={handleOrder}>Place order</button>

    </div>
  );


};

export default ProductForm;