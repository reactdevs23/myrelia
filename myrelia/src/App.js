import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import PlayMyrelia from "./components/Layout/PlayMyrelia/PlayMyrelia";
import Banner from "./components/Layout/Banner/Banner";
import AboutUs from "./components/Layout/AboutUs/AboutUs";
import Layout from "./components/Layout/Layout";
import JoinUs from "./components/JoinUs/JoinUs";
import Ranking from "./components/Ranking/Ranking";
import Home from "./components/Home/Home";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {" "}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/joinus" element={<JoinUs />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
