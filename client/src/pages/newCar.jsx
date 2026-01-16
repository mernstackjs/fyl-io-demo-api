import React from "react";
import { useCar } from "../context/store_cars";
import { useNavigate } from "react-router";

export default function NewCar() {
  const { cars, addCar } = useCar();
  const navigate = useNavigate();

  const addNewCar = async (e) => {
    e.preventDefault(); // <-- fixed typo
    const formData = new FormData(e.target);
    const brand = formData.get("brand");
    const model = formData.get("model");
    const year = formData.get("year");

    const car = {
      brand,
      model,
      year: parseInt(year),
    };

    await addCar(car); // make sure addCar is async
    navigate("/all-cars");

    e.target.reset();
  };

  console.log(cars);

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={addNewCar} className="border p-3 rounded-lg">
        <h1 className="text-xl font-bold mb-3">Add New Car</h1>

        <input
          className="p-2 border w-full rounded-md mb-2"
          name="brand"
          placeholder="Brand"
          required
        />
        <input
          className="p-2 border w-full rounded-md mb-2"
          name="model"
          placeholder="Model"
          required
        />
        <input
          className="p-2 border w-full rounded-md mb-2"
          name="year"
          placeholder="Year"
          type="number"
          required
        />

        <button
          type="submit"
          className="mt-2 w-full bg-blue-900 text-white p-2 rounded-md cursor-pointer"
        >
          Add Car
        </button>
      </form>
    </div>
  );
}
