import React from 'react';
import { Button } from './Button';
import "../App.css";
import "./Footer.css";
import { Link } from 'react-router-dom';
import TollIcon from '@material-ui/icons/Toll';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
            < p className="footer-subscription-heading">
                Join the Adventure Vacation deals at the Best spots in the World.
            </p>
            <p className="footer-subscription-text" >
                You can unsubscribe anytime.
            </p>
            <div className="input-area" >
                <form >
                    <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to="/" >Testimonials</Link>
                        <Link to="/" >Careers</Link>
                        <Link to="/" >Investors</Link>
                        <Link to="/" >Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to="/" >Testimonials</Link>
                        <Link to="/" >Careers</Link>
                        <Link to="/" >Investors</Link>
                        <Link to="/" >Terms of Services</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Packages</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to="/" >Testimonials</Link>
                        <Link to="/" >Careers</Link>
                        <Link to="/" >Investors</Link>
                        <Link to="/" >Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Discussion</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to="/" >Testimonials</Link>
                        <Link to="/" >Careers</Link>
                        <Link to="/" >Investors</Link>
                        <Link to="/" >Terms of Services</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TREL
                            <TollIcon fontSize="large" color="inherit" />
                        </Link>
                    </div>
                    <small className="website-rights">TREL © 2020</small>
                </div> 
            </section>
        </div>
    )
}

export default Footer
