import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar"
import Home from "../pages/Home";
import Books from "../pages/Books";
import Authors from "../pages/Authors";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound"
import BookForm from "../pages/BookForm";

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book-form" element={<BookForm />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </>
  );
};

export default AppRouter;
