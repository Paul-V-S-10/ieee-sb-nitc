"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Reveal from "../../RevealAnimation/Reveal";
import "swiper/css";
import "swiper/css/navigation";
import "./event-carousel.css";

const eventCards = [
    {
        id: 1,
        title: "Introduction to Deep Learning",
        image: "/latest_event.svg",
    },
    {
        id: 2,
        title: "IEEEEXTREME18.0",
        image: "/latest_event.svg",
    },
    {
        id: 3,
        title: "3-D Design With Fusion 360",
        image: "/latest_event.svg",
    },
    {
        id: 4,
        title: "PCB Design",
        image: "/latest_event.svg",
    },
    {
        id: 5,
        title: "IGood",
        image: "/latest_event.svg",
    },
    {
        id: 6,
        title: "Web Development Bootcamp",
        image: "/latest_event.svg",
    },
    {
        id: 7,
        title: "AI Ethics Seminar",
        image: "/latest_event.svg",
    },
];

export default function EventsCarousel({
    title = "Latest Events",
    showTitle = true,
}) {
    const swiperRef = useRef(null);

    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <div className="events-carousel-container">
          <Reveal>
            {showTitle && <h2 className="events-carousel-title">{title}</h2>}
          </Reveal>
            

            <div className="events-carousel-outer-wrapper">
                <div className="events-carousel-wrapper">
                    <Swiper
                        modules={[Navigation]}
                        centeredSlides={true}
                        initialSlide={2}
                        loop={true}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 2.1,
                                spaceBetween: 60,
                                centeredSlides: true,
                            },
                            480: {
                                slidesPerView: 2.4,
                                spaceBetween: 70,
                                centeredSlides: true,
                            },
                            768: {
                                slidesPerView: 3.5,
                                spaceBetween: 85,
                                centeredSlides: true,
                            },
                            1024: {
                                slidesPerView: 2.8,
                                spaceBetween: 95,
                                centeredSlides: true,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 130,
                                centeredSlides: true,
                            },
                        }}
                        className="events-swiper"
                    >
                        {eventCards.map((event) => (
                            <SwiperSlide
                                key={event.id}
                                className="events-slide"
                            >
                                <div className="events-card">
                                    <div className="events-card-image-container">
                                        <img
                                            src={
                                                event.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={event.title}
                                            className="events-card-image"
                                        />
                                    </div>
                                    <div className="events-card-title-container">
                                        <h3 className="events-card-title">
                                            {event.title}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="events-navigation-container">
                <button
                    onClick={handlePrevClick}
                    className="events-nav-button events-prev-button"
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.1904 0.698242C10.422 0.466647 10.775 0.43937 11.0322 0.610352L11.1367 0.696289L11.1377 0.698242L12.2217 1.78223C12.4861 2.04661 12.4824 2.47997 12.2109 2.74121L6.32715 8.34668L5.42285 9.20898H20.7061C21.0791 9.20924 21.3779 9.50775 21.3779 9.88086V11.4434C21.3777 11.8162 21.0789 12.115 20.7061 12.1152H5.42285L6.32715 12.9766L12.2109 18.582L12.2119 18.583C12.4524 18.8113 12.4859 19.1704 12.3115 19.4336L12.2236 19.54L12.2217 19.541L11.1377 20.625C10.9061 20.8566 10.5531 20.8839 10.2959 20.7129L10.1914 20.627L10.1895 20.625L0.697266 11.1377H0.698242C0.466647 10.9061 0.43937 10.5531 0.610352 10.2959L0.696289 10.1914L0.698242 10.1904L10.1904 0.698242Z"
                            fill="#5F2E7F"
                            stroke="#650F9B"
                        />
                    </svg>
                </button>
                <button
                    onClick={handleNextClick}
                    className="events-nav-button events-next-button"
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.6865 0.698242C11.4549 0.466647 11.1019 0.43937 10.8447 0.610352L10.7402 0.696289L10.7393 0.698242L9.65527 1.78223C9.39089 2.04661 9.3945 2.47997 9.66602 2.74121L15.5498 8.34668L16.4541 9.20898H1.1709C0.797855 9.20924 0.499023 9.50775 0.499023 9.88086V11.4434C0.499283 11.8162 0.798017 12.115 1.1709 12.1152H16.4541L15.5498 12.9766L9.66602 18.582L9.66504 18.583C9.42453 18.8113 9.39102 19.1704 9.56543 19.4336L9.65332 19.54L9.65527 19.541L10.7393 20.625C10.9709 20.8566 11.3239 20.8839 11.5811 20.7129L11.6855 20.627L11.6875 20.625L21.1797 11.1377H21.1787C21.4103 10.9061 21.4376 10.5531 21.2666 10.2959L21.1807 10.1914L21.1787 10.1904L11.6865 0.698242Z"
                            fill="#650F9B"
                            stroke="#650F9B"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
