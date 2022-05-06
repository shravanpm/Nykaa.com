import React from 'react'

const MomAndBaby = () => {

    const MomAndBaby = [
      [
        {
          BabyCare: [
            "Body Wash & Soaps",
            "Baby Oil",
            "Hair Oil",
            "Lotions & Creams",
            "Baby Powder",
            "Shampoo & Conditioner",
            "Sunscreen",
            "Wipes & Buds",
            "Teeth & Dental Care",
            "Rash Cream",
            "Diapers",
            "Diaper Accessories",
            "Bath Accessories",
            "Baby Grooming",
            "Baby Bedding",
          ],
        },
      ],
      [
        {
          KidsCare: [
            "Nutritional Supplement",
            "Body Wash & Soaps",
            "Lotions & Creams",
            "Hair Care",
            "Sunscreen",
            "Dental Care",
            "Kids Makeup",
          ],
        },
      ],
      [
        {
          MaternityCare: [
            "Stretch Mark Creams & Oils",
            "Breast Firming Gels & Creams",
            "Nipple Creams",
            "Nutritional Supplements",
            "Maternity Pillows",
          ],
        },
      ],
      [
        {
          NursingAndFeeding: [
            "Feeding Bottle & Nipples",
            "Teethers & Soothers",
            "Breast Pumps",
            "Breast Pads",
            "Cleaning & Feeding Accessories",
            "Bibs",
            "Sippers & Cups",
          ],
        },
      ],
      [
        {
          HealthAndSafety: [
            "Nose & Ear Care",
            "Gripe Water & Tummy Roll On",
            "Detergents & Cleansers",
            "Handwash & Sanitizer",
            "Mosquito Repellent",
          ],
          MaternityWear: ["Maternity Bra", "Maternity Dress", "Maternity Tops"],
        },
      ],
      [
        {
          ShopByConcerns: [
            "Baby Dry Skin",
            "Cracked Nipple Cream",
            "Scalp Treatment",
            "Coconut Oil",
            "Almond Oil",
            "Heat Rash",
            "Body Toning & Firming",
            "Baby Skin Concerns",
          ],
        },
      ],
    ];
  return (
    <>
      {MomAndBaby.map((d, i) => {
        return (
          <div>
            {Object.keys(MomAndBaby[i][0]).map((key) => (
              <div>
                <b>{key}</b>
                {MomAndBaby[i][0][key].map((el) => (
                  <p>{el}</p>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}

export default MomAndBaby