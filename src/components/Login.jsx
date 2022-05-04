import { useNavigate } from "react-router-dom";
import './Login.css';
import close from '../Images/signup-close.png'

export const Login = () => {
    const navigate = useNavigate();
    const goToPage = (path) => {
        navigate(path);
    }
    return (
        <div id="login-page">
            <div id="login-div">
                <div
                    onClick={() => goToPage("/signin")}
                    id='button-close-div'>
                    <img src={close} alt='close' id='button-close-img'></img>
                </div>
                <div id="login-heading">LOGIN/REGISTER</div>

                <div id="login-user-input-div">
                    <input id="login-user-input-input" placeholder="Enter Email ID or Phone Number"></input>
                    {/* <span>REQUIRED</span> */}
                </div>
                <div id="login-required">REQUIRED</div>

                <input
                    className="login-input"
                    type="submit"
                    value="PROCEED"></input>
            </div>
        </div>
    )
}