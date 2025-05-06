import React, { useContext } from "react";
import { AppContext } from "../context/AppContextInstance";
import { Link, Outlet } from "react-router-dom";

const Maisons = () => {
  const { mode } = useContext(AppContext);

  return (
    <div className='p-6'>
      <h1
        className={`text-3xl font-bold mb-6 ${
          mode ? "text-black" : "text-white"
        }`}>
        Maisons
      </h1>
      <div className='flex items-center space-x-4 mb-6'>
        <span
          className={`text-xl font-semibold ${
            mode ? "text-black" : "text-white"
          }`}>
          Filtrer par :
        </span>
        <Link
          to='duplex'
          className={`hover:underline ${
            mode ? "text-blue-500" : "text-white"
          }`}>
          Duplex
        </Link>
        <Link
          to='studio'
          className={`hover:underline ${
            mode ? "text-blue-500" : "text-white"
          }`}>
          Studio
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Maisons;
