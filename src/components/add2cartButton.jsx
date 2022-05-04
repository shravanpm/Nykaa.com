import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useState} from "react"

export const Add2Cart = (prop)=>{
    const heart = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNlNzRjM2MiPjxwYXRoIGQ9Ik0xMTguMjUsMjEuNWMtMjAuNzQ3NSwwIC0zMi4yNSwxNC45NzgzMyAtMzIuMjUsMTQuOTc4MzNjMCwwIC0xMS41MDI1LC0xNC45NzgzMyAtMzIuMjUsLTE0Ljk3ODMzYy0yMS43NzIzMywwIC0zOS40MTY2NywxNy42NDQzMyAtMzkuNDE2NjcsMzkuNDE2NjdjMCwyOS44OTIxNyAzNS4yMDI2Nyw1OC44NTk4MyA0NS4wMTM4Myw2OC4wMTE2N2MxMS4zMDE4MywxMC41MzUgMjYuNjUyODMsMjQuMDggMjYuNjUyODMsMjQuMDhjMCwwIDE1LjM1MSwtMTMuNTQ1IDI2LjY1MjgzLC0yNC4wOGM5LjgxMTE3LC05LjE1MTgzIDQ1LjAxMzgzLC0zOC4xMTk1IDQ1LjAxMzgzLC02OC4wMTE2N2MwLC0yMS43NzIzMyAtMTcuNjQ0MzMsLTM5LjQxNjY3IC0zOS40MTY2NywtMzkuNDE2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="    
    const blackHeart = "https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
    const [wishlist,setWishlist] = useState(true);    
    return (<div style={{display:"flex",
                            height:"40px",
                            marginRight:"-10px",
                            marginBottom:"-10px",
                            borderTop:"1px solid grey",
                            
                            }}>
                    <div className='productCardHeart' style={{width:"30%"}}><img 
                    src={wishlist?blackHeart:heart}alt="" srcSet=""
                    onClick={()=>{setWishlist(!wishlist)}} style={{
                    height:"35px",
                    width:"35px"
                    }} />
                    </div>
                    {/* <div>
                        <img src={FavoriteBorderIcon} alt="" srcset="" />
                    
                    </div> */}
                    <div onClick={()=>{console.log("ssss",prop.data);}}
                     className='alignRight' style={{width:"70%",backgroundColor:"#fc2779",paddingTop:"5px",
                                                        paddingRight:"0px"}}>
                        <span  style={{width:"70",
                                        fontSize:"24px",
                                        textAlign:"right",
                                        paddingTop:"5px",
                                        marginTop:"5px",
                                        color:"white"}}>
                    <b>ADD TO BAG</b>
                    </span>
                    </div>
                </div>)
}