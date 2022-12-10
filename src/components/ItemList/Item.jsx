import React from "react";
import MyButton from "../MyButton/MyButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import { Link } from "react-router-dom";
import "../ItemDetail/item.css";

function Item({ title, thumbnail, price, stock, color, id, discount }) {
  const urlDetail = `/detail/${id}`;
  const stylePrice = { color: discount && "pink" };

  return (
    <div className="card">
      <ToggleButton icon="♥" />
      <div className="card-img">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="card_detail">
        <h3>{title}</h3>
        <h4 style={stylePrice} className="priceTag">
          $ {price}
        </h4>
        {discount && <small>Descuento: {discount}</small>}
        {stock <= 0 && <span>Sin stock disponible</span>}
      </div>

      <Link to={urlDetail}>
        <MyButton
          onTouchButton={() => console.log("click")}
          colorBtn={stock <= 0 && "red"}
        >
          Ver más
        </MyButton>
      </Link>
    </div>
  );
}

export default Item;