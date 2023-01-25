import { useState } from "react";
import "../../styles/ subStyle/mainNav.css";
import Card from "./Card";

const productLists = [
  "all",
  "appliances",
  "computers & tablets",
  "gaming console",
  "telescope",
];

export default function MainNav(prop) {
  const { data } = prop;
  const [datta, setData] = useState(data);
  const [saver, setSaver] = useState(0);

  function asd(prop) {
    const test = datta.filter((e) => e.category === prop);
    if (prop === "all") {
      setData();
    } else {
      setData(test);
    }
  }
  console.log(data);

  return (
    <div>
      <div className="mainNav">
        <h1>Popular products</h1>
        <ul>
          {productLists.map((list, index) => (
            <li
              key={index}
              onClick={() => {
                setSaver(index);
              }}
            >
              {saver == index ? (
                <button
                  onClick={() => {
                    asd(list);
                  }}
                  className="mNavCam"
                >
                  {list}
                </button>
              ) : (
                <button
                  onClick={() => {
                    asd(list);
                  }}
                  className="mNav"
                >
                  {list}
                </button>
              )}
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
