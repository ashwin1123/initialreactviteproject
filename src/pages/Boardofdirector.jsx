import React from 'react'
import ceoImage from "../assets/img/person-m-7.webp";
import cooImage from "../assets/img/person-f-8.webp";
import ctoImage from "../assets/img/person-m-6.webp";
import accountactImage from "../assets/img/person-f-4.webp";

const Boardofdirector = () => {
  return (
    <main>
      <section className="boardOfDirectorMessage pt-5 pb-5">
            <div className="space"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-left overviewHeading">
                        <h1 className="mainBannerHeading font-weight-bold ">
                            <span className="">People Behind </span> 
                                <span className="homeBannerNewBlackCnt_tag p-2"><span>Success</span>
                            </span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br /> Aenean commodo ligula eget dolor. </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="wecantogether pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2><strong>Together we can</strong></h2>
                        <p className="eventDescription">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4">
                            <div className="team-box">
                                <div className="team-photo">
                                    <img src={ceoImage} alt="Walter White" />
                                </div>
                                <div className="team-info">
                                    <h3>Walter White</h3>
                                    <div className="designation">
                                        CEO &amp; Founder
                                    </div>
                                    <div className="short-line"></div>
                                    <p>
                                    Walter White founded the company with a mission to deliver
                                    exceptional development services for businesses worldwide.
                                    With strong experience in technology and leadership, he
                                    drives business growth and strategic expansion.
                                    </p>
                                    <div className="social-links">
                                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-4">
                            <div className="team-box">
                                <div className="team-photo">
                                    <img src={cooImage} alt="Sarah Jhonson" />
                                </div>
                                <div className="team-info">
                                    <h3>Sarah Jhonson</h3>
                                    <div className="designation">
                                        COO &amp; Manager
                                    </div>
                                    <div className="short-line"></div>
                                    <p>
                                        Sarah Jhonson drives operational excellence and global growth.
                                        With extensive experience in technology leadership, she
                                        leads strategy, partnerships, and cross-functional teams.
                                    </p>
                                    <div className="social-links">
                                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-4">
                            <div className="team-box">
                                <div className="team-photo">
                                    <img src={ctoImage} alt="Team Member" />
                                </div>
                                <div className="team-info">
                                    <h3>William Anderson</h3>
                                    <div className="designation">CTO</div>
                                    <div className="short-line"></div>
                                    <p>
                                        With extensive technical expertise, William leads
                                        technology strategy and helps the organization build
                                        scalable and innovative digital solutions.
                                    </p>
                                    <div className="social-links">
                                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-4">
                            <div className="team-box">
                                <div className="team-photo">
                                    <img src={accountactImage} alt="Team Member" />
                                </div>
                                <div className="team-info">
                                    <h3>Amanda Jepson</h3>
                                    <div className="designation">
                                        Accountant
                                    </div>
                                    <div className="short-line"></div>
                                    <p>
                                        Amanda manages financial operations and supports the
                                        organization with accurate reporting, planning, and
                                        effective financial management.
                                    </p>
                                    <div className="social-links">
                                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Boardofdirector
