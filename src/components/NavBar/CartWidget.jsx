import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import IconSVG from "./IconSVG";
import { Link } from "react-router-dom";

function CartWidget() {
  const miContext = useContext(cartContext);
  const checkItem = miContext.itemsInCart()

  return (
    <div>
      <Link to="/cart">
        <IconSVG />
        {checkItem !== 0 && <span>{checkItem}</span> }
      </Link>
    </div>
  );
}

export default CartWidget;

// <span style={{ color: "red" }}>{miContext.itemsInCart()}</span> 