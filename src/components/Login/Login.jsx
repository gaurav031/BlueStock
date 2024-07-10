import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Custom CSS for additional styling
import logo from '../../assets/image/fulllogo.png';
import eye from '../../assets/image/eye.svg'; // Assuming you have the eye icon imported correctly
import eyeSlash from '../../assets/image/eyeSlash.svg'; // Import eye slash icon for hidden password
import ReCAPTCHA from 'react-google-recaptcha'; // Updated import for ReCAPTCHA
const siteKey = 'YOUR_SITE_KEY'; // Replace with your actual ReCAPTCHA site key

/**
 * Login component for handling user authentication.
 * Includes email and password input fields with optional visibility toggle for password,
 * ReCAPTCHA integration for verification, and login form submission handling.
 */
const Login = () => {
    const [verified, setVerified] = useState(false); // State to track ReCAPTCHA verification status
    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
    const [iconStyle, setIconStyle] = useState({ height: '24px', width: '24px', marginTop: '30px' }); // State for icon style based on window width

    // Handle ReCAPTCHA onChange event
    const handleCaptchaChange = (value) => {
        console.log('Captcha value:', value);
        setVerified(true);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (verified) {
            alert('Form submitted');
        } else {
            alert('Please verify the captcha');
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Update icon style based on window width
    const updateIconStyle = () => {
        if (window.innerWidth < 576) {
            setIconStyle({ height: '16px', width: '16px', marginTop: '50px' });
        } else if (window.innerWidth < 768) {
            setIconStyle({ height: '20px', width: '20px', marginTop: '45px' });
        } else {
            setIconStyle({ height: '24px', width: '24px', marginTop: '30px' });
        }
    };

    // useEffect to update icon style on component mount and window resize
    useEffect(() => {
        updateIconStyle();
        window.addEventListener('resize', updateIconStyle);
        return () => window.removeEventListener('resize', updateIconStyle);
    }, []);

    return (
        <div className="container-fluid login">
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4">
                    <div className="card p-4 shadow-sm">
                        <div className="mb-4 text-center">
                            <img src={logo} alt="Bluestock" style={{ maxWidth: '100%', height: 'auto',paddingLeft:'20px'}} />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="johndoe@gmail.com" />
                            </div>
                            <div className="mb-3 position-relative">
                                <label htmlFor="password" className="form-label">Password</label>
                                <a href="forgot" className="text-decoration-none forget">Forgot Password?</a>
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    className="form-control"
                                    id="password"
                                    placeholder="********"
                                />
                                <div className="recaptcha-container mb-3">
                                    <ReCAPTCHA
                                        sitekey={siteKey}
                                        onChange={handleCaptchaChange}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary position-absolute end-0 top-0 mt-2 me-2"
                                    onClick={togglePasswordVisibility}
                                    style={{ padding: 0, background: 'none', border: 'none' }} // Remove default button styles
                                >
                                    <img
                                        src={passwordVisible ? eyeSlash : eye}
                                        alt="Toggle Password Visibility"
                                        className='toggle-icon'
                                        style={iconStyle}
                                    />
                                </button>
                            </div>

                            <div className="mb-3">
                                <div className="g-recaptcha" data-sitekey={siteKey}></div>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">Keep me signed in</label>
                            </div>
                            <div className="d-grid mb-3">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <div className="text-center mb-3 d-flex align-items-center">
                                <div className="flex-grow-1 border-bottom"></div>
                                <span className="mx-2 sign-up">or sign up with</span>
                                <div className="flex-grow-1 border-bottom"></div>
                            </div>
                            <div className="d-grid mb-3">
                                <button type="button" className="btn btn-light border">
                                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="me-2" />
                                    Continue with Google
                                </button>
                            </div>
                            <div className="text-center text-sign">
                                <a href="signup" className="text-decoration-none">Create an account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
