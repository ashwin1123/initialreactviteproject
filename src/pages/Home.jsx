import React, { useState, useRef  } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import ratingImage from "../assets/img/rating-image.png";
import awardImage from "../assets/img/awardimg.png";

const industryImages = import.meta.glob(
  "../assets/img/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const getImageByName = (name) => {
  const entry = Object.entries(industryImages).find(([path]) => {
    const fileName = path.split("/").pop();
    return fileName.toLowerCase() === name.toLowerCase();
  });
  return entry ? entry[1] : "";
};

console.log(
  "Images available in src/assets/img:",
  Object.keys(industryImages).map((path) =>
    path.split("/").pop()
  )
);

function Home() {

  const [activeFaq, setActiveFaq] = useState(0);

  const handleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };


  const [activeTab, setActiveTab] = useState("ai");
  const serviceTabs = [
    {
      id: "ai",
      title: "AI & Automation",
      services: [
        "AI Development Services and Solutions",
        "Generative AI & Cognitive Services",
        "Machine Learning",
        "Chatbot Development",
        "AI Agents & Automation Solutions",
        "AI-Powered Mobile App Development",
        "Image Recognition",
        "Robotic Process Automation (RPA)",
        "RAG as a Service",
        "NLP Development",
        "LLM Development",
        "AIOps Solutions",
      ],
    },
    {
      id: "app",
      title: "Application Development",
      services: [
        "Mobile App Development",
        "iOS App Development",
        "Android App Development",
        "Flutter App Development",
        "React Native App Development",
        "Web App Development",
        "App Modernization Services",
        "Enterprise Mobility",
        "SaaS App Development",
        "Progressive Web App Development",
        "MVP Development",
      ],
    },
    {
      id: "data",
      title: "Data & Analytics",
      services: [
        "Data Analytics",
        "Predictive Analytics",
        "Data Management & Engineering",
        "Data Visualization",
        "Data Quality",
        "Data Science",
        "Big Data Analytics",
      ],
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure",
      services: [
        "GCC as a Service",
        "Cloud Application Services",
        "Cloud Implementation Strategy",
        "Cloud Monitoring",
        "Azure Cloud Services",
        "AWS Cloud Services",
        "Cloud Consulting",
        "Cloud Migration",
      ],
    },
    {
      id: "uiux",
      title: "UI/UX Services",
      services: [
        "User Interface (UI) Design",
        "UX Design & Wireframes",
        "UI & UX Consulting",
        "Prototyping & MVP",
        "Proof of Concept (POC) Development",
        "UI Testing",
        "Branding Services",
        "Enterprise UX Design",
      ],
    },
    {
      id: "consulting",
      title: "IT Consulting",
      services: [
        "Digital Transformation",
        "Digital Product Engineering",
        "Custom Software Development",
        "IT Strategy & Planning",
        "DevOps",
        "Cloud & Data Migration Services",
        "Security Risk Assessments",
        "Custom Web and App Development",
      ],
    },
    {
      id: "qa",
      title: "Quality Assurance & Testing",
      services: [
        "Usability Testing",
        "Functional Testing",
        "Performance Testing",
        "Security Testing",
        "Test Automation",
        "Data Quality Assurance",
        "Test Consulting",
        "Security Assessment",
      ],
    },
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      icons: "fas fa-cubes fa-2x text-warning",
      iconColor: "text-warning",
      iconText: "cosmetic choice",
      title: "Transforming the Beauty Consultation Experience",
      description: "Cosmetic choice connects customers with beauty and healthcare professionals effortlessly.",
    },
    {
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
      icons: "fas fa-shopping-cart fa-2x text-warning",
      iconColor: "text-warning",
      iconText: "SNAP MART",
      title: "A Market for Your Daily Shopping Needs",
      description: "An on-demand grocery platform delivering fresh items and household goods directly to your door.",
    },
    {
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1200&auto=format&fit=crop",
      icons: "fas fa-heartbeat fa-2x text-danger",
      iconColor: "text-danger",
      iconText: "HEALTH PLUS",
      title: "Modern Digital Telehealth & Clinic Portal",
      description: "Connecting patients directly with verified medical practitioners for fast online consultations.",
  },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      icons: "fas fa-cubes fa-2x text-warning",
      iconColor: "text-warning",
      iconText: "cosmetic choice",
      title: "Transforming the Beauty Consultation Experience",
      description: "Cosmetic choice connects customers with beauty and healthcare professionals effortlessly.",
    }
  ]


  const industriesSwiperRef = useRef(null);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const industries = [
    {
      title: "Transport & Logistics",
      image: getImageByName("transport.jpg"),
    },
    {
      title: "Real Estate",
      image: getImageByName("realestate.jpg"),
    },
    {
      title: "Education & eLearning",
      image: getImageByName("education.jpg"),
    },
    {
      title: "Travel & Hospitality",
      image: getImageByName("travel.jpg"),
    },
    {
      title: "Healthcare & Pharma",
      image: getImageByName("healthcare.jpg"),
    },
    {
      title: "Fintech & Banking",
      image: getImageByName("fintech.jpg"),
    },
  ];

  const changeBackground = (bgIndex) => {
    const section =
      document.getElementById(
        "industriesSection"
      );

    if (!section) return;

    const backgrounds = [
      "url('src/assets/img/transport-logistics.jpg')",
      "url('src/assets/img/real-estate.jpg')",
      "url('src/assets/img/education.jpg')",
      "url('src/assets/img/travel-hospitality.jpg')",
      "url('src/assets/img/healthcare.jpg')",
      "url('src/assets/img/fintech.jpg')",
    ];

    if (backgrounds[bgIndex]) {
      section.style.backgroundImage =
        backgrounds[bgIndex];
    }
  };


   const testimonials = [
    {
      id: 1,
      name: "Amy",
      image: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg",
      text: "Discovering Be Better was a game-changer! Their unmatched expertise skyrocketed my online presence and credibility. Highly recommended",
    },
    {
      id: 2,
      name: "John",
      image: "https://w7.pngwing.com/pngs/646/829/png-transparent-avatar-man-ico-icon-cartoon-little-boy-avatar-cartoon-character-png-material-child-thumbnail.png",
      text: "The team delivered exactly what we needed. Their expertise, communication and attention to detail were excellent.",
    },
    {
      id: 3,
      name: "Sarah",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IYhSn8Y9S9_HF3tVaYOepJBcrYcd809pBA&s",
      text: "Amazing experience from start to finish. The quality of work and professionalism exceeded our expectations.",
    },
    {
      id: 4,
      name: "Michael",
      image: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg",
      text: "Working with the team was a great experience. They understood our requirements and delivered a beautiful solution.",
    },
    {
      id: 5,
      name: "David",
      image: "https://w7.pngwing.com/pngs/646/829/png-transparent-avatar-man-ico-icon-cartoon-little-boy-avatar-cartoon-character-png-material-child-thumbnail.png",
      text: "Excellent service and great technical knowledge. I would definitely recommend their services.",
    },
    {
      id: 6,
      name: "Emma",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IYhSn8Y9S9_HF3tVaYOepJBcrYcd809pBA&s",
      text: "They transformed our ideas into a practical and modern digital experience. Highly recommended.",
    },
  ];

    return (
        <main>
        <section id="banner" className="mainbanner bg-dark pt-5 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="homebannerpills">
                    1500+ PROJECTS &nbsp;&nbsp;<span>·</span> &nbsp;&nbsp;AI-FIRST ENGINEERING &nbsp;&nbsp;<span>·</span> &nbsp;&nbsp;GLOBAL DELIVERY &nbsp;&nbsp;<span>·</span> &nbsp;&nbsp;19+ YEARS
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <h1 className=" font-weight-bold index-banner">
                    <span className="homeBanner_title_theme">AI-Driven</span> 
                      <br className="d-block" />Digital Engineering &amp;<br className="d-block" /> Software Development<br className="d-block" /><span className="homeBannerNewBlackCnt_tag p-2"><span>Partner</span>
                    </span>
                    <br className="d-block" />
                    <span className="homeBanner_bottom_content">
                      for Startups, Enterprises &amp; Global Businesses
                    </span>
                  </h1>
                  <p className="homeBanner_description">
							      Delivering enterprise software, <span className="text-white font-weight-bold">Generative AI solutions</span>, cloud-native applications,
							      digital products, and <span className="text-white font-weight-bold">dedicated development teams</span> for businesses worldwide.
						      </p>
                  <div className="bookAfreeConsultation mt-5">
                    <button className="btn btn-primary bookTechnologyConsultant">Book a Free Technology Consultation</button>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section id="seqMaqItemMarquee" className="seqMaqItem">
            <div className="mqTrack">
                <div className="mqitem"><i className="fas fa-circle"></i>John Deere</div>
                <div className="mqitem"><i className="fas fa-circle"></i>Caterpillar</div>
                <div className="mqitem"><i className="fas fa-circle"></i>IBM</div>
                <div className="mqitem"><i className="fas fa-circle"></i>UFO</div>
                <div className="mqitem"><i className="fas fa-circle"></i>AIRMOVE</div>
                <div className="mqitem"><i className="fas fa-circle"></i>Cab-e</div>
                <div className="mqitem"><i className="fas fa-circle"></i>flydocs</div>
                <div className="mqitem"><i className="fas fa-circle"></i>toffee</div>
                <div className="mqitem"><i className="fas fa-circle"></i>Kurd Taxi</div>
                <div className="mqitem"><i className="fas fa-circle"></i>VFC</div>
                <div className="mqitem"><i className="fas fa-circle"></i>Good Guys</div>
                <div className="mqitem"><i className="fas fa-circle"></i>Monay</div>
                <div className="mqitem"><i className="fas fa-circle"></i>CURIOUSRUBIK</div>
                <div className="mqitem"><i className="fas fa-circle"></i>Stablish</div>
            </div>
        </section>
        <section id="mobileAppDevelope" className="endtoendMobileDevelop text-center pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="rating-star mb-3">
                            <img src={ratingImage} className="img-fluid" />
                            <span className="homeBannerRating_stars_value">4.5 stars</span>
                        </div>
                        <div className="homeBannerNewRating_trust mb-3">Trusted by Startups, Enterprises &amp; Global Brands</div>
                        <div className="homeRating_meta">
                            <span><img src={ratingImage} className="mr-2" />Free 30-Min Strategy Session</span> &nbsp;&nbsp;
                            <span><img src={ratingImage} className="mr-2" />Live Video Meeting</span> &nbsp;&nbsp;
                            <span><img src={ratingImage} className="mr-2" />No Obligation</span>
                        </div>
                        <div className="homeBanner_exploreAI">
                            <span className="mr-2">◆</span>
                             Discuss your project • Explore AI &amp; Digital Solutions • Get Expert Recommendations 
                        </div>
                    </div>
                </div>
                <div className="row rowProjectNumberPage">
                    <div className="col-md-3">
                        <div className="projectNumber">1500+</div>
                        <div className="projectName">Projects</div>
                    </div>
                    <div className="col-md-3">
                        <div className="projectNumber">AI-FIRST</div>
                        <div className="projectName">Engineering</div>
                    </div>
                    <div className="col-md-3">
                        <div className="projectNumber">GLOBAL</div>
                        <div className="projectName">Delivery</div>
                    </div>
                    <div className="col-md-3">
                        <div className="projectNumber">8+</div>
                        <div className="projectName">Years</div>
                    </div>
                    <div className="col-md-12"><h2 className="exclusiveApp_title mt-5 mb-5 font-weight-bold"> End-to-End Mobile App &amp; Web Development Services Powered by AI </h2></div>
                </div>
            </div>
        </section>
        <section
        className="swiperslider-section pt-5 pb-5"
        id="swiperslider"
      >

        <div className="container-fluid">

          <div className="services-slider-section">

            <div className="swiper-button-prev-custom service-prev">
              <i className="fas fa-arrow-left"></i>
            </div>

            <div className="swiper-button-next-custom service-next">
              <i className="fas fa-arrow-right"></i>
            </div>


            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                prevEl: ".service-prev",
                nextEl: ".service-next",
              }}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
            >

              <SwiperSlide>
                <div
                  className="service-card"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/400/600?random=1')",
                  }}
                >
                  <div className="service-content">
                    <h2 className="service-title font-weight-bold">
                      Mobile App
                      <br />
                      Development
                    </h2>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div
                  className="service-card"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/400/600?random=2')",
                  }}
                >
                  <div className="service-content">
                    <h2 className="service-title font-weight-bold">
                      Web
                      <br />
                      Development
                    </h2>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div
                  className="service-card"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/400/600?random=3')",
                  }}
                >
                  <div className="service-content">
                    <h2 className="service-title font-weight-bold">
                      Hire Dedicated
                      <br />
                      Developers
                    </h2>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div
                  className="service-card"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/400/600?random=4')",
                  }}
                >
                  <div className="service-content">
                    <h2 className="service-title font-weight-bold">
                      DevOps Azure
                      <br />
                      AWS &amp; GCP
                    </h2>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div
                  className="service-card"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/400/600?random=5')",
                  }}
                >
                  <div className="service-content">
                    <h2 className="service-title font-weight-bold">
                      Custom Software
                      <br />
                      Development
                    </h2>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div
                  className="service-card"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/400/600?random=6')",
                  }}
                >
                  <div className="service-content">
                    <h2 className="service-title font-weight-bold">
                      AI &amp; ML
                      <br />
                      Solutions
                    </h2>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>

          </div>


          {/* =====================================================
              RECENT WORK
          ===================================================== */}

          <div className="row mt-5">

            <div className="col-md-12 text-center">

              <h2 className="text-white font-weight-bold">
                Explore Our Recent Work
              </h2>

              <p className="text-white">
                Customer Experience is everything! We design &amp; create
                solutions by spotting customers’ actions, emotions, and unmet
                needs. We make enterprises that impact lives.
              </p>

            </div>


            <div className="col-md-12">

              <div className="project-slider-wrapper">

                <div className="swiper-button-prev-custom project-prev">
                  <i className="fas fa-arrow-left"></i>
                </div>

                <div className="swiper-button-next-custom project-next">
                  <i className="fas fa-arrow-right"></i>
                </div>


                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={{
                    prevEl: ".project-prev",
                    nextEl: ".project-next",
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={25}
                  slidesPerView={1}
                  className="myProjectSwiper"
                >

                  {projects.map((project, index) => (

                    <SwiperSlide key={index}>

                      <div
                        className="project-card"
                        style={{
                          backgroundImage: `url('${project.image}')`,
                        }}
                      >

                        <div className="project-content">

                          <div className="project-logo">

                            <i
                              className={`${project.icon} fa-2x ${project.iconColor}`}
                            ></i>

                            <span>{project.logo}</span>

                          </div>

                          <h2 className="project-title">
                            {project.title}
                          </h2>

                          <p className="project-desc">
                            {project.description}
                          </p>

                          <a
                            href="#"
                            className="btn btn-red"
                            onClick={(e) => e.preventDefault()}
                          >
                            View Project Details
                          </a>

                        </div>

                      </div>

                    </SwiperSlide>

                  ))}

                </Swiper>

              </div>

            </div>


            <div className="col-md-12 text-center mt-5">

              <h2 className="text-white font-weight-bold">
                We’re the Masters of Next-Gen Technologies
              </h2>

              <p className="text-white">
                Feel the disruption. Experience the future now with our
                innovative, user-friendly solutions.
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            SERVICE TABS
        ===================================================== */}

        <div className="container mt-5">

          <div className="row">

            <div className="col-md-12">

              <div className="custom-tabs-container">

                <ul
                  className="nav nav-tabs custom-nav-tabs"
                  id="servicesTab"
                  role="tablist"
                >

                  {serviceTabs.map((tab) => (

                    <li className="nav-item" key={tab.id}>

                      <button
                        type="button"
                        className={`nav-link ${
                          activeTab === tab.id ? "active" : ""
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.title}
                      </button>

                    </li>

                  ))}

                </ul>

              </div>


              {/* TAB CONTENT */}

              <div className="tab-content" id="servicesTabContent">

                {serviceTabs.map((tab) => (

                  <div
                    key={tab.id}
                    className={`tab-pane ${
                      activeTab === tab.id ? "show active" : ""
                    }`}
                  >

                    <div className="row">

                      {tab.services.map((service, index) => (

                        <div
                          className="col-lg-3 col-md-6 col-12 mb-3"
                          key={index}
                        >

                          <div className="service-card1">

                            <h6 className="service-title">
                              {service}
                            </h6>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


 <section id="industriesSection" className="industries-section" style={{ backgroundImage: industries[activeIndustry]?.image
            ? `url("${industries[activeIndustry].image}")`
            : "none",
        }}
      >
      <h2 className="section-heading">
        Industries We Serve
      </h2>
      <div className="swiper-button-prev-custom industries-prev">
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="swiper-button-next-custom industries-next">
        <i className="fas fa-arrow-right"></i>
      </div>
      <div className="swiper-container-custom">

          <Swiper modules={[Navigation]}
            navigation={{
              nextEl: ".industries-next",
              prevEl: ".industries-prev",
            }}

            slidesPerView={4}

            spaceBetween={0}

            loop={true}

            breakpoints={{
              320: {
                slidesPerView: 1.2,
              },

              576: {
                slidesPerView: 2,
              },

              992: {
                slidesPerView: 3,
              },

              1200: {
                slidesPerView: 4,
              },
            }}

            onSlideChange={(swiper) => {
              setActiveIndustry(swiper.realIndex);
            }}

            className="myIndustriesSwiper"
          >

            {industries.map((industry, index) => (

              <SwiperSlide
                key={index}
                data-bg-index={index}

                onMouseEnter={() => {
                  setActiveIndustry(index);
                }}
              >

                <div className="industry-content">
                  <h3 className="industry-title">
                    {industry.title}
                  </h3>
                  <span className="arrow-icon">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                  <div>
                    <a href="#" className="btn-know-more" onClick={(e) => { e.preventDefault(); }} > Know More </a>
                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>


       <section className="whatsnewatourcompany pt-5 pb-5" id="whatsnewcompany">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="text-white font-weight-bold">Chronicles of Our Award-Winning Journey</h2>
              <p className="text-white">Setting higher standards to drive positive change. Here are some recent recognitions that highlight our commitment to excellence.</p>
              <img src={awardImage} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

             <section
        className="testimonial-section pt-5 pb-5"
        id="testimonials"
      >

        <div className="container">

          {/* Heading */}

          <h2 className="section-title mb-0">
            What Our Clients Say
          </h2>

          <p>
            Read the voices of trust, satisfaction, and motivation
            helping us to navigate our next innovation.
          </p>


          {/* =========================
              TESTIMONIAL SLIDER
          ========================== */}

          <Swiper

            className="testimonial-wrapper"

            modules={[
              Autoplay,
              Pagination
            ]}

            slidesPerView={1}

            slidesPerGroup={1}

            spaceBetween={30}

            loop={true}

            speed={1300}

            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}

            pagination={{
              clickable: true,
            }}

            breakpoints={{

              /* Mobile */

              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },

              /* Small devices */

              480: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },

              /* Tablet / Desktop */

              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },

            }}
          >

            {testimonials.map((testimonial) => (

              <SwiperSlide
                key={testimonial.id}
                className="testimonial-items"
              >

                {/* Profile Image */}

                <div className="testimonial-img">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                  />

                </div>


                {/* Testimonial Text */}

                <p className="testimonial-text">
                  {testimonial.text}
                </p>


                {/* Name */}

                <h3 className="testimonial-title">
                  {testimonial.name}
                </h3>


                {/* Rating */}

                <div className="review-stars">

                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>
      
 <section className="faq-section frequently-ask-que bg-light-gray pt-5 pb-5" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
                <h2 class="section-title mb-5 text-center font-weight-bold">Frequently Asked Questions</h2>
              <div id="accordionExample">

                {/* FAQ 1 */}
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-block d-flex justify-content-between align-items-center text-decoration-none text-black font-weight-bolder"
                        type="button"
                        onClick={() => handleFaq(0)}
                        aria-expanded={activeFaq === 0}
                        aria-controls="collapseOne"
                      >
                        <span>
                          What services does the company provide?
                        </span>

                        <span className="faq-icon">
                          {activeFaq === 0 ? "−" : "+"}
                        </span>
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className={`faq-collapse ${
                      activeFaq === 0 ? "show" : ""
                    }`}
                    aria-labelledby="headingOne"
                  >
                    <div className="card-body">
                      Company provides AI development, mobile and web
                      application development, custom software development,
                      cloud services, data and analytics, UI/UX design,
                      quality assurance, digital transformation and dedicated
                      developer hiring. The company builds solutions for
                      startups, growing businesses and enterprises across
                      industries such as healthcare, finance, logistics,
                      retail, real estate and education.
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-block d-flex justify-content-between align-items-center text-decoration-none text-black font-weight-bolder"
                        type="button"
                        onClick={() => handleFaq(1)}
                        aria-expanded={activeFaq === 1}
                        aria-controls="collapseTwo"
                      >
                        <span>
                          How much does custom software development cost?
                        </span>

                        <span className="faq-icon">
                          {activeFaq === 1 ? "−" : "+"}
                        </span>
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseTwo"
                    className={`faq-collapse ${
                      activeFaq === 1 ? "show" : ""
                    }`}
                    aria-labelledby="headingTwo"
                  >
                    <div className="card-body">
                      Custom software development costs depend on the number
                      of features, design complexity, integrations, platforms,
                      security requirements, technology stack and development
                      team required. Company reviews the business goals, users
                      and essential features during discovery before providing
                      a project-specific estimate. A precise cost cannot be
                      confirmed without reviewing the complete project scope.
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-block d-flex justify-content-between align-items-center text-decoration-none text-black font-weight-bolder"
                        type="button"
                        onClick={() => handleFaq(2)}
                        aria-expanded={activeFaq === 2}
                        aria-controls="collapseThree"
                      >
                        <span>
                          How long does it take to develop custom software?
                        </span>

                        <span className="faq-icon">
                          {activeFaq === 2 ? "−" : "+"}
                        </span>
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseThree"
                    className={`faq-collapse ${
                      activeFaq === 2 ? "show" : ""
                    }`}
                    aria-labelledby="headingThree"
                  >
                    <div className="card-body">
                      The timeline depends on the product scope, technical
                      complexity, integrations, testing requirements and
                      approval process. Company divides projects into
                      planning, design, development, testing and deployment
                      stages before providing a realistic schedule. Its AI
                      services page indicates approximately four to six weeks
                      for focused AI modules, two to four months for
                      mid-complexity software and four to six months or longer
                      for enterprise platforms.
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-block d-flex justify-content-between align-items-center text-decoration-none text-black font-weight-bolder"
                        type="button"
                        onClick={() => handleFaq(3)}
                        aria-expanded={activeFaq === 3}
                        aria-controls="collapseFour"
                      >
                        <span>
                          Can Company build an MVP or proof of concept?
                        </span>

                        <span className="faq-icon">
                          {activeFaq === 3 ? "−" : "+"}
                        </span>
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseFour"
                    className={`faq-collapse ${
                      activeFaq === 3 ? "show" : ""
                    }`}
                    aria-labelledby="headingFour"
                  >
                    <div className="card-body">
                      Yes. Company offers MVP and proof-of-concept development
                      for businesses that need to validate an idea, workflow
                      or technology before making a larger investment. The
                      process focuses on essential features, user requirements
                      and technical feasibility, creating a practical
                      foundation for testing, feedback, funding discussions
                      and future product development.
                    </div>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="card">
                  <div className="card-header" id="headingFive">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-block d-flex justify-content-between align-items-center text-decoration-none text-black font-weight-bolder"
                        type="button"
                        onClick={() => handleFaq(4)}
                        aria-expanded={activeFaq === 4}
                        aria-controls="collapseFive"
                      >
                        <span>
                          Does Company provide maintenance and support after
                          launch?
                        </span>

                        <span className="faq-icon">
                          {activeFaq === 4 ? "−" : "+"}
                        </span>
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseFive"
                    className={`faq-collapse ${
                      activeFaq === 4 ? "show" : ""
                    }`}
                    aria-labelledby="headingFive"
                  >
                    <div className="card-body">
                      Yes. We provide ongoing maintenance and support to keep
                      your application secure, stable, and compatible with
                      changing technologies. Our post-launch services can
                      include bug fixes, performance optimization, security
                      updates, operating system compatibility, cloud monitoring,
                      feature enhancements, and scalability improvements based
                      on your business needs.
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

  </main>
    );
}

export default Home;