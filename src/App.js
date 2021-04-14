import "./logo.svg";
import React from "react";
import { Button } from "./components/Product/buttons/Button/Button";
import { ProductItem } from "./components/Product/Card";

function App() {
  return (
    <div className="App">
      <Button />
      <ProductItem text="ITEM" name="Tea" cost="$10" />
      <Button />
      <ProductItem text="ITEM" name="Tea" cost="$25" />
      <Button />
      <ProductItem text="ITEM" name="Tea" cost="$21" />
      <Button />
      <ProductItem text="ITEM" name="Tea" cost="$15" />
    </div>
  );
}

export default App;
