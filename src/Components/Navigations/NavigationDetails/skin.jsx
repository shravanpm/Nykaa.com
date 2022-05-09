import React from "react";
import { Link } from 'react-router-dom';

const Skin = () => {
  const Skin = [
    [
      {
        Cleansers: [
          "Facewash",
          "Cleanser",
          "Scrubs & Exfoliators",
          "Facial Wipes",
          "Makeup Remover",
        ],

        Toners: ["Toners & Mists"],

        TrendingSearches: [
          "Toners Under 1000",
          "Face Wash For Oily Skin",
          "Oil Free Face Moisturizers",
          "Lip Balm Under 500",
          "Vitamin C Serum",
        ],
      },
    ],
    [
      {
        Moisturizers: [
          "Face Moisturizer & Day Cream",
          "Night Cream",
          "Face Oils",
          "Serums & Essence",
          "BB & CC Creams",
        ],

        Masks: ["Masks & Peels", "Sheet Masks"],

        KitsCombos: [
          "Facial Kits",
          "Combos @ Nykaa",
          "Gift Sets",
        ],
      },
    ],
    [
      {
        EyeCare: [
          "Under Eye Cream & Serums",
          "Dark Circles & Wrinkles",
          "Puffiness",
          "Eye Masks",
          "Eye Makeup Remover",
        ],

        LipCare: ["Lip Balm", "Lip Scrubs", "Lip Masks"],

        SkinSupplements: [
          "Vitamins & Minerals",
          "Ayurvedic Herbs",
        ],
      },
    ],
    [
      {
        BodyCare: [
          "Body Butter",
          "Lotions & Creams",
          "Massage Oils",
          "Anti-Stretch Mark Creams",
          "Anti-Cellulite Creams",
          "Bath Salts",
          "Shower Gels & Body Wash",
          "Bath Scrubs",
          "Soaps",
        ],

        SunCare: [
          "Face Sunscreen",
          "Body Sunscreen",
          "Neck Creams",
        ],
      },
    ],
    [
      {
        HandsAndFeet: [
          "Hand Creams",
          "Foot Creams",
          "Hand & Foot Masks",
        ],

        TopBrands: [
          "NYKAA SKINRX",
          "Innisfree",
          "L'oreal Paris",
          "Nykaa Naturals",
          "Neutrogena",
          "The Face Shop",
          "Nivea",
          "Mamaearth",
          "Plum",
        ],
      },
    ],
    [
      {
        ShopByConcern: [
          "Skin Brightening",
          "Acne Treatment",
          "Dull Skin Treatment",
          "Pigmentation",
          "Anti Ageing",
          "Tan Removal",
          "Face Treatment",
          "Pore Care",
          "Sun Protection",
          "Skin Dryness",
          "Oil Control",
        ],
      },
    ],
  ];
  return (
    <>
      {Skin.map((d, i) => {
        return (
          <div>
            {Object.keys(Skin[i][0]).map((key) => (
              <div>
                <b>{key}</b>
                {Skin[i][0][key].map((el) => (
                  <Link to={"/cleansers"} className="pro">
                    <p >{el}</p>
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

export default Skin;
