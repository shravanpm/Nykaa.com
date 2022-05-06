// import Button from '@mui/material/Button';

import "../../stylesheets/card.css";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Add2Cart } from '../add2cartButton';
import { SingleCard } from '../SingleCard';
import { ProductCarousel } from "../ProductCarousel";
import { Sidebar } from "../Sidebar";
import { store } from '../../Redux/store';



export const FacePrime = () => {
const [data,setData] = useState([]);
   
const carouselData = ["https://images-static.nykaa.com/uploads/a532b123-7e2e-40ef-8321-fb7c733203ff.jpg?tr=w-1200,cm-pad_resize"]

    async function getData(){
        let url = "http://localhost:5000/products/face-primer";
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
            <ProductCarousel data = {carouselData}/>
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



 