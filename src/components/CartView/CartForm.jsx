import { useState, useContext } from "react";
import "./cartform.css";
import { cartContext } from "../../context/cartContext";


export default function CartForm(props) {
  const {clearCart} = useContext(cartContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;
    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }

  function onSubmit2(evt) {
    if (data.name.length === 0) return;
    evt.preventDefault();
    props.onSubmit(evt, data);
  }
  

  return (
    <form className="formulario" onSubmit={onSubmit2}>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="name" style={{ width: "100px", marginRight: 4 }}>
          Nombre:
        </label>
        <input
          required
          value={data.name}
          name="name"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="email" style={{ width: "100px", marginRight: 4 }}>
          Email:
        </label>
        <input
          required
          value={data.email}
          name="email"
          type="email"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="phone" style={{ width: "100px", marginRight: 4 }}>
          Teléfono:
        </label>
        <input
          required
          value={data.phone}
          name="phone"
          type="phone"
          onChange={onInputChange}
        />
      </div>

      <button 
        disabled={data.name === "" || data.phone === "" || data.email === ""}
        type="submit"
      >
        Finalizar Compra 😉
      </button>
    </form>
    
  );
}