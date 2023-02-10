import "../styles/main.css";
import Banner from "./subComp/Banner";
import MainNav from "./subComp/MainNav";

export default function Main(prop) {
  const { data } = prop;
  return (
    <div className="main">
      <Banner />
      <MainNav data={data} />
    </div>
  );
}
