import React, { useContext } from "react";
import Card from "../components/Card";
import { AppContext } from "../context/AppContextInstance";

const Listings = () => {
  const { listings, mode } = useContext(AppContext);

  return (
    <div>
      <h1
        className={`px-6 text-3xl font-bold my-6 ${
          mode ? "text-black" : "text-white"
        }`}>
        Logements disponibles
      </h1>
      <div className=' p-6 flex flex-wrap gap-4'>
        {listings.map((listing) => (
          <Card key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
