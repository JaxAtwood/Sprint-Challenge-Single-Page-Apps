import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    
    axios
    .get("https://rickandmortyapi.com/api/episode/")
    .then(res => {
      console.log(res.data);
      setEpisodes(res.data.results);
    })
  }, []);

  return (
    <div className="episode-list grid-view">
    {episodes.map(show => {
      return (
        <EpisodeCard 
          key={show.id}
          id={show.id}
          name={show.name}
          air_date={show.air_date}
          episode={show.episode}
          characters={show.characters}
        />
      );
    })}
  </div>
)}

export default EpisodeList;