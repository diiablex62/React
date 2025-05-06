import React, { useState } from "react";

const Card = ({ listing }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!listing) {
    return <div>Erreur : Aucunes données disponibles</div>;
  }

  return (
    <>
      <div
        className='bg-white shadow-lg rounded-xl p-4 w-64 cursor-pointer'
        onClick={openModal}>
        <img
          src={listing.image}
          alt={listing.title}
          className='w-full h-40 object-cover rounded-lg'
        />
        <h3 className='text-lg font-semibold mt-2'>{listing.title}</h3>
        <p className='text-gray-500'>{listing.location}</p>
        <p className='text-red-500 font-bold mt-1'>{listing.price} € / nuit</p>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative'>
            <button
              className='absolute top-2 right-2 text-black-500 hover:text-black'
              onClick={closeModal}>
              ✖
            </button>
            <img
              src={listing.image}
              alt={listing.title}
              className='w-full h-64 object-cover rounded-lg mb-4'
            />
            <h3 className='text-2xl font-bold mb-2'>{listing.title}</h3>
            <p className='text-gray-700 mb-2'>{listing.location}</p>
            <p className='text-red-500 font-bold mb-4'>
              {listing.price} € / nuit
            </p>
            <p className='text-gray-600'>
              {listing.description || "Aucune description disponible."}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
