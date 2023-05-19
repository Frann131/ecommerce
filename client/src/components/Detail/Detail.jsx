import { useState } from "react";
import data from "../data.json";
import s from "./Detail.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import numeral from "numeral";

const Detail = (props) => {
  const { id } = useParams();
  console.log(id);
  const product = data.prendas.filter((p) => p.id === parseInt(id))[0];
  console.log(product);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(undefined);
  const [selectedColor, setSelectedColor] = useState(undefined);

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

  const handleSelectedSize = (size) => {
    setSelectedSize(size);
    setSelectedColor(undefined);
  };

  const filteredBySize = product.variants.filter((variant) => {
    if (selectedSize) {
      return variant.size === selectedSize;
    } else return variant;
  });

  const filteredByColor = filteredBySize.filter((v) => {
    if (selectedColor) {
      return v.color.name === selectedColor;
    } else return v;
  });

  const formatPrice = numeral(filteredByColor[0].price).format("$0,0")
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
        src={
          selectedSize && selectedColor
            ? filteredByColor[0]?.img
            : product.variants[0].img
        }
        alt={"Seleccione un talle y un color para ver la imagen"}
      />
      <div style={{ textAlign: "left" }}>
        <h2>{product.title}</h2>
        <h3>{formatPrice}</h3>
        <h4>{product.description}</h4>
        <div className={s.talles}>
          <button
            onClick={() => handleSelectedSize("S")}
            disabled={availableSize(product, "S")}
          >
            S
          </button>
          <button
            onClick={() => handleSelectedSize("M")}
            disabled={availableSize(product, "M")}
          >
            M
          </button>
          <button
            onClick={() => handleSelectedSize("L")}
            disabled={availableSize(product, "L")}
          >
            L
          </button>
          <button
            onClick={() => handleSelectedSize("XL")}
            disabled={availableSize(product, "XL")}
          >
            XL
          </button>
          <button
            onClick={() => handleSelectedSize("XXL")}
            disabled={availableSize(product, "XL")}
          >
            XXL
          </button>
        </div>
        {selectedSize ? (
          <div className={s.colors}>
            <p>Colores:</p>
            {filteredBySize &&
              filteredBySize.map((variant) => {
                return (
                  <button
                    style={{ backgroundColor: `${variant.color.color}` }}
                    className={s.colorBtn}
                    onClick={() => setSelectedColor(variant.color.name)}
                  ></button>
                );
              })}
          </div>
        ) : null}
        <p style={{ fontWeight: "500" }}>
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
