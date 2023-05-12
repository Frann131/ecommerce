import avatar from "../../assets/1683571530914.jpg";
import s from "./Start.module.css"

const Start = () => {
  return (
    <div className={s.container}>
      <div>
        <h1>Franco Mindurry</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      <img
        style={{
          height: "20em",
          width: "20em",
          objectFit: "cover",
          borderRadius: "50%",
        }}
        src={avatar}
        alt="Franco Mindurry"
      />
    </div>
  );
};

export default Start;
