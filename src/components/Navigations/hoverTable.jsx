import React from "react";
import Appliances from "./NavigationDetails/appliances";
import Fragrance from "./NavigationDetails/fragrance";
import Hair from "./NavigationDetails/hair";
import HealthAndWellness from "./NavigationDetails/healthAndWellness";
import Luxe from "./NavigationDetails/luxe";
import Makeup from "./navigationDetails/makeup";
import Men from "./NavigationDetails/men";
import MomAndBaby from "./NavigationDetails/momAndBaby";
import Natural from "./NavigationDetails/natural";
import PersonalCare from "./NavigationDetails/personalCare";
import Skin from "./NavigationDetails/skin";

const HoverTable = ({ value }) => {
  return (
    <div className='hover-table-container'>
      {value == "Makeup" ? (
        <Makeup />
      ) : value == "Skin" ? (
        <Skin />
      ) : value == "Hair" ? (
        <Hair />
      ) : value == "Appliances" ? (
        <Appliances />
      ) : value == "Personal Care" ? (
        <PersonalCare />
      ) : value == "Natural" ? (
        <Natural />
      ) : value == "Mom&Baby" ? (
        <MomAndBaby />
      ) : value == "Health&Wellness" ? (
        <HealthAndWellness />
      ) : value == "Men" ? (
        <Men />
      ) : value == "Fregrance" ? (
        <Fragrance />
      ) : value == "LUXE" ? (
        <Luxe />
      ) : null}
    </div>
  );
};

export default HoverTable;
