import { createContext, useContext, useEffect, useState } from "react";

// Create the context
const CarsStore = createContext();
const API_URL = import.meta.env.VITE_API_URL;
// Provider component
export default function ProviderCar({ children }) {
  const [cars, setCars] = useState([]);

  // Fetch all cars on mount
  useEffect(() => {
    fetchCars();
  }, []);

  async function fetchCars() {
    try {
      const res = await fetch(`${API_URL}/cars`);
      const data = await res.json();
      setCars(data);
    } catch (err) {
      console.error("Failed to fetch cars:", err);
    }
  }

  const addCar = async (car) => {
    try {
      const res = await fetch(`${API_URL}/cars`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
      });
      const newCar = await res.json();
      setCars((prev) => [...prev, newCar]);
    } catch (err) {
      console.error("Failed to add car:", err);
    }
  };

  const value = { cars, setCars, fetchCars, addCar };

  return <CarsStore.Provider value={value}>{children}</CarsStore.Provider>;
}

// Custom hook to use the context
export const useCar = () => {
  return useContext(CarsStore);
};
