import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'; // Custom CSS for additional styling
import logo from '../../assets/image/fulllogo.png';
import eye from '../../assets/image/eye.svg'; // Assuming you have the eye icon imported correctly
import eyeSlash from '../../assets/image/eyeSlash.svg'; // Import eye slash icon for hidden password
import ReCAPTCHA from 'react-google-recaptcha'; // Updated import for ReCAPTCHA
const siteKey = 'YOUR_SITE_KEY';

const Signup = () => {
    const [verified, setVerified] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [paddingLeft, setPaddingLeft] = useState('130px');

    const handleCaptchaChange = (value) => {
        console.log('Captcha value:', value);
        setVerified(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (verified) {
            alert('Form submitted');
        } else {
            alert('Please verify the captcha');
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const updatePadding = () => {
        if (window.innerWidth < 576) {
            setPaddingLeft('0');
        } else if (window.innerWidth < 768) {
            setPaddingLeft('60px');
        } else {
            setPaddingLeft('130px');
        }
    };

    useEffect(() => {
        updatePadding();
        window.addEventListener('resize', updatePadding);
        return () => window.removeEventListener('resize', updatePadding);
    }, []);

    return (
        <div className="container-fluid signup">
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4">
                    <div className="card p-4 shadow-sm">
                        <div className="mb-4 text-center">
                            <img src={logo} alt="Bluestock" style={{ maxWidth: '100%', height: 'auto',paddingLeft:'20px' }} />
                        </div>
                        <h3 className="text-center" style={{ paddingLeft:'20px' }}>Create an account</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Saisha Wagh" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="hello@bluestock.in" />
                            </div>
                            <div className="mb-3 position-relative">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    className="form-control"
                                    id="password"
                                    placeholder="********"
                                />
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
                                        style={{ height: '24px', width: '24px', marginTop: '30px' }}// Ensure both icons have the same height
                                    />
                                </button>
                            </div>
                            <div className="mb-3">
                                <small style={{ color:'#808080', textShadow:'1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                                    By continuing, you agree to our <a href="#">terms of service</a>.
                                </small>
                            </div>
                            <div className="recaptcha-container mb-3">
                                <ReCAPTCHA
                                    sitekey={siteKey}
                                    onChange={handleCaptchaChange}
                                />
                            </div>
                            <div className="d-grid mb-3">
                                <button type="submit" className="btn btn-primary">Sign up</button>
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
                                <span>Already have an account? <a href="login">Sign in here</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
