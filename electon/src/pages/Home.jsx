import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { Route, Routes } from "react-router-dom";
import "../styles/home.css";
import Product from "./Product";

export default function Home(prop) {
  const { data } = prop;
  return (
    <div className="home container">
      <Header />
      <Routes>
        <Route path="/" element={<Main data={data} />} />
        <Route path="/product/:id" element={<Product data={data} />} />
      </Routes>
      <Footer />
    </div>
  );
}
