import React from "react";
import { Link } from "react-router-dom";

const Makeup = () => {
  const Makeup = [
    [
      {
        Face: [
          "Face Primer",
          "Concealer",
          "Foundation",
          "Compact",
          "Contour",
          "Loose Powder",
          "Blush",
          "Bronzer",
          "BB & CC Cream",
          "Highlighters",
          "Setting Spray",
          "Makeup Remover",
          "Sindoor",
        ],
      },
    ],
    [
      {
        Eyes: [
          "Kajal",
          "Eyeliner",
          "Mascara",
          "Eye Shadow",
          "Eye Brow Enhancers",
          "Eye Primer",
          "False Eyelashes",
          "Eye Makeup Remover",
          "Under Eye Concealer",
          "Contact Lenses",
        ],
        Makeup: [
          "Kits",
          "Eye Palettes",
          "Face Palettes",
          "Customize Your Palette",
        ],
      },
    ],
    [
      {
        Lips: [
          "Lipstick",
          "Liquid Lipstick",
          "Lip Crayon",
          "Lip Gloss",
          "Lip Liner",
          "Lip Plumper",
          "Lip Stain",
          "Lip Balm",
        ],
        Nails: [
          "Nail Polish",
          "Nail Art Kits",
          "Nail Polish Sets",
          "Nail Care",
          "Nail Polish Remover",
          "Manicure & Pedicure Kits",
        ],
      },
    ],
    [
      {
        ToolsAndBrushes: [
          "Face Brush",
          "Blush Brush",
          "Eye Brush",
          "Lip Brush",
          "Brush Sets",
          "Sponges & Applicators",
          "Eyelash Curlers",
          "Tweezers",
          "Sharpeners",
          "Mirrors",
          "Makeup Pouches",
        ],
      },
    ],
    [
      {
        TopBrands: [
          "Kay Beauty",
          "Huda Beauty",
          "Charlotte Tilbury",
          "M.A.C",
          "Maybelline New York",
          "L'Oreal Paris",
          "Lakme",
          "Nykaa Cosmetics",
          "Nyx Pro.Makeup",
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
          "The Gift Store",
        ],
        TrendingSearches: [
          "Nude Lipstick",
          "Matte Lipstick",
          "Red Lipstick",
          "Pink Lipstick",
        ],
      },
    ],
  ];

  return (
    <>
      {Makeup.map((d, i) => {
        return (
          <div>
            {Object.keys(Makeup[i][0]).map((key) => (
              <div>
                <b>{key}</b>
                {Makeup[i][0][key].map((el) => (
                  <Link to={"/faceprime"} className='pro'>
                    <p>{el}</p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Makeup;
