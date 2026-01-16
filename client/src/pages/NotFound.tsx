import React from "react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">404 - Not Found</h1>
        <button
          onClick={() => navigate(-1)}
          className="p-3 text-lg  cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
