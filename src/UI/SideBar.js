import React from "react";
import { slide as Menu } from "react-burger-menu";
import './SideBar.css'

export default props => {
    return (
      // Pass on our props
      <Menu {...props}>
  
        <a className="menu-item" href="/">
          Main Page
        </a>
  
        <a className="menu-item" href="/products/all">
          All products
        </a>
  
        <a className="menu-item" href="/sales">
          All sales
        </a>
      </Menu>
    );
  };
  