import React from "react";

const Men = () => {
  const Men = [
    [
      {
        Shaving: [
          "Razors & Cartridges",
          "Shavers",
          "Trimmers",
          "Shaving Creams",
          "Shaving Foams",
          "Shaving Gels",
          "Pre & Post Shaves",
          "Aftershave Lotion",
          "Shaving Brushes",
        ],
      },
    ],
    [
      {
        BeardCare: [
          "Beard Oil",
          "Beard Butter",
          "Beard Softener",
          "Beard Wash",
          "Beard Wax",
          "Moustache Oil",
          "Beard Comb",
          "Moustache Wax",
          "Beard Gel",
          "Beard Balm",
          "Beard Cream",
          "Beard Serum",
          "Beard Mist",
          "Beard Colour",
          "Beard Shampoo",
        ],
      },
    ],
    [
      {
        HairCare: [
          "Shampoo",
          "Conditioner",
          "Hair Styling",
          "Hair Color",
          "Hair Oils",
          "Professional Products",
        ],
        SkinCare: [
          "Face Wash",
          "Moisturizers",
          "Sunscreen",
          "Masks & Peels",
          "Scrubs & Exfoliators",
          "Fairness",
        ],
      },
    ],
    [
      {
        BathAndBody: [
          "Bath/Shower Gels",
          "Soaps",
          "Body Scrubs",
          "Talc",
          "Dental Care",
          "Body Lotions",
          "Intimate Care",
        ],
        Fragrance: [
          "Deodorants/Roll Ons",
          "Colognes & Perfumes (EDT & EDP)",
          "Luxe Fragrances",
        ],
      },
    ],
    [
      {
        ShopByConcern: [
          "Anti Dandruff",
          "Anti Hairfall",
          "Scalp Treatment",
          "Anti Acne",
          "Anti Ageing",
        ],
        Wellness: [
          "Sexual Wellness",
          "Health Supplements",
          "Weight Management",
          "Sports Nutrition",
        ],
      },
    ],
    [
      {
        TopBrands: ["Beardo", "Gilette", "Livon", "Nivea", "Park Avenue"],
        QuickLinks: [
          "Combos @ Nykaa",
          "New Launches",
          "Gifts @ Nykaa",
          "Routine Finder",
          "The Gift Store",
        ],
      },
    ],
  ];
  return (
    <>
      {Men.map((d, i) => {
        return (
          <div>
            {Object.keys(Men[i][0]).map((key) => (
              <div>
                <b>{key}</b>
                {Men[i][0][key].map((el) => (
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

export default Men;
