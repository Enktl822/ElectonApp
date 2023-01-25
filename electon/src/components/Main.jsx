import "../styles/main.css";
import MainNav from "./subComp/MainNav";

export default function Main(prop) {
  const { data } = prop;
  return (
    <div className="main">
      <MainNav data={data} />
    </div>
  );
}
