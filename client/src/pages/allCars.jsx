import React from "react";
import { useCar } from "../context/store_cars";

export default function AllCars() {
  const { cars } = useCar();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
        All Cars
      </h1>

      {cars.length === 0 ? (
        <p className="text-center text-gray-500">
          No cars available. Add some!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              <h2 className="text-xl font-semibold mb-2">
                {car.brand} {car.model}
              </h2>
              <p className="text-gray-600">Year: {car.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
