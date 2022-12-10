import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder, exportArrayToFirestore } from "../../Services/firestore";
import { useNavigate } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import "./cartview.css";
import CartForm from "./CartForm";
import { collection, addDoc } from "firebase/firestore";
import { DB } from "../../Services/firestore";
import ThankYou from "../ThankYou/ThankYou";

function CartView() {
    const {
        cart,
        removeItem,
        clearCart,
        priceInCart,
        getTotalPrice,
        itemsInCart,
    } = useContext(cartContext);
    let navigate = useNavigate();

    if (cart.length === 0)
        return (
            <div className='cart-container'>
                <h1>Carrito Vacío</h1>
            </div>
        );

    async function handleCheckout(evt, data) {
      evt.preventDefault();
        const order = {
            buyer: data,
            items: cart,
            total: 0,
            date: new Date(),
          };

        // const orderId = await createOrder(order);
        // navigate(`/thankyou/${orderId}`);

        const collectionRef = collection(DB, "orders");
        addDoc(collectionRef, order)
            .then(({ id }) => {
                 navigate(`/thankyou/${id}`);
                console.log(id);
                clearCart()
            })
            
    }

  return (
    <div className="cart-container">
      <div className="cart-itemsList">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <h2>{item.title}</h2>
            <h4>${item.price}</h4>
            <h4>Unidades: {item.count}</h4>
            <h4>Precio Final: ${getTotalPrice()}</h4>
            <MyButton onTouchButton={() => removeItem(item.id)} colorBtn="red">
              X
            </MyButton>
          </div>
        ))}
      </div>
      <CartForm onSubmit={handleCheckout} />
      <button onClick={() => clearCart()}>Vaciar carrito</button>
    </div>
  );
}

export default CartView