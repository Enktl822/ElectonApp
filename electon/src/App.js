import { useEffect, useState } from "react";
import Home from "./pages/Home";
import axios from "axios";

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:2022/products")
      .then(products => setData(products.data))
  }, [])


  return (
    <div className="App">
      {data && <Home data={data} />}

    </div>
  );
}

export default App;

