import './SignIn.css';
import image from '../../Images/signup-giftbox.png';
import close from '../../Images/signup-close.png'
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const navigate = useNavigate();
    const goToPage = (path) => {
        navigate(path);
    }
    return (
        <div id="signin-page">
            <div id="signin-div">
                <div
                    onClick={() => goToPage("/")}
                    id='button-close-div'>
                    <img src={close} alt='close' id='button-close-img'></img>
                </div>
                <h2>Sign in</h2>
                <p className='filler-text'>To quickly find your favourites items, saved addresses and payments.</p>
                <p className='filler-text'>Register and earn 2000 reward points</p>
                <img src={image} alt='gift-box' id='gift-box'></img>
                <input
                    onClick={() => goToPage("/login")}
                    type="email"
                    className="signin-input"
                    placeholder="Enter Phone Number or Email"></input>
                <div id='signin-google'>
                    <img className='icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png' alt='Google Icon'></img>
                    <span>Google</span>
                </div>
                <p id='terms'>
                    By continuing, you agree that you have read and accept our T&Cs and Privacy Policy.
                </p>
            </div>
        </div>
    )
}