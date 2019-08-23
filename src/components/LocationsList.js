import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import { Link } from "react-router-dom";

const LocationsList = () => {
    const [locations, setLocations] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
      const getLocations = () => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(res => {
            console.log(res.data);
            setLocations(res.data.results);
        });
  }

  getLocations();
 }, []);
  
  return (
    <section className="location-list">
      {locations.map(location => {
        <Link to={`/location/${location.info}`}>
            <LocationCard key={location.info} location={location} />
        </Link>
      })};
    </section>
    );
}

export default LocationsList;