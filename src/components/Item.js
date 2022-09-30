import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleClick(){
    setInCart((inCart) => !inCart)
  }
  const cartStatus = inCart ? "Remove from Cart" : "Add to Cart"
  const cartClass = inCart ? "in-cart" : ""
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{cartStatus}</button>
    </li>
  );
}

export default Item;
