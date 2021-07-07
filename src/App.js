import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header";

import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";


const App = () => {
  return (
    <main>
      <Header />
      <TabNav />
        <Route exact path="/" component={WelcomePage}/>
        <Route exact path="/characters" component={CharacterList}/>
        <Route exact path="/locations" component={LocationsList}/>
        <Route exact path="/episodes" component={EpisodeList}/>
    </main>
  );
}

export default App;