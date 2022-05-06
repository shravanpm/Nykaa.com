import React from "react";

const Appliances = () => {
  const Appliances = [
    [
      {
        HairStylingTools: [
          "Hair Dryers",
          "Straighteners",
          "Curling Iron/Stylers",
          "Multi Stylers",
        ],
      },
    ],
    [
      {
        HairRemovalTools: [
          "Epilators",
          "Body Groomers",
          "Bikini Trimmers",
        ],
      },
    ],
    [
      {
        ShavingTools: ["Shavers", "Trimmers"],
      },
    ],
    [
      {
        FaceOrSkinTools: [
          "Face Epilator",
          "Dermarollers",
          "Cleansing Brushes",
          "Acne Removal",
        ],

        MassageTools: ["Massage Tools", "Massagers"],
      },
    ],
    [
      {
        TopBrands: [
          "Philips",
          "Alan Truman",
          "Dyson",
          "VEGA",
          "Braun",
          "Ikonic Professional",
          "Nova",
          "Flawless",
        ],
      },
    ],
    [
      {
        QuickLinks: [
          "Combos @ Nykaa",
          "New Launches",
          "NFBA Nominees 2020",
          "Gifts @ Nykaa",
          "Herbal Hair Care",
          "Routine Finder",
        ],
      },
    ],
  ];

  
  return (
    <>
      {Appliances.map((d, i) => {
        return (
          <div>
            {Object.keys(Appliances[i][0]).map((key) => (
              <div>
                <b>{key}</b>
                {Appliances[i][0][key].map((el) => (
                  <p>{el}</p>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Appliances;
