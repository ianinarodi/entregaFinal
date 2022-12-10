import React from "react";
import Item from "./Item";
import './itemlist.css';

function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
            stock={product.stock}
            category={product.category}
            discount={product.discount}
            color="pink"
          />
        );
      })}
    </div>
  );
}

export default React.memo(ItemList);