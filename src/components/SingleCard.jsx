import { Add2Cart } from "./add2cartButton"
import { useState } from "react";
import { Typography,Rating } from '@mui/material';
import { productDetails } from '../Redux/action';
import { useDispatch } from 'react-redux';


export const SingleCard = (props) => {

    const [showButton,setShowButton] = useState(false);
    const [value,setValue] = useState(props.data.rating);
    const dispatch = useDispatch(); 

    const handleProduct = (data) => {
        dispatch(productDetails(data));
      }

    return (
     <div>
          <div key={props.data.id}>
              
            <div style={{
        //    border : "1px solid red",
           height : "411px",
           width : "250px",
           backgroundColor: "white",
           padding : "10px",
           cursor : "pointer",
           borderRadius: "5px"
       }} onMouseOver={()=>{setShowButton(true)}} onMouseLeave={()=>{setShowButton(false)}} >
           
       <div  onClick={()=>handleProduct(props.data)}>
       <div style={{textAlign:"left",
                        color:"red",
                        padding:"5px",
                        fontSize:"12px"}}      >
               {props.data.feautured === true ? 
               <span style={{letterSpacing:".8px"}}>FEAUTURED</span> : null}
               {props.data.bestSeller===true ? <span style={{textAlign:"left",
                        color:"green",
                        padding:"5px",
                        letterSpacing:".8px"}}>
                   BESTSELLER
               </span> : null}
           </div>
           
           <div >
               <img src={props.data.image} alt="img" srcSet="" style={{
               height: "200px",
               width : "200px",
            //    border : "1px solid green"
           }}/>
           </div>
           <div style={{height:"42px",paddingBottom:"-2px",marginBottom:"-5px"}}>
               <p style={{marginBottom:"-5px"}}>{`${props.data.name}`}</p>
           </div>
           <div>
               <p><span style={{marginLeft : "10px",marginRight:"5px",
               marginTop:"50px",
                color:"#616c78",
                textDecoration:"line-through"}}>
                    MRP:{props.data.mrp}</span>
                    <span><b>{props.data.price}</b></span>
               <span style={{margin : "10px",
                               color:"green"}}>75%</span></p>
           </div>
           <div>
               <p style={{
                   color:"red",
                   fontSize:"14px",
                   height:"20px",
               }}>{props.data.offer}</p>
           </div>
       </div>

           <div>
                                <div >
                                {/* <Typography component="legend">Controlled</Typography>
                                <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                /> */}
                                <Typography style={{marginBottom:"-10px"}} component="legend" ></Typography>
                                <Rating name="size-small" value={value} readOnly size="small" />
                                {/* <Typography component="legend">Disabled</Typography>
                                <Rating name="disabled" value={value} disabled />
                                <Typography component="legend">No rating given</Typography>
                                <Rating name="no-value" value={null} /> */}
                                </div>
              
           </div>
        
           <div>
              
            { showButton === true?  <Add2Cart data={props.data}/> : null}
           </div>
        </div>
       </div>
     </div>   
    )}