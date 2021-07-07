import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";


// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const TabNav = () => {
    return (
        <div className="NavBar">
            <Menu>
            <Menu.Item>
            <Icon name="home" />
            <NavLink to="/">Home Page</NavLink>   
            </Menu.Item>
            
            <Menu.Item>
            <Icon name="users" />
            <NavLink to="/characters">Characters</NavLink>
            </Menu.Item>
            
            <Menu.Item>
            <Icon name="map outline" />
            <NavLink to="/locations">Locations</NavLink>
            </Menu.Item>
  
            <Menu.Item>
            <Icon name="video" />
            <NavLink to="/episodes">Episodes</NavLink>
            </Menu.Item>

            </Menu>
        </div>
    );
};

export default TabNav;