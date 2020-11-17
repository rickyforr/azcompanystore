import React from "react";
import "./app.css";
import Products from "./products/products.component";

const products = [
  { id: "1", name: "shirt", price: 10, imageUrl: "https://www.louisvuitton.com/images/HIY49WTCL648_PM2_Front%20view" },
  { id: "2", name: "pants", price: 10, imageUrl: "https://www.louisvuitton.com/images/HIY49WTCL648_PM2_Front%20view" },
  { id: "3", name: "shoes", price: 10, imageUrl: "https://www.louisvuitton.com/images/HIY49WTCL648_PM2_Front%20view" },
];

function App() {
  return (
    <div className="App">
      <Products products={products} />
    </div>
  );
}

export default App;
