import React from "react";

const LocationCard = props => {
  const { name, type, dimension, residents } = props.location;

  return (
    <span className="location-card">
      <h1>{name}</h1>
      <p>{type}: {dimension}</p>
      {residents.map(resident => (
        <div key={resident} className="po-res">
          {resident}
        </div>
      ))}
    </span>
  );
};

export default LocationCard;