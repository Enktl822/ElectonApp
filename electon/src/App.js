import { createContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import axios from "axios";


export const dataContext = createContext();
export const basketContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2022/products").then((products) => {
      setData(products.data);

    });
  }, []);

  return <div className="App">
    <basketContext.Provider value={{ basket, setBasket }}>
      <dataContext.Provider value={{ data }}>
        <Home />
      </dataContext.Provider >
    </basketContext.Provider>
  </div>;

}

export default App;
