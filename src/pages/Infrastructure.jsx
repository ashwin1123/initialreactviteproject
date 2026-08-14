import React, { useEffect, useState } from "react";

import diningArea from "../assets/img/dining-area.jpg";
import conferenceRoom from "../assets/img/conference-room.jpg";
import receptionArea from "../assets/img/reception-area.jpg";
import libraryLounge from "../assets/img/library-lounge.jpg";
import officeCorridor from "../assets/img/office-corridor.jpg";
import privateOffice from "../assets/img/private-office.jpg";
import discussionArea from "../assets/img/discussion-area.jpg";
import meetingRoom from "../assets/img/meeting-room.jpg";

const Infrastructure = () => {
    const galleryImages = [
        diningArea,
        conferenceRoom,
        receptionArea,
        libraryLounge,
        officeCorridor,
        privateOffice,
        diningArea,
        discussionArea,
        conferenceRoom,
        meetingRoom
    ];
    const galleryTitles = [
        "Dining Area",
        "Conference Room",
        "Reception Area",
        "Library Lounge",
        "Office Corridor",
        "Private Office",
        "Dining Area",
        "Discussion Area",
        "Conference Room",
        "Meeting Room"
    ];
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsLightboxOpen(true);
    };
    
    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };
    
    const showPrevious = (event) => {
        event.stopPropagation();
        setCurrentIndex((previousIndex) => {
            if (previousIndex === 0) {
                return galleryImages.length - 1;
            }
            return previousIndex - 1;
        });
    };
    
    const showNext = (event) => {
        event.stopPropagation();
        setCurrentIndex((previousIndex) => {
            if (previousIndex === galleryImages.length - 1) {
                return 0;
            }
            return previousIndex + 1;
        });
    };

    useEffect(() => {
        if (!isLightboxOpen) {
            return;
        }
        const handleKeyboard = (event) => {
            if (event.key === "Escape") {
                setIsLightboxOpen(false);
            }
            if (event.key === "ArrowLeft") {
                setCurrentIndex((previousIndex) => {
                    if (previousIndex === 0) {
                        return galleryImages.length - 1;
                    }
                    return previousIndex - 1;
                });

            }

            if (event.key === "ArrowRight") {
                setCurrentIndex((previousIndex) => {
                    if (previousIndex === galleryImages.length - 1) {
                        return 0;
                    }
                    return previousIndex + 1;
                });
            }

        };

        document.addEventListener(
            "keydown",
            handleKeyboard
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyboard
            );
        };

    }, [isLightboxOpen]);

    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isLightboxOpen]);


    return (
        <>
        <section className="boardOfDirectorMessage pt-5 pb-5 infrastructureHeading">
            <div className="space"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-left overviewHeading">
                            <h1 className="mainBannerHeading font-weight-bold">
                                <span>
                                    Company&nbsp;
                                </span>
                                <span className="homeBannerNewBlackCnt_tag p-2">
                                    <span>
                                        Infrastructure
                                    </span>
                                </span>
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                Aenean commodo ligula eget dolor.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="infrastructure-gallery" className="pt-5">
                <div className="container">
                    <div className="row">
                        {galleryImages.map((image, index) => (
                            <div className="col-md-4 mb-4" key={index} >
                                <div className="infrastructure-image" onClick={() => openLightbox(index)}>
                                    <img src={image} alt={galleryTitles[index]} className="img-fluid rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {isLightboxOpen && (

                <div className="react-infrastructure-lightbox" onClick={closeLightbox}>
                    <button type="button" className="react-lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
                    <button type="button" className="react-lightbox-prev" onClick={showPrevious} aria-label="Previous image">
                        &#10094;
                    </button>
                    <div className="react-lightbox-content"  onClick={(event) => { event.stopPropagation();}}>
                        <img src={galleryImages[currentIndex]} alt={galleryTitles[currentIndex]} className="react-lightbox-image"/>
                        <div className="react-lightbox-caption">
                            <span>
                                {galleryTitles[currentIndex]}
                            </span>

                            <small>
                                {currentIndex + 1} / {galleryImages.length}
                            </small>
                        </div>
                    </div>
                    <button type="button" className="react-lightbox-next" onClick={showNext} aria-label="Next image">
                        &#10095;
                    </button>
                </div>
            )}
        </>
    );
};

export default Infrastructure;