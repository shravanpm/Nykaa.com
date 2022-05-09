import { Add2Cart } from "./add2cartButton"
import { useState } from "react";
import { Typography, Rating } from '@mui/material';
import { productDetails } from '../../Redux/action';
import { useDispatch } from 'react-redux';
import "../../stylesheets/SingleCard.css"
import { useNavigate } from 'react-router-dom';


export const SingleCard = (props) => {

    const [showButton, setShowButton] = useState(false);

    const [value, setValue] = useState(props.data.rating);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleProduct = (data) => {

        dispatch(productDetails(data));
        navigate("/productsdetails");

    }

    return (
        <div>
            <div key={props.data.id}>

                <div className="card" onMouseOver={() => { setShowButton(true) }} onMouseLeave={() => { setShowButton(false) }} >

                    <div onClick={() => handleProduct(props.data)}>

                        <div className="cardTop">
                            {props.data.feautured === true ?
                                <span style={{ letterSpacing: ".8px" }}>FEAUTURED</span> : null}
                            {props.data.bestSeller === true ? <span style={{
                                textAlign: "left",
                                color: "green",
                                padding: "5px",
                                letterSpacing: ".8px"
                            }}>
                                BESTSELLER
                            </span> : null}
                        </div>

                        <div >
                            <img src={props.data.image} alt="img" srcSet="" className="cardImage" />
                        </div>
                        <div className="CardNameDiv" style={{ height: "40px" }}>
                            <p className="cardName">{`${props.data.name}`}</p>
                        </div>
                        <div>
                            <p><span className="cardMrp">
                                MRP:{props.data.mrp}</span>
                                <span><b>{props.data.price}</b></span>
                                <span className="cardOff">
                                    {props.data.off}%
                                </span></p>
                        </div>
                        <div>
                            <p className="cardOffer">{props.data.offer}</p>
                        </div>
                    </div>

                    <div>
                        <div >

                            <Typography style={{ marginBottom: "-10px" }} component="legend" ></Typography>
                            <Rating name="size-small" value={value} readOnly size="small" />

                        </div>

                    </div>

                    <div>

                        {showButton === true ? <Add2Cart data={props.data} /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}