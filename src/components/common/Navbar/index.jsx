import React, { useState } from "react";
// import {Menu} from "../Menu";
import { NavLink } from "react-router-dom";
// import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as CloseMenu } from "../../../assets/x.svg";

import { ReactComponent as MenuIcon } from "../../../assets/menu.svg";
import "./index.css";
import { menuItemsData } from "../../../Services/data";

function Navbar({items, setItems}) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
// it is working nowok good ab next 
  const onSearch = () => {
    // resetting items it no search
    if(!value) return setItems(menuItemsData);

    const newItems = items?.filter((x)=>x?.name?.split(' ')?.join('')?.toLowerCase()?.includes(value?.split(' ')?.join('')?.toLocaleLowerCase()))

    setItems(newItems);
  };
  return (
    <>
      <div className="header">
        <div className="logo-nav w-full">
          <div className="logo-container"></div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/" className="text-xl">
                Home
              </NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/cart" className="text-xl">
                Cart
              </NavLink>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={value}
              onChange={onChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 "
              onClick={() => onSearch()}
            >
              Search
            </button>
            <div className="dropdown">
              {menuItemsData && menuItemsData
                .filter((item) => {
                  const searchTerm = value.toLowerCase();
                  const name = item.name.toLowerCase();
                  return (
                    searchTerm &&
                    name.startsWith(searchTerm) &&
                    name !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch(item.name)}
                    className="dropdown-row"
                    key={item.name}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
