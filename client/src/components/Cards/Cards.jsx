import Card from "../Card/Card";
import data from "../data.json";

const Cards = () => {
  return (
    <div style={{display: "flex"}}>
      {data.prendas.map((p) => {
        return (
          <Card
            key={p.id}
            img={p.variants[0].img}
            title={p.title}
            price={p.variants[0].price}
          />
        );
      })}
    </div>
  );
};
export default Cards;
