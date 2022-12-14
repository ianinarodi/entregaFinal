import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../MyButton/MyButton";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    setIsInCart(count);
    addToCart(product, count);
  }

 

  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      {isInCart ? (
        <Link to="/cart">
          <MyButton>Ir al Carrito</MyButton>
        </Link>
      ) : (
        <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
      )}
    
    </div>
  );
}

export default ItemDetail;