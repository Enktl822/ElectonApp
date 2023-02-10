import "../styles/main.css";
import Banner from "./subComp/Banner";
import MainNav from "./subComp/MainNav";

export default function Main() {
  return (
    <div className="main">
      <Banner />
      <MainNav />
    </div>
  );
}
