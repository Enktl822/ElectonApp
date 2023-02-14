import { useEffect, useContext, useState } from "react";
import { dataContext } from "../../App";
import "../../styles/ subStyle/mainNav.css";
import Card from "./Card";

const filterBtns = [
  "all",
  "appliances",
  "computers & tablets",
  "gaming console",
  "telescope",
];

export default function MainNav() {
  const { data } = useContext(dataContext);
  const [datta, setData] = useState(data);
  useEffect(() => {
    setData(data);
  }, [data]);
  const [selected, setSelected] = useState("all");

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
        {datta.map((e, index) => {
          return <Card key={index} datta={e} />;
        })}
      </div>
    </div>
  );
}
