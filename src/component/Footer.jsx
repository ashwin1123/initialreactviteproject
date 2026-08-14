import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
        <footer className="custom-footer">

            <div className="container-fluid">

                <div className="row">

                    {/* =========================
                        SERVICES
                    ========================= */}
                    <div className="col-lg-3 col-md-6">

                        <h3>Services</h3>

                        <ul className="footer-list">

                            <li>
                                <Link to="/services/ai-ml">
                                    AI/ML Development
                                </Link>
                            </li>

                            <li>
                                <Link to="/services/mobile-app">
                                    Mobile App Development
                                </Link>
                            </li>

                            <li>
                                <Link to="/services/web-development">
                                    Web Development
                                </Link>
                            </li>

                            <li>
                                <Link to="/services/custom-software">
                                    Custom Software Development
                                </Link>
                            </li>

                            <li>
                                <Link to="/services/hire-developers">
                                    Hire Developers
                                </Link>
                            </li>

                            <li>
                                <Link to="/services/ui-ux">
                                    UI/UX Development
                                </Link>
                            </li>

                            <li>
                                <Link to="/services/digital-transformation">
                                    Digital Transformation
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* =========================
                        INDUSTRY SOLUTIONS
                    ========================= */}
                    <div className="col-lg-3 col-md-6">

                        <h3>Industry Solutions</h3>

                        <ul className="footer-list">

                            <li>
                                <Link to="/industries/healthcare">
                                    Healthcare & Lifesciences
                                </Link>
                            </li>

                            <li>
                                <Link to="/industries/ecommerce">
                                    E-Commerce
                                </Link>
                            </li>

                            <li>
                                <Link to="/industries/transport-logistics">
                                    Transport & Logistics
                                </Link>
                            </li>

                            <li>
                                <Link to="/industries/real-estate">
                                    Real Estate
                                </Link>
                            </li>

                            <li>
                                <Link to="/industries/media-entertainment">
                                    Media & Entertainment
                                </Link>
                            </li>

                            <li>
                                <Link to="/industries/on-demand">
                                    On-demand Delivery
                                </Link>
                            </li>

                            <li>
                                <Link to="/industries/banking-finance">
                                    Banking & Finance
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* =========================
                        QUICK LINKS
                    ========================= */}
                    <div className="col-lg-3 col-md-6">

                        <h3>Quick Links</h3>

                        <ul className="footer-list">

                            <li>
                                <Link to="/portfolio">
                                    Portfolio
                                </Link>
                            </li>

                            <li>
                                <Link to="/careers">
                                    Careers
                                </Link>
                            </li>

                            <li>
                                <Link to="/lifeevent">
                                    Life at Company
                                </Link>
                            </li>

                            <li>
                                <Link to="/clients">
                                    Clients
                                </Link>
                            </li>

                            <li>
                                <Link to="/partner">
                                    Become a Partner
                                </Link>
                            </li>

                            <li>
                                <Link to="/location">
                                    Location
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact">
                                    Contact Us
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* =========================
                        NEWSLETTER
                    ========================= */}
                    <div className="col-lg-3">

                        <h2 className="text-white">
                            <i className="far fa-envelope mr-2"></i>
                            Newsletter
                        </h2>

                        <p className="newsletter-text">
                            Subscribe to receive the latest updates directly
                            in your inbox.
                        </p>

                        <div className="input-group newsletter-box">

                            <input
                                type="email"
                                className="form-control"
                                placeholder="Your Email Address"
                            />

                            <div className="input-group-append">

                                <button
                                    type="button"
                                    className="btn send-btn"
                                >
                                    <i className="fas fa-arrow-right"></i>
                                </button>

                            </div>

                        </div>


                        <div className="countries">

                            <span>USA</span>
                            <span>Canada</span>
                            <span>UK</span>
                            <span>Australia</span>
                            <span>Saudi Arabia</span>
                            <span>UAE</span>
                            <span>India</span>
                            <span>Netherlands</span>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
  )
}

export default Footer
