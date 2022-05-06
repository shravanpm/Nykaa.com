import React from "react";

const Luxe = () => {
  const LUXE = [
    [
      {
        Face: [
          "Primer",
          "Corrector & Concealer",
          "Foundation",
          "Compact",
          "Loose Powder",
          "Blush",
          "Bronzer",
          "Highlighter",
          "Tinted Moisturizer",
          "BB & CC Cream",
          "Makeup Remover",
          "Contouring",
          "Customize Your Palette",
          "Setting Spray",
        ],
      },
    ],
    [
      {
        EYES: [
          "Eyeliner & Kajal",
          "Mascara",
          "Eye Shadow",
          "Brows",
          "Lashes",
          "Eye Primer",
          "Corrector & Concealer",
          "Customize Your Palette",
        ],
      },
    ],
    [
      {
        Lips: [
          "Lipstick",
          "Liquid Lipstick",
          "Lip Gloss",
          "Lip Liner",
          "Lip Balm",
        ],
      },
    ],
    [
      {
        Nails: ["Nail Polish", "Nail Care", "Nail Polish Remover"],
        Palettes: ["Eye Palette", "Face Palette", "Customize Your Palette"],
        ToolsAndBrushes: [
          "Face Brush",
          "Eye Brush",
          "Lip Brush",
          "Applicators",
        ],
      },
    ],
    [
      {
        Face: [
          "Face Wash & Cleansers",
          "Toner",
          "Exfoliators",
          "Serum",
          "Moisturisers",
          "Day Cream",
          "Night Cream",
          "Masks",
          "Sunscreen",
          "Face Mist",
          "Makeup Remover",
          "Tools & Appliances",
        ],
      },
    ],
    [
      {
        Eyecare: ["Eye Cream", "Serum", "Dark Circles"],
        ShopByConcern: [
          "Anti-Blemish",
          "Brightening",
          "Pigmentation",
          "Oil Control",
          "Dryness",
          "Anti-Ageing",
          "Perfumes (EDP/EDT)",
          "Deodorants",
          "Colognes",
        ],
      },
    ],
  ];

  return (
    <>
      {LUXE.map((d, i) => {
        return (
          <div>
            {Object.keys(LUXE[i][0]).map((key) => (
              <div>
                <b>{key}</b>
                {LUXE[i][0][key].map((el) => (
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

export default Luxe;
