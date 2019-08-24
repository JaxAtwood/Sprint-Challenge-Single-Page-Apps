import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";


// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const TabNav = () => {
    return (
        <div className="NavBar">
            <Menu>
            <Tab/>
            <Icon name="home" />
            <NavLink to="/">Home Page</NavLink>
            </Menu>

            <Menu>
            <Tab/>
            <Icon name="users" />
            <NavLink to="/characters">Characters</NavLink>
            </Menu>
            
            <Menu>
            <Tab/>
            <Icon name="map outline" />
            <NavLink to="/locations">Locations</NavLink>
            </Menu>
            
            <Menu>
            <Tab/>
            <Icon name="video" />
            <NavLink to="/episodes">Episodes</NavLink>
            </Menu>
        </div>
    );
};

export default TabNav;