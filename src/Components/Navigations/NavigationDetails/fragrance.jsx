import React from "react";

const Fragrance = () => {
  const Fragrance = [
    [
      {
        WomensFragrance: [
          "Perfumes (EDT / EDP)",
          "Body Mists / Sprays",
          "Deodorants / Roll-Ons",
        ],
        MensFragrance: [
          "Perfumes (EDT / EDP)",
          "Body Mists / Sprays",
          "Deodorants / Roll-Ons",
          "Colognes & After Shaves",
        ],
      },
    ],
    [
      {
        ShopByFragrance: [
          "Earthy & Woody",
          "Floral",
          "Fresh & Aquatic",
          "Spicy & Warm",
          "Oud Collection",
          "Fruity",
        ],
      },
    ],
    [
      {
        TopBrands: [
          "Nykaa Cosmetics",
          "Masaba By Nykaa",
          "Dior",
          "Gucci",
          "Calvin Klein",
          "Davidoff",
          "Hermes",
          "Bvlgari",
          "Versace",
          "Skinn By Titan",
          "Paco Rabanne",
          "Giorgio Armani",
        ],
      },
    ],
    [
      {
        PremiumBrands: [
          "Explore All",
          "Dior",
          "Hermès",
          "Jo Malone London",
          "Guerlain",
          "BVLGARI",
          "Salvatore Ferragamo",
          "Calvin Klein",
          "Giorgio Armani",
          "Davidoff",
          "Paco Rabanne",
          "Carolina Herrera",
        ],
      },
    ],
    [
      {
        DesignerBrands: [
          "Yves Saint Laurent",
          "Elie Saab",
          "Dolce & Gabbana",
          "Narciso Rodrigue",
          "Hugo Boss",
          "Montblanc",
        ],
      },
    ],
    [
      {
        QuickLinks: [
          "Combos @ Nykaa",
          "New Launches",
          "NFBA Nominees 2020",
          "Help Me Choose - Fragrance Finder",
          "Gifts @ Nykaa",
          "The Gift Store",
        ],
      },
    ],
  ];
  return (
    <>
      {Fragrance.map((d, i) => {
        return (
          <div>
            {Object.keys(Fragrance[i][0]).map((key) => (
              <div>
                <b>{key}</b>
                {Fragrance[i][0][key].map((el) => (
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

export default Fragrance;
