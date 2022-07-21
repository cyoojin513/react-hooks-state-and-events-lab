import React, { useState } from "react";

function Item({ name, category }) {

  const [addCart, setAddCart] = useState(true)

  function handleCart(e) {
    setAddCart(!addCart)
  }

  return (
    <li className={addCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={ handleCart } className="add">
        {addCart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
