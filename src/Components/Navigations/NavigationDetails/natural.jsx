import React from "react";

const Natural = () => {
  const Natural = [
    [
      {
        Skin: [
          "Face Wash",
          "Cleanser",
          "Moisturizer",
          "Face Cream",
          "Face Mist",
          "Facial Kits",
          "Toner",
          "Face Oils",
          "Sunscreen",
          "Night Cream",
          "Day Cream",
          "Under Eye Care",
          "Face Bleach",
          "Serums",
        ],
      },
    ],
    [
      {
        Skin: [
          "Sheet Masks",
          "Masks & Peels",
          "Scrubs & Exfoliators",
          "Face Tools",
          "Face Gel",
          "Lip Scrub",
        ],

        BodyCare: [
          "Shower Gels & Body Wash",
          "Soaps",
          "Body Lotions",
          "Body Scrubs",
          "Bath Salts & Bath Bombs",
          "Hands & Feet Care",
          "Bath Tools & Accessories",
          "Oral Care",
        ],
      },
    ],
    [
      {
        Hair: [
          "Shampoo & Cleanser",
          "Conditioner",
          "Hair Masks",
          "Hair Oil",
          "Hair Serum",
          "Hair Color",
          "Tools & Accessories",
        ],

        Aromatherapy: [
          "Massage Oils",
          "Carrier Oils",
          "Essential Oils",
          "Candles",
          "Diffuser",
          "Incense Sticks",
        ],
      },
    ],
    [
      {
        Makeup: [
          "Lipstick",
          "Kajal",
          "Eyeliner",
          "Mascara",
          "Nail Polish",
          "Lip Balm & Gloss",
          "Foundation & Concealer",
          "Blush & Highlighter",
          "Makeup Remover",
          "Tools & Brushes",
        ],
        TrendingSearch: [
          "Tea Tree Oil",
          "Eucalyptus Oil",
          "Rosemary Oil",
          "Jojoba Oil",
        ],
      },
    ],
    [
      {
        TopBrands: [
          "Biotique",
          "Lotus Herbals",
          "The Body Shop",
          "Nykaa Naturals",
          "Kama Ayurveda",
          "Forest Essentials",
          "Khadi Natural",
          "Himalaya",
          "VLCC",
          "Baby Care",
        ],
        TypesOfSkin: [
          "Dry Skin",
          "Normal Skin",
          "Oily Skin",
          "Combination Skin",
        ],
      },
    ],
    [
      {
        ShopByConcern: [
          "Tan Removal",
          "Pigmentation",
          "Acne Treatment",
          "Skin Lightening",
          "Anti Aging",
          "Dark Circles",
          "Hairfall",
          "Dandruff",
          "Dry & Frizzy Hair",
        ],

        QUICKLINKS: [
          "New Launches",
          "Combos @ Nykaa",
          "Gifts @ Nykaa",
          "The Safe (And Clean) Beauty Edit",
        ],
      },
    ],
  ];
  return (
    <>
      {Natural.map((d, i) => {
        return (
          <div>
            {Object.keys(Natural[i][0]).map((key) => (
              <div>
                <b>{key}</b>
                {Natural[i][0][key].map((el) => (
                  <p>{el}</p>
                ))}
              </div>
            ))}
          </div>
        );
      })}
      );
    </>
  );
};

export default Natural;
