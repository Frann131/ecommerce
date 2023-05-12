import { useState } from "react";
import data from "./data.json";
import s from "./Detail.module.css";
import { FaShoppingCart } from "react-icons/fa";

const Detail = () => {
  const product = data.prendas[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(undefined);

  const availableSize = (product, size) => {
    const sizes = product.variants.filter((v) => {
      return v.size === size;
    });
    let disabled = true;
    if (sizes.length > 0) {
      disabled = false;
    } else disabled = true;
    return disabled;
  };
  const filteredBySize = product.variants.filter((variant) => {
    console.log(selectedSize);
    if (selectedSize) {
      return variant.size === selectedSize;
    } else return variant;
  });
  console.log("filtrado:", filteredBySize);

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
          <button
            onClick={() => setSelectedSize("S")}
            disabled={availableSize(product, "S")}
          >
            S
          </button>
          <button
            onClick={() => setSelectedSize("M")}
            disabled={availableSize(product, "M")}
          >
            M
          </button>
          <button
            onClick={() => setSelectedSize("L")}
            disabled={availableSize(product, "L")}
          >
            L
          </button>
          <button
            onClick={() => setSelectedSize("XL")}
            disabled={availableSize(product, "XL")}
          >
            XL
          </button>
          <button
            onClick={() => setSelectedSize("XXL")}
            disabled={availableSize(product, "XXL")}
          >
            XXL
          </button>
        </div>
        <div className={s.colors}>
          <p>Colores:</p>
          {filteredBySize &&
            filteredBySize.map((variant) => {
              return (
                <button
                  style={{ backgroundColor: `${variant.color.color}` }}
                  className={s.colorBtn}
                ></button>
              );
            })}
        </div>
        <p style={{fontWeight:"500"}}>
          Cantidad:{" "}
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </p>
        <button className={s.addBtn}>
          <FaShoppingCart style={{ width: "1.5em", height: "1.5em" }} />
          <p>AÑADIR AL CARRITO</p>
        </button>
      </div>
    </div>
  );
};
export default Detail;
