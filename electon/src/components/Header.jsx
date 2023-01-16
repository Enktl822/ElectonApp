import Elogo from "../Icons/Elogo";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="head">
      <navbar>
        <Elogo />
      </navbar>
      <div className="banner"></div>
    </div>
  );
}
