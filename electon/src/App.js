import { createContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import axios from "axios";


export const dataContext = createContext();

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2022/products").then((products) => {
      setData(products.data);

    });
  }, []);

  return <div className="App">
    <dataContext.Provider value={{ data }}>
      <Home />
    </dataContext.Provider >
  </div>;

}

export default App;
