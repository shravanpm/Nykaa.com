import React from "react";
import { Link } from "react-router-dom";

const PersonalCare = () => {
  const PersonalCare = [
    [
      {
        BathAndShower: [
          "Shower Gels & Body Wash",
          "Scrubs & Exfoliants",
          "Soaps",
          "Bath Salts",
        ],

        Body: [
          "Lotions & Creams",
          "Talcum Powder",
          "Deodorants/Roll Ons",
          "Sunscreen",
        ],
      },
    ],
    [
      {
        HandsAndFeet: [
          "Handwash",
          "Hand Sanitizer",
          "Hand Creams",
          "Foot Care",
          "Tissue Boxes & Handkerchiefs",
        ],

        EyeCare: ["Contact Lenses", "Lens Solution & Accessories"],
      },
    ],
    [
      {
        FeminineHygiene: [
          "Sanitary Napkins",
          "Tampons",
          "Pantyliners",
          "Shaving & Hair Removal",
          "Intimate Hygiene",
          "Cotton Buds & Balls",
          "Menstrual Cups",
        ],

        ToolsAndAccessories: [
          "Manicure & Pedicure Kits",
          "Body Scrubbers & Brushes",
          "Loofahs & Sponges",
          "Shower Caps",
          "Miscellaneous",
        ],
      },
    ],
    [
      {
        MensGrooming: [
          "Shavers & Trimmers",
          "Razors & Catridges",
          "Shaving Cream, Foams & Gels",
          "Pre & Post Shaves",
          "Beard & Moustache Care",
          "Intimate Care",
        ],

        DentalCare: [
          "Toothpaste",
          "Manual Toothbrush",
          "Electric Toothbrush",
          "Floss & Tongue Cleaners",
          "Mouthwash",
          "Tooth Powder",
        ],
      },
    ],
    [
      {
        HomeAndHealth: [
          "Insect Repellents",
          "Pepper Spray",
          "Air Fresheners",
          "Toilet Seat Sanitizer",
          "Face Mask",
          "Gloves",
          "Others",
        ],

        TopBrands: [
          "Wanderlust",
          "Dove",
          "Gillette",
          "Pantene",
          "Palmolive",
          "Bella",
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
          "Routine Finder",
          "The Gift Store",
        ],

        TrendingSearches: [
          "Beard Oil",
          "Mosquito Repellent",
          "Menstrual Cup",
          "Hair Removal Cream",
          "Wax Strip",
        ],
      },
    ],
  ];
  return (
    <>
      {PersonalCare.map((d, i) => {
        return (
          <div>
            {Object.keys(PersonalCare[i][0]).map((key) => (
              <div>
                <b>{key}</b>
                {PersonalCare[i][0][key].map((el) => (
                  <Link to={"/productseyes"} className='pro'>
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

export default PersonalCare;
