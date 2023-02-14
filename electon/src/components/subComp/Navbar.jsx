import "../../styles/ subStyle/navbar.css";
import Elogo from "../../Icons/Elogo";
import BasksetCanvas from "./BasketCanvas";
import Login from "../../pages/Login";

export default function NavbarBlue() {
  return (
    <div className="navbar">
      <Elogo />
      <form>
        <input
          className="search"
          type="search"
          placeholder="Search any things"
        ></input>
        <button className="searchButton">Search</button>
      </form>

      <div className="navGroup headNav">
        <Login />
        <BasksetCanvas />
      </div>
    </div>
  );
}
