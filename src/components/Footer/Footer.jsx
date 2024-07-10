import React from 'react';
import './Footer.css'; // Importing custom CSS for additional styling
import twitter from '../../assets/image/twitter.png';
import facebook from '../../assets/image/facebook.png';
import instagram from '../../assets/image/instagram.png';
import youtube from '../../assets/image/youtube.png';
import linkedin from '../../assets/image/linkedin.png';
import telegram from '../../assets/image/telegram.png';
import logo from '../../assets/image/fulllogo.png';
import startup from '../../assets/image/startup.png';

/**
 * Footer component representing the navigation bar at the bottom of the page.
 * Includes sections for Resources, Company information, Offerings, Links, and Policy,
 * as well as social media links, company details, and legal disclaimers.
 */
const Footer = () => {
    return (
        <footer className="text-center text-lg-start">
            {/* Grid container */}
            <div className="container p-4" style={{ backgroundColor: 'transparent', marginRight: '1px',marginLeft:'160px',fontSize: 'medium' }}>
                {/* Grid row */}
                <div className="row justify-content-center" style={{ fontSize: 'medium' }}>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="text-uppercase" style={{ fontSize: '12px' }}>Resources</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-body">Trading View</a></li>
                            <li><a href="#!" className="text-body">NSE Holidays</a></li>
                            <li><a href="#!" className="text-body">e-Voting CDSL</a></li>
                            <li><a href="#!" className="text-body">e-Voting NSDL</a></li>
                            <li><a href="#!" className="text-body">Market Timings</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="text-uppercase mb-0" style={{ fontSize: '12px' }}>Company</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-body">Careers</a></li>
                            <li><a href="#!" className="text-body">Contact Us</a></li>
                            <li><a href="#!" className="text-body">About Us</a></li>
                            <li><a href="#!" className="text-body">Community</a></li>
                            <li><a href="#!" className="text-body">Blogs</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="text-uppercase" style={{ fontSize: '12px' }}>Offerings</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-body">Compare Broker</a></li>
                            <li><a href="#!" className="text-body">Fin Calculators</a></li>
                            <li><a href="#!" className="text-body">IPO</a></li>
                            <li><a href="#!" className="text-body">All Brokers</a></li>
                            <li><a href="#!" className="text-body">Products</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="text-uppercase mb-0" style={{ fontSize: '12px' }}>Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-body">Shark Investor</a></li>
                            <li><a href="#!" className="text-body">Mutual Funds</a></li>
                            <li><a href="#!" className="text-body">Sitemap</a></li>
                            <li><a href="#!" className="text-body">Indian Indices</a></li>
                            <li><a href="#!" className="text-body">Bug Bounty Program</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="text-uppercase mb-0" style={{ fontSize: '12px' }}>Policy</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-body">Terms & Conditions</a></li>
                            <li><a href="#!" className="text-body">Privacy Policy</a></li>
                            <li><a href="#!" className="text-body">Refund Policy</a></li>
                            <li><a href="#!" className="text-body">Disclaimer</a></li>
                            <li><a href="#!" className="text-body">Trust & Security</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social media links */}
                <div className="social-media-links">
                    <a href="#!"><img src={facebook} alt="Facebook" /></a>
                    <a href="#!"><img src={twitter} alt="Twitter" /></a>
                    <a href="#!"><img src={youtube} alt="YouTube" /></a>
                    <a href="#!"><img src={linkedin} alt="LinkedIn" /></a>
                    <a href="#!"><img src={telegram} alt="Telegram" /></a>
                </div>

                {/* Company details */}
                <div className="text-center1">
                    <a href="#!"><img src={logo} alt="logo" /></a>
                    <div className="left-span">
                        <p>
                            Bluestock Fintech<br />
                            Pune, Maharashtra<br /><br />
                            MSME Registration No:<br />
                            UDYAM-MH-01-0138001
                        </p>
                    </div>
                    <div className='startup'>
                        <a href="#!"><img src={startup} alt="startup" /></a>
                    </div>
                    <div className="right-span">
                        <p>
                            Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI. Issued in the interest of the investors.
                            <br /><br />
                            The users can write to <a href="mailto:hello@bluestock.in">hello@bluestock.in</a> for any app, website related queries. Also you can send IT / Tech related feedback to <a href="mailto:cto@bluestock.in">cto@bluestock.in</a>
                            <br /><br /><br />
                            Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/sell stock tips, or investment and trading advice. All the stock scripts shown in the Bluestock app, website, all social media handles are for educational purposes only.
                            <br />
                            Before making any investment in the financial market, it is advisable to consult with your financial advisor. Remember that stock markets are subject to market risks.
                        </p>
                    </div>
                </div>
                <hr style={{ width: '90%'}} />
                {/* Footer bottom */}
                <div className="text-center py-3">
                    <div>
                    <p className="mb-0">
                        Bluestock Fintech All Rights Reserved.
                       
                    </p>
                    </div>
                    
                    <div className='heart'>
                        <p>
                        Made with <span style={{ color: 'red' }}>❤</span> in Pune, Maharashtra
                        </p>
                  
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
