import React from "react";

const Hair = () => {
  const Hair = [
    [
      {
        HairCare: [
          "Nutritional Supplements",
          "Shampoo",
          "Dry Shampoo NEW",
          "Conditioner",
          "Hair Oil",
          "Hair Serum",
          "Hair Creams & Masks",
        ],
      },
    ],
    [
      {
        ToolsAndAccessories: [
          "Hair Brushes",
          "Hair Combs",
          "Dryers & Stylers",
          "Straighteners",
          "Rollers & Curlers",
          "Hair Extensions",
          "Hair Accessories",
        ],
      },
    ],
    [
      {
        HairStyling: ["Hair Color", "Hair Spray", "Gels & Waxes"],

        ShopByHairType: ["Straight", "Curly & Wavy", "Professional Brands"],
      },
    ],
    [
      {
        ShopByConcern: [
          "Hairfall & Thinning",
          "Dandruff",
          "Dry & Frizzy Hair",
          "Split Ends",
          "Color Protection",
        ],

        TrendingSearches: [
          "Hair Growth Oil",
          "Dandruff Shampoo",
          "Castor Oil For Hair",
          "Sulphate Free Shampoo",
          "Hair Straightener Brush",
        ],
      },
    ],
    [
      {
        TopBrands: [
          "Nykaa Naturals",
          "L'Oreal Paris",
          "Wella Professionals",
          "L'Oreal Professionnel",
          "BBlunt",
          "Herbal Essences",
          "Schwarzkopf Professional",
        ],
      },
    ],
    [
      {
        QuickLinks: [
          "Combos @ Nykaa",
          "New Launches",
          "NFBA Nominees 2020",
          "Herbal Hair Care",
          "Routine Finder",
          "The Beauty Ingredient Edit",
          "The Safe Beauty Edit",
          "The Gift Store",
        ],
      },
    ],
  ];
  return (
    <>
      {Hair.map((d, i) => {
        return (
          <div>
            {Object.keys(Hair[i][0]).map((key) => (
              <div>
                <b>{key}</b>
                {Hair[i][0][key].map((el) => (
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

export default Hair;
