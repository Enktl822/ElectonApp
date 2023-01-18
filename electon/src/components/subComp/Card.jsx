export default function Card(props) {
  const { datta } = props;
  return (
    <div className="card">
      <div>{datta.name}</div>
      <img src={datta.image} alt="" />
      <p>{datta.description}</p>
    </div>
  );
}
