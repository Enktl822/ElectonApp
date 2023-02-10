import { useParams } from "react-router-dom";

export default function Product({ data }) {
  const { id } = useParams();
  const [prod] = data.filter((product) => product.id === id);
  console.log(prod);
  return (
    <div>
      <img src={prod.image} />
      <p>{prod.name}</p>
    </div>
  );
}
