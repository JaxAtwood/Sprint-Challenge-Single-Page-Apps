import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";


const App = () => {
  return (
    <main>
      <Header />
      <TabNav>
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/characters" component={CharacterList}/>
        <Route path="/locations" component={LocationsList}/>
        <Route path="/episodes" component={EpisodeList}/>
      </TabNav>
    <WelcomePage />
    </main>
  );
}

export default App;