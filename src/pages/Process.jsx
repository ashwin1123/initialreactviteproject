import React from 'react'

import yoyAISoftwareimag from "../assets/img/agile.webp"
import requiredDiscovery from "../assets/img/process-discovery.jpg"
import requireUiUxDesign from "../assets/img/process-uiux.jpg"
import requireSoftwareDevelop from "../assets/img/process-development.jpg"
import requireTestingDevelop from "../assets/img/process-testing.jpg"
import requireDeployandLaunch from "../assets/img/process-deployment.jpg"
import requireSupprtandmaintain from "../assets/img/process-support.jpg"

import photoshopImage from "../assets/img/photoshop.png"
import illustratorImage from "../assets/img/illustrator.png"
import xdImage from "../assets/img/adobe-xd.png"
import aftereffectImage from "../assets/img/after-effects.png"
import sketchImage from "../assets/img/sketch.png"
import invisionImage from "../assets/img/invision.png"


import javaImage from "../assets/img/java.png"
import kotlinImage from "../assets/img/kotlin.png"
import swiftImage from "../assets/img/swift.png"
import sqliteImage from "../assets/img/sqlite.png"
import reactnativeImage from "../assets/img/react-native.png"
import flutterImage from "../assets/img/flutter.png"
import objectivecImage from "../assets/img/objective-c.png"


import angularjsImage from "../assets/img/angularjs.png"
import nodejsImage from "../assets/img/nodejs.png"
import reactjsImage from "../assets/img/reactjs.png"
import phpImage from "../assets/img/php.png"
import magentoImage from "../assets/img/magento.png"


import awsImage from "../assets/img/aws.png"
import azureImage from "../assets/img/azure.png"
import googlecloudImage from "../assets/img/google-cloud.png"


import phpbackendImage from "../assets/img/php-backend.png"
import cppImage from "../assets/img/cpp.png"
import railsImage from "../assets/img/rails.png"
import rubyImage from "../assets/img/ruby.png"
import javabackendImage from "../assets/img/java-backend.png"

import mongodbImage from "../assets/img/mongodb.png"
import cassandraImage from "../assets/img/cassandra.png"
import postgresqlImage from "../assets/img/postgresql.png"
import sqlserverImage from "../assets/img/sql-server.png"
import oracleImage from "../assets/img/oracle.png"
import sqlitedatabaseImage from "../assets/img/sqlite-database.png"
import apacheImage from "../assets/img/apache.png"



const Process = () => {
  return (
    <main>
      <section className="boardOfDirectorMessage pt-5 pb-5">
            <div className="space"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-left overviewHeading">
                        <h1 className="mainBannerHeading font-weight-bold ">
                            <span className="">Our Development</span> 
                                <span className="homeBannerNewBlackCnt_tag p-2"><span> Methodology</span>
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
                    <div className="col-md-6 processHeading text-center">
                        <h2><strong>Your End-To-End AI-Driven Software Development and Digital Transformation Partner</strong></h2>
                    </div>
                    <div className="col-md-6">
                        <img src={yoyAISoftwareimag} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="execution-structure company-technical-staff pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-white text-center">
                        <h2 className='text-white'>Our Project Execution Structure</h2>
                        <p>We embrace Agile Methodology- to encourage transparent communication; to foster collaboration; to combat uncertainty and chaos; to cope with change.</p>
                    </div>
                    <div className="col-md-12 text-center">
                        <div className="process-wrapper">
                        <div className="process-item">
                            <div className="process-number">01</div>
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="process-image">
                                        <img src={requiredDiscovery}
                                            alt="Requirement Discovery"
                                            className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="process-content">
                                        <span>STEP 01</span>
                                        <h3>Requirement &amp; Discovery</h3>
                                        <p>
                                            We understand your business goals, project
                                            requirements, target audience, and technical
                                            expectations to create a clear project roadmap.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="process-number">02</div>
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="process-image">
                                        <img src={requireUiUxDesign} alt="UI UX Design" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="process-content">
                                        <span>STEP 02</span>
                                        <h3>UI/UX Design</h3>
                                        <p>
                                            Our designers create intuitive user experiences,
                                            wireframes, prototypes, and visually engaging
                                            interfaces focused on usability and conversion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="process-number">03</div>
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="process-image">
                                        <img src={requireSoftwareDevelop} alt="Software Development" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="process-content">
                                        <span>STEP 03</span>
                                        <h3>Development</h3>
                                        <p>
                                            Our development team transforms the approved
                                            designs into secure, scalable, high-performance
                                            software using modern technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="process-number">04</div>
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="process-image">
                                        <img src={requireTestingDevelop}
                                            alt="Testing and Quality Assurance"
                                            className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="process-content">
                                        <span>STEP 04</span>
                                        <h3>Testing &amp; Quality Assurance</h3>
                                        <p>
                                            We perform comprehensive functional, usability,
                                            performance, security, and compatibility testing
                                            to ensure a reliable final product.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="process-number">05</div>
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="process-image">
                                        <img src={requireDeployandLaunch} alt="Deployment" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="process-content">
                                        <span>STEP 05</span>
                                        <h3>Deployment &amp; Launch</h3>
                                        <p>
                                            After final approval, we deploy the solution
                                            to the production environment and ensure a
                                            smooth and successful launch.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="process-number">06</div>
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="process-image">
                                        <img src={requireSupprtandmaintain} alt="Support and Maintenance" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="process-content">
                                        <span>STEP 06</span>
                                        <h3>Support &amp; Maintenance</h3>
                                        <p>
                                            We continuously monitor, maintain, improve,
                                            and support your software to keep it secure,
                                            stable, and future-ready.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="company-info-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mb-5"><h2><strong>Our Deliverables</strong></h2></div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="far fa-clipboard"></i>
                        </div>
                        <h3>SRS Draft and Approval</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-notes-medical"></i>
                        </div>
                        <h3>Final SRS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-clipboard-check"></i>
                        </div>
                        <h3>SRS Approval</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-paste"></i>
                        </div>
                        <h3>Project Spearheads</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fab fa-connectdevelop"></i>
                        </div>
                        <h3>Wireframing and Approval</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3>Development</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-file-alt"></i>
                        </div>
                        <h3>Testing</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-clipboard-check"></i>
                        </div>
                        <h3>Final Version & Approval</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h3>Launch</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="aboutThe-Company pt-5 pb-5 text-center text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4">
                    <h2 className='text-white'>Tools & Technologies We Use For Mobile & Web App Development</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="row team-work-profile">
                    <div className="col-md-12 technologies_item mb-5">
                        <h4>Design</h4>
                        <ul>
                            <li><img src={photoshopImage} className="mr-2"/> Photoshop</li>
                            <li><img src={illustratorImage} className="mr-2"/> Illustrator</li>
                            <li><img src={xdImage} className="mr-2"/> Adobe XD</li>
                            <li><img src={aftereffectImage} className="mr-2"/> After Effects</li>
                            <li><img src={sketchImage} className="mr-2"/> Sketch</li>
                            <li><img src={invisionImage} className="mr-2"/> Invision</li>
                        </ul>
                    </div>
                    <div className="col-md-12 technologies_item mb-5">
                        <h4>Mobile</h4>
                        <ul>
                            <li><img src={javaImage} className="mr-2"/> Java</li>
                            <li><img src={kotlinImage} className="mr-2"/> Kotlin</li>
                            <li><img src={swiftImage} className="mr-2"/> Swift</li>
                            <li><img src={sqliteImage} className="mr-2"/> SQLite</li>
                            <li><img src={reactnativeImage} className="mr-2"/> React Native</li>
                            <li><img src={flutterImage} className="mr-2"/> Flutter</li>
                            <li><img src={objectivecImage} className="mr-2"/> Objective-C</li>
                        </ul>
                    </div>
                    <div className="col-md-12 technologies_item mb-5">
                        <h4>Web</h4>
                        <ul>
                            <li><img src={angularjsImage} className="mr-2"/> AngularJS</li>
                            <li><img src={nodejsImage} className="mr-2"/> NodeJS</li>
                            <li><img src={reactjsImage} className="mr-2"/> ReactJS</li>
                            <li><img src={phpImage} className="mr-2"/> PHP</li>
                            <li><img src={magentoImage} className="mr-2"/> Magento</li>
                        </ul>
                    </div>
                    <div className="col-md-12 technologies_item mb-5">
                        <h4>Platform</h4>
                        <ul>
                            <li><img src={awsImage} className="mr-2"/> AWS</li>
                            <li><img src={azureImage} className="mr-2"/> Azure</li>
                            <li><img src={googlecloudImage} className="mr-2"/> Google Cloud</li>
                        </ul>
                    </div>
                    <div className="col-md-12 technologies_item mb-5">
                        <h4>Technologies</h4>
                            <ul>
                                <li><img src={phpbackendImage} className="mr-2"/> PHP</li>
                                <li><img src={cppImage} className="mr-2"/> C++</li>
                                <li><img src={railsImage} className="mr-2"/> Rails</li>
                                <li><img src={rubyImage} className="mr-2"/> Ruby</li>
                                <li><img src={javabackendImage} className="mr-2"/> Java</li>
                            </ul>
                        </div>
                        <div className="col-md-12 technologies_item mb-5">
                            <h4>Server Side</h4>
                            <ul>
                                <li><img src={mongodbImage} className="mr-2"/> MongoDB</li>
                                <li><img src={cassandraImage} className="mr-2"/> Cassandra</li>
                                <li><img src={postgresqlImage} className="mr-2"/> Postgre SQL</li>
                                <li><img src={sqlserverImage} className="mr-2"/> SQL Server</li>
                                <li><img src={oracleImage} className="mr-2"/> Oracle</li>
                                <li><img src={sqlitedatabaseImage} className="mr-2"/> SQLite</li>
                                <li><img src={apacheImage} className="mr-2"/> Apache</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Process
