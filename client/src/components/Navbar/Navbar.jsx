import { Button, Dropdown, Container, Menu, MenuItem } from "semantic-ui-react";
import { useState } from "react";
import s from "./Navbar.module.css";

const Navbar = () => {

  return (
    <nav className={s.navbar}>
      <h1>Fashion Store</h1>
      <p>INICIO</p>
      <select value="PRODUCTOS">
        <option value="all" selected>
          PRODUCTOS
        </option>
        <option style={{margin: "30px"}} className={s.option} value="remeras">Remeras</option>
        <option className={s.option} value="buzos">Buzos</option>
        <option className={s.option} value="pantalones">Pantalones</option>
        <option className={s.option} value="accesorios">Accesorios</option>
        <option className={s.option} value="zapatillas">Zapatillas</option>
      </select>
      <p>CATEGORIAS</p>
      <p>CONTACTO</p>
    </nav>
  );
};

export default Navbar;
