import React from "react";
import listeMaison from "./Liste_maison";

export default function Image_logement() {
  return (
    <div className='ml-6 mt-6'>
      <h1 className='text-2xl font-bold'>Logements disponibles</h1>
      <div className='flex flex-row overflow-x-auto gap-6 mt-6 p-4'>
        {listeMaison.map((listing) => (
          <div
            key={listing.id}
            className='bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-64'>
            <img
              src={listing.image}
              alt={listing.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h2 className='font-bold text-lg'>{listing.title}</h2>
              <p className='text-gray-600'>{listing.location}</p>
              <p className='mt-2 text-red-500 font-semibold'>
                {listing.price}€ / nuit
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
