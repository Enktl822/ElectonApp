import { useState } from "react";
import "../../styles/ subStyle/mainNav.css";
import Card from "./Card";

const filterBtns = [
  "all",
  "appliances",
  "computers & tablets",
  "gaming console",
  "telescope",
];

export default function MainNav(prop) {
  const { data } = prop;
  const [datta, setData] = useState(data);
  // const [filter, setFilter] = useState(0);
  const [selected, setSelected] = useState("all");

  function asd(prop) {
    const test = datta.filter((e) => e.category === prop);
    if (prop === "all") {
      setData();
    } else {
      setData(test);
    }
  }
  console.log(data);

  function filterHandler(buttonName) {
    setSelected(buttonName);
    if (buttonName === "all") {
      setData(data);
    } else {
      setData(data.filter((prod) => prod.category === buttonName));
    }
  }
  return (
    <div>
      <div className="mainNav">
        <h1>Popular products</h1>
        <ul>
          {filterBtns.map((buttonName, index) => (
            <li key={index} onClick={() => filterHandler(buttonName)}>
              <button
                className={
                  buttonName === selected
                    ? "filterButton active"
                    : "filterButton"
                }
              >
                {buttonName}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="cards">
        {datta.map((e, index) => (
          <Card key={index} datta={e} />
        ))}
      </div>
    </div>
  );
}
