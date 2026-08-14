import React from 'react'

const Contactform = () => {
  return (
    <section className="contact-form-section pt-5 pb-5" id="contact">
        <div className="container">
            <div className="contact-section">
                <div className="row g-0">
                    <div className="col-lg-8">
                        <div className="left-section">
                            <h1 className="heading">Do you have a project in mind?<br />Talk to the experts.</h1>
                            <form>
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <label className="form-label">Full Name*</label>
                                                <input type="text" className="form-control" placeholder="Your Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Email*</label>
                                                <input type="email" className="form-control" placeholder="Business Email" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Mobile Number*</label>
                                                <input type="text" className="form-control" placeholder="+1 XX XXXX XXX" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Budget*</label>
                                                <select className="form-select form-control">
                                                    <option>Budget (USD)</option>
                                                    <option>$1000</option>
                                                    <option>$5000</option>
                                                    <option>$10000</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">About Project</label>
                                                <textarea className="form-control" placeholder="Describe Your Project"></textarea>
                                            </div>
                                            
                                            <div className="col-12 d-flex justify-content-between align-items-center flex-wrap mt-5">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="form-check-label">By submitting this form I agree to the Privacy Policy</label>
                                                </div>
                                            <button className="submit-btn">Submit</button>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="right-section">
                            <h2 className="section-title text-white">Get in Touch</h2>
                            <p> We'd love to resolve your queries with personalized assistance.</p>
                            <div className="contact-row">
                                <div className="icon-box">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-text">
                                    <h5>Chat with us</h5>
                                    <h4>info@Company.com</h4>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="icon-box">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="contact-text">
                                    <h5>Let's discuss via call</h5>
                                    <div className="phone-number">
                                        USA : +91-123-123-123-4<br />
                                        +91-123-123-123-4<br /><br />

                                        India : +91-123-123-123-4<br/>
                                                +91-123-123-123-4<br/>
                                                +91-123-123-123-4
                                    </div>
                                </div>
                            </div>
                            <div class="contact-row">
                                        <div class="icon-box">
                                            <i class="fab fa-whatsapp"></i>
                                        </div>
                                        <div class="contact-text">
                                            <h5>Reach us on WhatsApp</h5>
                                            <h4>+91-123-123-123-4</h4>
                                        </div>
                                    </div>
                                    <div class="social-icons">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-youtube"></i></a>
                                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                       
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contactform


