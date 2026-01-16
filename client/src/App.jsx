import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import AllCars from "./pages/allCars";
import NewCar from "./pages/newCar";

export default function App() {
  return (
    <div className="md:px-12 px-3">
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/all-cars" element={<AllCars />} />
        <Route path="/add-car" element={<NewCar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
