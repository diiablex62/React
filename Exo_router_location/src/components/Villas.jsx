import React from "react";
import { Link, Outlet } from "react-router-dom";

const Villas = () => {
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-6'>Villas</h1>
      <div className='flex items-center space-x-4 mb-6'>
        <span className='text-xl font-semibold'>Filtrer par :</span>
        <Link to='duplex' className='text-blue-500 hover:underline'>
          Duplex
        </Link>
        <Link to='studio' className='text-blue-500 hover:underline'>
          Studio
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Villas;
