import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Div } from "./StyledComponents/NykaaStyles";
import "./thankyou.css";

export const ThankYou = () => {
    const user = useSelector((state) => state.user);
    const navigator = useNavigate();

    useEffect(() => {
        if (user.Number === "") {
            navigator("/checkout");
        }
    }, []);
    // console.log(cartProducts);

    // let off_price = 0;

    // for (let item of cartProducts) {
    //     off_price += +item.off_price * +item.quan;
    // }
    console.log(user);
    return (
        <Div>
            <div className="thankyou">
                <h1 className="success">
                    <i className="fa fa-check-circle"></i> Payment Success
                </h1>
                <ul>
                    <li>
                        <strong>Name : </strong> {user.Name}
                    </li>
                    <li>
                        <strong>Eamil : </strong> {user.Email}
                    </li>
                    <li>
                        <strong>Phone : </strong> {user.Number}
                    </li>
                    <li>
                        <strong>Address : </strong> {user.Address}
                    </li>
                    <li>
                        <strong>PIN : </strong> {user.Pincode}
                    </li>
                </ul>
                <h3 className="footer">Thank you for your payment</h3>
            </div>
        </Div>
    );
};
