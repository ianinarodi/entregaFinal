import React from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { useEffect } from "react";


function ThankYou() {
  const idOrder = useParams().idOrder;

useEffect(()=>{
mostrarAlerta();
}, [0]);

const mostrarAlerta=()=>{
 Swal.fire("😄¡Gracias por tu compra!🙌");
}

 return (
    <div style={{ color: "white" }}>
      <h1>
       🚀 El id de tu compra es: <strong>{idOrder} </strong>
      </h1>
    </div>
  );
}

export default ThankYou;