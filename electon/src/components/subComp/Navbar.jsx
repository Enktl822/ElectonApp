import SignIn from "../../Icons/SignIn";
import "../../styles/ subStyle/navbar.css";
import Elogo from "../../Icons/Elogo";
import BasksetCanvas from "./BasketCanvas";

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
        <div className="navGroup">
          <SignIn />
          <p>Sign in</p>
        </div>

        <BasksetCanvas />
      </div>
    </div>
  );
}
