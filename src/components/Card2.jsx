// import Button from '@mui/material/Button';

import "../stylesheets/card.css";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Add2Cart } from './add2cartButton';
import { SingleCard } from './SingleCard';

export const Card2 = () => {
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
        <div className="productCardList">
      {data.map((e) => (
       
       <div>
          <SingleCard data = {e}/>
       </div>
            // <div>
               
            //  { showButton == true?  <Add2Cart data={e}/> : null}
            // </div>
         
        
      ))}
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