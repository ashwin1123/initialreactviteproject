import React from "react";
import workBenifits from "../assets/img/companySuccess.png";
const Lifeatcompany = () => {
  return (
    <main>

      <section className="lifeatcompany-page pt-5 pb-5 h-100">
            <div className="space"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 overviewHeading">
                        <h1 className="mainBannerHeading font-weight-bold ">
                            <span className="">Life at</span> 
                                <span className="homeBannerNewBlackCnt_tag p-2"><span>Company</span>
                            </span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br /> Aenean commodo ligula eget dolor. </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="lifeevent-success-content pt-5 pb-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="eventDescription">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
                    </div>
                    <div className="col-md-12">
                       <img src={workBenifits} className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="font-weight-bold pt-5 workBenfits">
                            <span className="">Benefits of Working With</span>
                        </h2>
                    </div>
                    <div className="col-md-12 companyBenifitsWork  mt-5">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="days5-per0-week">
                                    <div className="icon"><i className="fas  fa-calendar"></i></div>
                                    <h4>5-Day Work Week</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div className="growthOpportunity">
                                    <div className="icon"><i className="fas fa-signal"></i></div>
                                    <h4>Growth Opportunity</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="flexibleWork">
                                    <div className="icon"><i className="fas fa-universal-access"></i></div>
                                    <h4>Flexible Working Hours</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="teamBuilding">
                                    <div className="icon"><i className="fas fa-handshake"></i></div>
                                    <h4>Team Building</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div className="workEnvironment">
                                    <div className="icon"><i className="fab fa-envira"></i></div>
                                    <h4>Healthy Work Environment</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="workHierarchy">
                                    <div className="icon"><i className="fas fa-sitemap"></i></div>
                                    <h4>Horizontal Work Hierarchy</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
  );
};

export default Lifeatcompany;