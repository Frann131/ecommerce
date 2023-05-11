import { useState } from "react";
import data from "./data.json";
import s from "./Detail.module.css";
import { FaShoppingCart } from "react-icons/fa";

const Detail = () => {
  const product = data.prendas[0];

  const [quantity, setQuantity] = useState(1);

  const availableSize = (product, size) => {
    const sizes = product.variants.filter((v) => {
      return v.size === size;
    });
    let disabled = true;
    if (sizes.length > 0) {
      disabled = false;
    } else disabled = true;
    console.log(disabled);
    return disabled;
  };

  return (
    <div className={s.container}>
      <img
        style={{
          width: "500px",
          height: "500px",
          objectFit: "cover",
          borderRadius: "3%",
          marginRight: "2rem",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
        }}
        src="https://deliverind.com.ar/wp-content/uploads/2022/10/BUZO-OVERSIZE-RUSTICO-22-PORTADA-10-scaled.jpg"
        alt=""
      />
      <div style={{ textAlign: "left" }}>
        <h2>{product.title}</h2>
        <h3>${product.variants[0].price}</h3>
        <h4>{product.description}</h4>
        <div className={s.talles}>
          <button disabled={availableSize(product, "S")}>S</button>
          <button disabled={availableSize(product, "M")}>M</button>
          <button disabled={availableSize(product, "L")}>L</button>
          <button disabled={availableSize(product, "XL")}>XL</button>
          <button disabled={availableSize(product, "XXl")}>XXL</button>
        </div>
        <p>
          Cantidad:{" "}
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </p>
        <button className={s.addBtn}>
          <FaShoppingCart/> AÑADIR AL CARRITO
        </button>
      </div>
    </div>
  );
};
export default Detail;
