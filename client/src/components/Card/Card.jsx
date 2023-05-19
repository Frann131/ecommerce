import { Link } from "react-router-dom";
import s from "./Card.module.css";
import numeral from "numeral"

const Card = (props) => {

const formatPrice = numeral(props.price).format("$0,0")

  return (
    <Link style={{color:"#232323"}} to={`/product/${props.id}`}>
      <div className={s.card}>
        <img src={props.img} alt="" />
        <h3>{formatPrice}</h3>
        <p>{props.title}</p>
      </div>
    </Link>
  );
};
export default Card;
