import { Link } from "react-router";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-2 md:py-3 md:px-12">
      <h1 className="text-3xl hidden md:flex font-bold underline">
        Welcome to Fyl.io Demo App
      </h1>
      <nav className="flex justify-center items-center gap-3">
        <Link to="/" className=" text-blue-500 hover:underline">
          Home
        </Link>
        <Link to="/all-cars" className="text-blue-500 hover:underline">
          All Cars
        </Link>
        <Link
          to="/add-car"
          className="text-white px-3 py-1 rounded-md bg-amber-800 cursor-pointer hover:bg-amber-600"
        >
          Add Car
        </Link>
      </nav>
    </div>
  );
}
