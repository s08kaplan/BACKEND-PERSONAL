import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<PrivateRouter />}>
          <Route path="" element={<Products />} />
        </Route>
        <Route path="/about"  element={<About/>} />
        <Route path="*"  element={<NotFound/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
