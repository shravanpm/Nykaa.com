// import Button from '@mui/material/Button';

import "../stylesheets/card.css";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Add2Cart } from './add2cartButton';
import { SingleCard } from './SingleCard';
import { ProductCarousel } from "./ProductCarousel";
import { Sidebar } from "./Sidebar";
import { store } from '../Redux/store';



export const ProductPage = () => {
const [data,setData] = useState([]);
   

    async function getData(){
        let url = "http://localhost:8080/products";
        axios.get(url)
        .then(response =>{ 
            console.log(response.data)
            setData(response.data)
        });
        
    }

    

    useEffect(()=>{
        getData();
        console.log("ssss",data);
    },[])
    return (

       
        <div style={{width: "90%",                      
                      margin:"auto",
                      marginTop : "50px",}}>
           
            <div>
            <ProductCarousel/>
            </div>

            <div>
            <h1 style={{textAlign:"center"}}>All Products</h1>
            </div>

          <div style={{display : "flex"}}>
                <div style={{width : "20%",
                            marginRight : "-50px"}}>
                    <Sidebar/>
                </div>
              <div className="productCardList">
              
                {data.map((e) => (
                
                <div key = {e.id}>
                    <SingleCard data = {e}/>
                </div>
                    
                ))}
            </div>
              
          </div>
         
        </div>
               
       
    )
}


/**
 * 
 const Home = ({ data }) => {
  return (
    <div className="kat">
      {data.map(({ id, title, img, link }) => (
        <li key={id}>
          <span>{title}</span>
          <div className="img-container">
            <img src={img} alt={title}></img>
          </div>
        </li>
      ))}
    </div>
  );
};
 */
/*

*/