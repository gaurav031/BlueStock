import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Forgot.css'; // Custom CSS for additional styling
import logo from '../../assets/image/fulllogo.png'; // Importing the company logo

/**
 * Component for handling the Forgot Password functionality.
 * Displays a form to input email for password reset link.
 */
const ForgotPassword = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Password reset link sent');
    };

    return (
        <div className="container-fluid forgot-password">
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4">
                    <div className="card p-4 shadow-sm">
                        <div className="mb-4 text-center">
                            <img src={logo} alt="Bluestock" style={{ maxWidth: '100%', height: 'auto' ,paddingLeft:'20px'}} />
                        </div>
                        <h3 className="text-center">Forgot Password?</h3>
                        <p className="text-center text-muted">Enter your email address to get the password reset link.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="hello@bluestock.in" />
                            </div>
                            <div className="d-grid mb-3">
                                <button type="submit" className="btn btn-primary">Password Reset</button>
                            </div>
                            <div className="text-center">
                                <a href="login" className="text-decoration-none text-muted">Back to login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
