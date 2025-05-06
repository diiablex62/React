import React, { useContext } from "react";
import { AppContext } from "../context/AppContextInstance";
import Card from "./Card";

const Studio = () => {
  const { listings } = useContext(AppContext);

  const studios = listings.filter((listing) => listing.type === "Studio");

  return (
    <div>
      <div className='flex flex-wrap gap-4'>
        {studios.map((studio) => (
          <Card key={studio.id} listing={studio} />
        ))}
      </div>
    </div>
  );
};

export default Studio;
