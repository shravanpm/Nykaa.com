import React, { useState } from "react";
import "./navigation.css";
import offer_img from "../../Images/limited-time-offer.png";
import HoverTable from "./hoverTable";

const Navigation = () => {
  const [state, setState] = useState({
    show: false,
    value: "",
  });
  const navs = [
    "Makeup",
    "Skin",
    "Hair",
    "Appliances",
    "Personal Care",
    "Natural",
    "Mom&Baby",
    "Health&Wellness",
    "Men",
    "Fregrance",
    "LUXE",
  ];
  return (
    <div
      id='navigation'
      onMouseEnter={() => setState({ ...state, show: true })}
      onMouseLeave={() => setState({ ...state, show: false })}
    >
      <div className='nav_total'>
        <div className='nav_container'>
          <div className='nav_links'>
            {navs.map((nav) => (
              <div onMouseEnter={() => setState({ show: true, value: nav })}>
                <p>{nav}</p>
              </div>
            ))}
          </div>
          <div className='sale_sm_img'>
            <img src={offer_img} alt='' />
          </div>
        </div>
      </div>
      {state.show === true ? (
        <HoverTable
          onMouseEnter={() => setState({ ...state, show: true })}
          value={state.value}
        />
      ) : null}
    </div>
  );
};

export default Navigation;
