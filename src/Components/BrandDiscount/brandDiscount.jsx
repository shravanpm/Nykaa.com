import React from "react";
import "./brandDiscount.css";

const BrandDiscount = () => {
  const BrandDiscountData = [
    {
      name: "Maybelline",
      image:
        "https://images-static.nykaa.com/uploads/48856c48-e34f-4684-bb57-f2670ebbdcd2.jpg?tr=w-400,cm-pad_resize",
      line1: "Great Deals On Combos",
      line2: "Combos Starting At ₹290",
    },
    {
      name: "Lackme",
      image:
        "https://images-static.nykaa.com/uploads/27014577-4f80-4d0a-8d87-62c8b007cda2.jpg?tr=w-400,cm-pad_resize",
      line1: "Free Lipstick On ₹799",
      line2: "Free Face Primer On ₹999",
    },
    {
      name: "Mac",
      image:
        "https://images-static.nykaa.com/uploads/8e4e09ce-ed6c-4ae9-8d46-ad4d24985da7.jpg?tr=w-400,cm-pad_resize",
      line1: "Free Highlighter Worth ₹3200 On ₹3500+",
      line2: "Extra 10% Off On ₹5000+",
    },
    {
      name: "Nykaa",
      image:
        "https://images-static.nykaa.com/uploads/94ab236c-b899-460f-882c-9e60d125cd00.jpg?tr=w-400,cm-pad_resize",
      line1: "Free Lipstick Worth ₹349",
      line2: "on Orders Over ₹700",
    },
    {
      name: "Minimalist",
      image:
        "https://images-static.nykaa.com/uploads/93b13c53-8d18-4e51-9c78-9c2409044a52.jpg?tr=w-400,cm-pad_resize",
      line1: "Free Makeup Remover Wipes on ₹599+",
      line2: "Free Nail Polish Remover On ₹799+",
    },
    {
      name: "Loreal",
      image:
        "https://images-static.nykaa.com/uploads/b8270a04-0987-4917-8ec5-3d5a93141d43.jpg?tr=w-400,cm-pad_resize",
      line1: "Free Eyeshadow Worth ₹599",
      line2: "On Orders Of ₹1200+",
    },
    {
      name: "Sugar",
      image:
        "https://images-static.nykaa.com/uploads/9c5e60e1-d264-463d-a25e-40b323ef19d1.jpg?tr=w-400,cm-pad_resize",
      line1: "Great Deals On Combos",
      line2: "Combos Starting At ₹290",
    },
    {
      name: "M-Caffeine",
      image:
        "https://images-static.nykaa.com/uploads/f4c220ef-194e-41b9-80bd-b3760be7b079.jpg?tr=w-400,cm-pad_resize",
      line1: "Free Set Of 4 Lipsticks",
      line2: "On Orders Of ₹999+",
    },
    {
      name: "Kay Beauty",
      image:
        "https://images-static.nykaa.com/uploads/2dfdf12f-239b-4264-97db-2a7ef24e8dd1.jpg?tr=w-400,cm-pad_resize",
      line1: "Great Deals On Combos",
      line2: "Combos Starting At ₹290",
    },
    {
      name: "Plum",
      image:
        "https://images-static.nykaa.com/uploads/3f4d4264-6e8f-4248-bfbb-7cb319c80823.jpg?tr=w-400,cm-pad_resize",
      line1: "Free Highlighter Worth ₹3200 On ₹3500+",
      line2: "Extra 10% Off On ₹5000+",
    },
    {
      name: "Colorear",
      image:
        "https://images-static.nykaa.com/uploads/c8e28059-f48f-4461-8fd1-630d8f59999e.jpg?tr=w-400,cm-pad_resize",
      line1: "Free Makeup Remover Wipes on ₹599+",
      line2: "Free Nail Polish Remover On ₹799+",
    },
    {
      name: "Huda Beauty",
      image:
        "https://images-static.nykaa.com/uploads/66a2ed58-36ef-44ca-8ed8-e7aa57ee16a8.jpg?tr=w-400,cm-pad_resize",
      line1: "Free Lipstick On ₹799",
      line2: "Free Face Primer On ₹999",
    },
  ];
  return (
    <div id='brandDiscount'>
      {BrandDiscountData.map((data) => {
        return (
          <div>
            <img src={data.image} alt='' />
            <p className="line1">{data.line1}</p>
            <p className="line2">{data.line2}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BrandDiscount;
