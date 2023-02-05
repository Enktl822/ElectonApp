import "../../styles/ subStyle/card.css";
import BasketCard from "../../Icons/BasketCard";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const { datta } = props;
  const navigate = useNavigate();
  return (
    <div
      className="card"
      style={{ cursor: "pointer" }}
      onClick={() => {
        navigate(`/product/${datta.id}`);
      }}
    >
      <div className="cardImage">
        <img src={datta.image} alt="" />
      </div>
      <div className="cardContent">
        <div className="cardBasket">
          {/* <h2>{datta.spec}</h2> */}
          <h3>{datta.name.slice(0, 15)}</h3>
          <p>${datta.price}</p>
        </div>

        <BasketCard />
      </div>
    </div>
  );
}
