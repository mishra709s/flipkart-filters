import React, { useContext } from "react";
import "./Body.css";

import { ProductContext } from "../../Context/ProductContext";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Body() {
  const { allProducts } = useContext(ProductContext);
  console.log(allProducts);
  return (
    <div className="body">
      {allProducts.map((item) => {
        const { imageURL, title, description, mrp, itemId } = item;
        return (
          <div className="card" key={itemId}>
            <div className="card_img">
              <img src={imageURL} alt={title} />
            </div>
            <div className="card_header">
              <h2>{title}</h2>
              <p>{`${description.substring(0, 80)}...`}</p>
              <div className="price">
                <p className="actPrice">&#8377;{mrp}</p>
              </div>
              <div className="addToCart">
                <ShoppingCartIcon />
                Add To Cart
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Body;
