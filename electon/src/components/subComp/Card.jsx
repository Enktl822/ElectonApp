import "../../styles/ subStyle/card.css"
import BasketCard from "../../Icons/BasketCard"

export default function Card(props) {
  const { datta } = props;
  return (
    <div className="card">
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
