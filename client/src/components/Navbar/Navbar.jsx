import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <nav className={s.navbar}>
      <Link style={{ color: "white" }} to="/">
        <h1>Fashion Store</h1>
      </Link>
      <Link style={{ color: "white" }} to="/">
        <p>INICIO</p>
      </Link>
      <select
      onmouse
        onMouseOver={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        selected="all"
      > PRODUCTOS
      <option value="all" selected>
              PRODUCTOS
            </option>
        {showOptions && (
          <>
            
            <option
              style={{ margin: "30px" }}
              className={s.option}
              value="remeras"
            >
              Remeras
            </option>
            <option className={s.option} value="buzos">
              Buzos
            </option>
            <option className={s.option} value="pantalones">
              Pantalones
            </option>
            <option className={s.option} value="accesorios">
              Accesorios
            </option>
            <option className={s.option} value="zapatillas">
              Zapatillas
            </option>
          </>
        )}
      </select>
      <p>CATEGORIAS</p>
      <p>CONTACTO</p>
      <Link style={{ color: "white" }}>
        <FaShoppingCart style={{ fontSize: "20pt" }} />
      </Link>
    </nav>
  );
};

export default Navbar;
