import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "../styles/home.css";

export default function Home(prop) {
  const { data } = prop;
  return (
    <div className="home container">
      <Header />
      <Main data={data} />
      <Footer />
    </div>
  );
}
