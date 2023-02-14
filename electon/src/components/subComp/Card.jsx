import "../../styles/ subStyle/card.css";
import BasketCard from "../../Icons/BasketCard";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { basketContext } from "../../App";

export default function Card(props) {
  const { datta } = props;
  const { basket, setBasket } = useContext(basketContext);

  const navigate = useNavigate();

  return (
    <div className="card" style={{ cursor: "pointer" }}>
      <div
        className="cardImage"
        onClick={() => {
          navigate(`/product/${datta.id}`);
        }}
      >
        <img src={datta.image} alt="" />
      </div>
      <div className="cardContent">
        <div className="cardBasket">
          <h3>{datta.name.slice(0, 15)}</h3>
          <p>${datta.price}</p>
        </div>
        <div
          onClick={() => {
            console.log(datta);
          }}
          className="border"
        >
          Сагслах
        </div>
        <BasketCard />
      </div>
    </div>
  );
}
