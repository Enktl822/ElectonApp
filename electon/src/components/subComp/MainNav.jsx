import { useState } from "react";
import "../../styles/ subStyle/mainNav.css";
import Card from "./Card";
import { data } from "../../util/data";

const productLists = [
  "all",
  "appliances",
  "computers & tablets",
  "gaming console",
  "telescope",
];

export default function MainNav() {
  const [datta, setData] = useState(data);
  const [saver, setSaver] = useState(0);

  function asd(prop) {
    const test = data.filter((e) => e.category === prop);
    if (prop === "all") {
      setData(data);
    } else {
      setData(test);
    }
  }

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
      {datta.map((e) => (
        <Card datta={e} />
      ))}
    </div>
  );
}
