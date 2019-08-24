import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

const LocationsList = () => {
    const [locations, setLocations] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(res => {
            console.log(res.data);
            setLocations(res.data.results);
        });
  }, []);

  return (
    <div className="locations-list grid-view">
      {locations.map(place => {
        return (
          <LocationCard 
            key={place.id}
            id={place.id}
            name={place.name}
            type={place.type}
            dimension={place.dimension}
            residents={place.residents}
          />
        );
      })}
    </div>
  )}

export default LocationsList;