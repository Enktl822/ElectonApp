import { useParams } from "react-router-dom";
import { data } from "../util/data";

export default function Product() {
  const { id } = useParams();
  const [prod] = data.filter((product) => product.id === id);
  console.log(prod);
  return (
    <div>
      <img src={prod.image} />
      <p>{prod.name}</p>3
    </div>
  );
}
