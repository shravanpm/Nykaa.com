// import Button from '@mui/material/Button';
import { ModalHover } from 'react-modal-hover'
import "../stylesheets/card.css";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Add2Cart } from './add2cartButton';

export const Card2 = () => {
    const [showButton,setShowButton] = useState(false);
const productImage = "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/e/4e8d41cBOLDF00000075creative.jpg"
const heart = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNlNzRjM2MiPjxwYXRoIGQ9Ik0xMTguMjUsMjEuNWMtMjAuNzQ3NSwwIC0zMi4yNSwxNC45NzgzMyAtMzIuMjUsMTQuOTc4MzNjMCwwIC0xMS41MDI1LC0xNC45NzgzMyAtMzIuMjUsLTE0Ljk3ODMzYy0yMS43NzIzMywwIC0zOS40MTY2NywxNy42NDQzMyAtMzkuNDE2NjcsMzkuNDE2NjdjMCwyOS44OTIxNyAzNS4yMDI2Nyw1OC44NTk4MyA0NS4wMTM4Myw2OC4wMTE2N2MxMS4zMDE4MywxMC41MzUgMjYuNjUyODMsMjQuMDggMjYuNjUyODMsMjQuMDhjMCwwIDE1LjM1MSwtMTMuNTQ1IDI2LjY1MjgzLC0yNC4wOGM5LjgxMTE3LC05LjE1MTgzIDQ1LjAxMzgzLC0zOC4xMTk1IDQ1LjAxMzgzLC02OC4wMTE2N2MwLC0yMS43NzIzMyAtMTcuNjQ0MzMsLTM5LjQxNjY3IC0zOS40MTY2NywtMzkuNDE2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="    
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
       
        <div key={e.id}>
             <div style={{
            border : "1px solid red",
            height : "450px",
            width : "250px",
            backgroundColor: "white",
            padding : "10px",
            cursor : "pointer"
        }} onMouseOver={()=>{setShowButton(true)}} onMouseOut={()=>{setShowButton(false)}} >
            <div style={{textAlign:"left",
                         color:"red",
                         padding:"5px",
                         fontSize:"12px"}}      >
                <span>FEAUTURED</span>
                <span style={{textAlign:"left",
                         color:"green",
                         padding:"5px"}}>
                    BESTSELLER
                </span>
            </div>
            
            <div >
                <img src={e.image} alt="img" srcSet="" style={{
                height: "200px",
                width : "200px",
                border : "1px solid green"
            }}/>
            </div>
            <div style={{height:"42px"}}>
                <h4 >{`${e.name}`}</h4>
            </div>
            <div>
                <p><span style={{margin : "10px",
                 color:"#616c78",
                 textDecoration:"line-through"}}>MRP:{e.mrp}</span><span><b>{e.price}</b></span>
                <span style={{margin : "10px",
                                color:"green"}}>75%</span></p>
            </div>
            <div>
                <p style={{
                    color:"red",
                    fontSize:"14px"
                }}>Extra 10% off</p>
            </div>
            <div>
                <p>* * * * *</p>
            </div>
            
            <div>
               
             { showButton == true?  <Add2Cart data={e}/> : null}
            </div>
         </div>
        </div>
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


