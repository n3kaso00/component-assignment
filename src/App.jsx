import React, { useState } from "react";
import Header from "./header.jsx";
import ProductForm from "./productform.jsx";

const App = () => {
  const products = [
    {name: 'Product A', price: 10},
    {name: 'Product B', price: 20},
    {name: 'Product C', price: 30},
  ];

const [order, setOrder] = useState(null);

return (
  <div className="app">
    <Header image=""></Header>

    <ProductForm products={products} setOrder={setOrder}></ProductForm>

  </div>
);

};

export default App;