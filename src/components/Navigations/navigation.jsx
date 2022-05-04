import React, { useState } from "react";
import "./navigation.css";
import offer_img from "../../Images/limited-time-offer.png";
import HoverTable from "./hoverTable";

const Navigation = () => {
  const [state, setState] = useState(false);

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
    <div id='navigation'>
      <div className='nav_total'>
        <div className='nav_container'>
          <div className='nav_links'>
            {navs.map((nav) => (
              <div
                onMouseEnter={() => setState(true)}
                onMouseLeave={() => setState(false)}
              >
                <p>{nav}</p>
              </div>
            ))}
          </div>
          <div className='sale_sm_img'>
            <img src={offer_img} alt='' />
          </div>
        </div>
      </div>
      {state === true ? <HoverTable /> : null}
      <div className='poster'>
        <img
          src='https://images-static.nykaa.com/uploads/d79ef179-462b-4774-b1c6-845855e2c487.gif?tr=w-1200,cm-pad_resize'
          alt='test'
          loading='eager'
          srcset='https://images-static.nykaa.com/uploads/d79ef179-462b-4774-b1c6-845855e2c487.gif?tr=w-2400,cm-pad_resize 2x'
        ></img>
      </div>
    </div>
  );
};

export default Navigation;
