import { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../App";

export default function Product() {
  const { data } = useContext(dataContext);
  const { id } = useParams();
  const [prod] = data.filter((product) => product.id === id);
  console.log(data);
  return (
    <div>
      <img src={prod.image} />
      <p>{prod.name}</p>
    </div>
  );
}
