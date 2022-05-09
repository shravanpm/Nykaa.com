import { useNavigate } from "react-router-dom";
import './Login.css';
import close from '../../Images/signup-close.png';
import { useState } from "react";

export const Login = () => {
    const [Show, setShow] = useState("login");
    const navigate = useNavigate();
    const goToPage = (path) => {
        navigate(path);
    }

    const [FormData, setFormData] = useState(
        {
            name: null,
            email: null,
            mobile: null
        }
    );

    const handleChange = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }

    // registering user in database
    const registerUser = (e) => {
        e.preventDefault();

        let url = "https://nykaa-backend-masai.herokuapp.com/register";
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(FormData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setShow("otp");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const loginDiv = () => {
        return (
            <div id="login-div">
                <div
                    onClick={() => goToPage("/signin")}
                    id='button-close-div'>
                    <img src={close} alt='close' id='button-close-img'></img>
                </div>
                <div id="login-heading">LOGIN/REGISTER</div>

                <div id="login-user-input-div">
                    <input
                        name="mobile"
                        onChange={handleChange}
                        className="login-user-input-input"
                        placeholder="Enter Phone Number">

                    </input>
                </div>
                <div id="login-required">REQUIRED</div>

                <input
                    onClick={() => setShow("register")}
                    className="login-input"
                    type="submit"
                    value="PROCEED"></input>
            </div>
        )
    }

    const registerDiv = () => {
        return (
            <div id="login-div">
                <div
                    onClick={() => setShow("login")}
                    id='button-close-div'>
                    <img src={close} alt='close' id='button-close-img'></img>
                </div>
                <div id="login-heading">REGISTER</div>

                <form>
                    <div id="login-user-input-div">
                        <input className="login-user-input-input" placeholder="Enter Full Name" name="name" onChange={handleChange}></input>
                        <input className="login-user-input-input" placeholder="Enter Email Address" name="email" onChange={handleChange}></input>
                        <input className="login-user-input-input" placeholder="Enter Phone Number" value={FormData.mobile}></input>
                    </div>

                    <input
                        onClick={registerUser}
                        // onClick={setShow}
                        className="register-input"
                        type="submit"
                        value="PROCEED"></input>
                </form>
            </div>
        )
    }

    const otpDiv = () => {
        return (
            <div id="login-div">
                <div
                    onClick={() => setShow("register")}
                    id='button-close-div'>
                    <img src={close} alt='close' id='button-close-img'></img>
                </div>
                <div id="login-heading">OTP</div>

                <div id="login-user-input-div">
                    <input
                        className="login-user-input-input"
                        placeholder="Enter OTP">

                    </input>
                </div>

                <input
                    onClick={() => goToPage("/")}
                    className="login-input"
                    type="submit"
                    value="PROCEED"></input>
            </div>
        )
    }

    return (
        <div id="login-page">
            {Show === "login" ?
                loginDiv()
                :
                Show === "register" ?
                    registerDiv()
                    :
                    otpDiv()}
        </div>
    )
}