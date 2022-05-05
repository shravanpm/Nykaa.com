import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useState} from "react";
import { store } from '../Redux/store';
import { addProduct } from '../Redux/action';
import { useDispatch } from 'react-redux';

export const Add2Cart = (prop)=>{
    const heart = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNlNzRjM2MiPjxwYXRoIGQ9Ik0xMTguMjUsMjEuNWMtMjAuNzQ3NSwwIC0zMi4yNSwxNC45NzgzMyAtMzIuMjUsMTQuOTc4MzNjMCwwIC0xMS41MDI1LC0xNC45NzgzMyAtMzIuMjUsLTE0Ljk3ODMzYy0yMS43NzIzMywwIC0zOS40MTY2NywxNy42NDQzMyAtMzkuNDE2NjcsMzkuNDE2NjdjMCwyOS44OTIxNyAzNS4yMDI2Nyw1OC44NTk4MyA0NS4wMTM4Myw2OC4wMTE2N2MxMS4zMDE4MywxMC41MzUgMjYuNjUyODMsMjQuMDggMjYuNjUyODMsMjQuMDhjMCwwIDE1LjM1MSwtMTMuNTQ1IDI2LjY1MjgzLC0yNC4wOGM5LjgxMTE3LC05LjE1MTgzIDQ1LjAxMzgzLC0zOC4xMTk1IDQ1LjAxMzgzLC02OC4wMTE2N2MwLC0yMS43NzIzMyAtMTcuNjQ0MzMsLTM5LjQxNjY3IC0zOS40MTY2NywtMzkuNDE2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="    
    const blackHeart = "https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
    const [wishlist,setWishlist] = useState(true);    
    const dispatch = useDispatch(); 
    
    const [cart,setCart] = useState(false);
    const handleChange = (data) => {
        console.log(data);
        setCart(true);
        dispatch(addProduct(data));
       
    }

    return (<div style={{display:"flex",
                            height:"40px",
                            marginRight:"-10px",
                            marginBottom:"-10px",
                            borderTop:"2px solid #f3f3f3",
                            marginLeft:"-10px",
                            
                            }}>
                    <div className='productCardHeart' style={{width:"30%"}}><img 
                    src={wishlist?blackHeart:heart}alt="" srcSet=""
                    onClick={()=>{setWishlist(!wishlist)}} style={{
                    height:"25px",
                    width:"25px",
                    verticalAlign:"center",
                    paddingTop:"5px",
                    }} />
                    </div>
                    {/* <div>
                        <img src={FavoriteBorderIcon} alt="" srcset="" />
                    
                    </div> */}
                    <div onClick={()=>{
                      if(!cart){
                        handleChange(prop.data)
                      };
                    }}
                     className='alignRight' style={{width:"70%",backgroundColor:"#fc2779",paddingTop:"10px",
                                                        paddingRight:"0px",
                                                        borderBottomRightRadius:"3px"}}>
                        <span  style={{width:"70",
                                        fontSize:"16px",
                                        textAlign:"center",
                                        // paddingTop:"5px",
                                        // marginTop:"10px",
                                        color:"white",
                                        alignItems:"center",
                                        // position:"absolute",
                                        // top:"50%",


                                        }}>
                    <b>ADD TO BAG</b>
                    </span>
                    </div>
                </div>)
}