// import Button from '@mui/material/Button';


import { useEffect, useState } from 'react';
import axios from "axios";
import { ProductPage } from "../ProductsPageTemplate/ProductPage";



export const Cleansers = () => {

   
const carouselData = ["https://images-static.nykaa.com/uploads/5d8fe815-a62b-4e6f-ab82-33178425c41a.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/b9f20a75-d7f6-4d93-be5d-1e35a46490b4.jpg?tr=w-1200,cm-pad_resize"]

let url = "https://nykaa-backend-masai.herokuapp.com/products/cleansers";

   
    return (

       <div>
            <ProductPage data = {{carouselData:carouselData,url:url}}/>
       </div>
     
    )
}



 