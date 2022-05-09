import React from "react";
import { Link } from "react-router-dom";

const HealthAndWellness = () => {
  const HealthAndWellness = [
    [
      {
        HealthSupplements: [
          "Multivitamins",
          "Calcium & Vitamin D",
          "Magnesium & Zinc",
          "Omega 3 & Fish Oil",
          "Immunity Boosters & Vitamin C",
          "Other Supplements",
        ],
        BeautySupplements: [
          "Collagen (Skin)",
          "Biotin (Hair)",
          "Vitamin E (Skin)",
          "Glutathione (Skin)",
          "Other Beauty Supplements",
        ],
      },
    ],
    [
      {
        SportsNutrition: [
          "Whey Protein",
          "Plant Protein",
          "BCAA & Other Muscle Support",
          "Protein & Energy Bars",
          "Protein Snacks",
        ],
        WeightManagement: [
          "Weight Gain",
          "Apple Cider Vinegar",
          "Green Tea",
          "Green Coffee",
          "Fat Burner",
          "Slimming Shakes & Juices",
          "Sugar Substitutes",
        ],
      },
    ],
    [
      {
        HealthFoods: [
          "Honey",
          "Dry Fruits, Nuts & Berries",
          "Edible Seeds",
          "Oils & Ghee",
          "Black Tea & Coffee",
          "Herbal Teas",
          "Health Drinks",
          "Breakfast Cereals",
          "Other Health Foods",
        ],
        WellnessEquipment: ["Weighing Scales", "Fitness", "Face Steamers"],
      },
    ],
    [
      {
        PainRelief: [
          "Muscles & Joints",
          "Ortho Oils",
          "Period Cramps",
          "Cough & Cold",
        ],
        SexualWellness: ["Condoms", "Lubricants", "Sexual Enhancers"],
        MedicalDevices: ["Oximeters"],
      },
    ],
    [
      {
        AyurvedaAndHerbs: [
          "Ashwagandha",
          "Neem (Blood Purifier)",
          "Amla (Immunity, Skin)",
          "Aloe Vera (Liver, Skin)",
          "Milk Thistle (Liver)",
          "Wheatgrass (Detox)",
          "Tulsi",
          "Giloy & Guduchi (Immunity)",
          "Turmeric (Anti Inflamatory)",
          "Spirulina & Moringa",
          "Chyavanprash",
          "Shilajit",
          "Other Herbal Supplements",
        ],
      },
    ],
    [
      {
        ShopByConcern: [
          "Diabetes",
          "Digestion (Gut Health)",
          "Organs - Liver, Heart, Kidney",
          "Safety & First Aid",
          "Weakness & Vitality",
          "Kids Nutrition",
          "Mental Wellness",
          "Blood Pressure",
          "Hormonal Balance",
          "Calm & Sleep",
        ],
      },
    ],
  ];
  return (
    <>
      {HealthAndWellness.map((d, i) => {
        return (
          <div>
            {Object.keys(HealthAndWellness[i][0]).map((key) => (
              <div>
                <b>{key}</b>
                {HealthAndWellness[i][0][key].map((el) => (
                  <Link to={"/dryfruits"} className='pro'>
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

export default HealthAndWellness;
