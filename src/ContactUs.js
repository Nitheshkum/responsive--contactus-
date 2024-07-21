import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="background-wrapper">
            <div className="container contact-us">
                <div className="text-center mb-4">
                    <h1>Contact Us</h1>
                    <p>Get in touch with us for a free consultation on your project.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="yellow-background text-center">
                            <div className="logo-container">
                                <svg width="100" height="100" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 34.511L7.28213 27.7829L16.2265 29.6826L0 34.511Z" fill="black"/>
                                    <path d="M9.18182 33.2445L25.1709 28.6536L23.2712 40.9224L9.18182 33.2445Z" fill="black"/>
                                    <path d="M24.9334 41.714L29.5243 10.9232L44.4843 0L32.0572 45.5925L24.9334 41.714Z" fill="black"/>
                                    <path d="M36.0149 47.4922L33.7986 46.4632L44.9593 8.86521L50.2626 18.2845L36.0149 47.4922Z" fill="black"/>
                                    <path d="M48.8378 50.2626L37.4397 48.0462L41.0016 41.0016L48.8378 50.2626Z" fill="black"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form className="specific-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" className="form-control first-name-margin" id="firstName" name="firstName" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group specific-form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" className="form-control" id="lastName" name="lastName" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group phone-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" className="form-control" id="phone" name="phone" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="topic">Choose a topic</label>
                                <select className="form-control" id="topic" name="topic">
                                    <option value="">Select one....</option>
                                    <option value="topic1">Topic 1</option>
                                    <option value="topic2">Topic 2</option>
                                    <option value="topic3">Topic 3</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" name="message" rows="5"></textarea>
                            </div>
                            <div className="form-actions text-center">
                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" id="terms" name="terms" />
                                    <label className="form-check-label" htmlFor="terms">I accept the <a href="#">Terms</a></label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Get Started</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="contact-details text-center mt-4">
                    <div className="row">
                        <div className="col-md-4">
                            <i className="bi bi-telephone"></i>
                            <h5>Call Us</h5>
                            <p>+1 234 567 890</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-envelope"></i>
                            <h5>Email Us</h5>
                            <p>info@example.com</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-map"></i>
                            <h5>Visit Us</h5>
                            <p>123 Main St, Anytown, USA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
