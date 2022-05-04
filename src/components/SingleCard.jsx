import { Add2Cart } from "./add2cartButton"
import { useState } from "react";
import { Typography,Rating } from '@mui/material';


export const SingleCard = (props) => {

    const [showButton,setShowButton] = useState(false);
    const [value,setValue] = useState(props.data.rating)

    return (
     <div>
          <div key={props.data.id}>
            <div style={{
        //    border : "1px solid red",
           height : "446px",
           width : "250px",
           backgroundColor: "white",
           padding : "10px",
           cursor : "pointer",
           borderRadius: "5px"
       }} onMouseOver={()=>{setShowButton(true)}} onMouseLeave={()=>{setShowButton(false)}} >
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
               <img src={props.data.image} alt="img" srcSet="" style={{
               height: "200px",
               width : "200px",
            //    border : "1px solid green"
           }}/>
           </div>
           <div style={{height:"42px"}}>
               <p >{`${props.data.name}`}</p>
           </div>
           <div>
               <p><span style={{margin : "10px",
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
           <div>
                                <div>
                                {/* <Typography component="legend">Controlled</Typography>
                                <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                /> */}
                                <Typography component="legend" fillColor="red"></Typography>
                                <Rating name="read-only" value={value} readOnly />
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