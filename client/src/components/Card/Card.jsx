import s from "./Card.module.css"

const Card = (props) => {
    return (
        <div className={s.card}>
            <img src={props.img} alt="" />
            <h3>${props.price}</h3>
            <p>{props.title}</p>
        </div>
    )
};
export default Card;
