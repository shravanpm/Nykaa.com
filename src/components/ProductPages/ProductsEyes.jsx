// import Button from '@mui/material/Button';

import "../../stylesheets/card.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductPage } from "../ProductsPageTemplate/ProductPage";

export const ProductsEyes = () => {
  const carouselData = [
    "https://images-static.nykaa.com/uploads/a532b123-7e2e-40ef-8321-fb7c733203ff.jpg?tr=w-1200,cm-pad_resize",
  ];

  let url = "https://nykaa-backend-masai.herokuapp.com/products/eyes";

  return (
    <div>
      <ProductPage data={{ carouselData: carouselData, url: url }} />
    </div>
  );
};
