const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3003;

// Middleware to parse JSON
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
// In-memory cars array
let cars = [];
let nextId = 1;

// GET all cars
app.get("/cars", (req, res) => {
  res.json(cars);
});

// GET car by ID
app.get("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }

  res.json(car);
});

// POST new car
app.post("/cars", (req, res) => {
  const { brand, model, year } = req.body;

  if (!brand || !model || !year) {
    return res
      .status(400)
      .json({ message: "brand, model, and year are required" });
  }

  const newCar = {
    id: nextId++,
    brand,
    model,
    year,
  };

  cars.push(newCar);
  res.status(201).json(newCar);
});

// UPDATE car by ID
app.put("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }

  const { brand, model, year } = req.body;

  if (brand !== undefined) car.brand = brand;
  if (model !== undefined) car.model = model;
  if (year !== undefined) car.year = year;

  res.json(car);
});

// DELETE car by ID
app.delete("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = cars.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Car not found" });
  }

  const deletedCar = cars.splice(index, 1);
  res.json(deletedCar[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
