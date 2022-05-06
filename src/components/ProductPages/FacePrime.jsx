// import Button from '@mui/material/Button';

import "../../stylesheets/card.css";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Add2Cart } from '../add2cartButton';
import { SingleCard } from '../SingleCard';
import { ProductCarousel } from "../ProductCarousel";
import { Sidebar } from "../Sidebar";
import { store } from '../../Redux/store';
import { ProductPage } from "../ProductPage";



export const FacePrime = () => {
const [data,setData] = useState([]);
   
const carouselData = ["https://images-static.nykaa.com/uploads/a532b123-7e2e-40ef-8321-fb7c733203ff.jpg?tr=w-1200,cm-pad_resize"]

let url = "http://localhost:5000/products/face-primer";

    async function getData(){
        let url = "http://localhost:5000/products/face-primer";
        axios.get(url)
        .then(response =>{ 
            console.log(response.data)
            setData(response.data)
        });
        
    }

    const setDataSideBar = (d) => {
        
        setData([...d])
        console.log(data)
      }     

    useEffect(()=>{
        getData();
        console.log("ssss",data);
    },[])
    return (

       <div>
            <ProductPage data = {{carouselData:carouselData,url:url}}/>
       </div>
        
               
       
    )
}



 