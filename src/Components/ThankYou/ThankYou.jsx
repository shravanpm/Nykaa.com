import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./thankyou.css";

export const ThankYou = () => {
    const user = useSelector((state) => state.user);
    console.log(user)
    const navigator = useNavigate();

    useEffect(() => {
        if (user.Number === "") {
            navigator("/checkout");
        }
    }, []);
   setTimeout(()=>{
       navigator("/")
   },4000)
    console.log(user );
    return (
        <div>
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
        </div>
    );
};
