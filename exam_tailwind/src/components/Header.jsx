import React from "react";

export default function Header() {
  return (
    <header className='bg-white py-4 px-6 flex justify-between items-center shadow-md shadow-gray-300'>
      <div className='text-xl font-bold text-red-500'>Airbed & Breakfast</div>

      {/* Icon hamburger en mobile */}
      <div className='md:hidden'>
        <button className='text-gray-500 focus:outline-none'>
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </button>
      </div>

      {/* navigation desktop */}
      <nav className={`hidden md:block`}>
        <ul className='flex space-x-4'>
          <li className='text-gray-700 hover:text-black'>
            <a href='#'>Maisons</a>
          </li>
          <li className='text-gray-700 hover:text-black'>
            <a href='#'>Appartement</a>
          </li>
          <li className='text-gray-700 hover:text-black'>
            <a href='#'>Villas</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
