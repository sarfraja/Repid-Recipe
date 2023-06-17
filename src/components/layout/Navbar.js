import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";


function Navbar() {
  return (
    <Menu borderless fixed="top">
      <Menu.Item>
        <Menu.Header style={{ marginRight: "25px" }}>
         <h1>Repid <span style={{color:"red"}}>Recipe</span></h1>
        </Menu.Header>
      </Menu.Item>
      <Menu.Item as={Link} to="/" content="Home" />
      <Menu.Item as={NavLink} to="/recipes" content="Recipes" />
    </Menu>
  );
}
export default Navbar;
