"use client";
import React from "react";
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";
import styles from "./Latest_events.module.css";

const events = [
    {
        image: "/latest_event.svg",
        title: "Introduction to Deep Learning",
    },
    {
        image: "/latest_event.svg",
        title: "IEEEEXTREME18.0",
    },
    {
        image: "/latest_event.svg",
        title: "3-D Design With Fusion 360",
    },
    {
        image: "/latest_event.svg",
        title: "PCB Design",
    },
    {
        image: "/latest_event.svg",
        title: "JM Talks",
    },
];

const Slide = React.memo(function (props) {
    const { dataIndex, swipeTo, offsetFromCenter = 0 } = props; // fallback to 0
    const { image, title } = events[dataIndex];

    const distance = Math.min(Math.abs(offsetFromCenter), 2); // limit range
    const baseY = [-80, -40, -10][distance]; // shift center and nearby
    const scale = [1, 0.9, 0.8][distance];
    const zIndex = 3 - distance;

    return (
        <div
            className={styles.card}
            style={{
                transform: `translateY(${baseY}px) scale(${scale})`,
                transition: "transform 0.4s ease, z-index 0.4s ease",
                zIndex: Number.isNaN(zIndex) ? 0 : zIndex, // fallback safety
            }}
            onClick={() => swipeTo(dataIndex)}
        >
            <img src={image} alt={title} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
        </div>
    );
});

function NavButton({ onClick, isLeft }) {
    return (
        <button
            className={`${styles.navButton} ${
                isLeft ? styles.navButtonLeft : styles.navButtonRight
            }`}
            onClick={onClick}
        >
            {" "}
            <svg
                width="40"
                height="40"
                 viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {isLeft ? (
                    <path
                        d="M8 12H24M8 12L14 6M8 12L14 18"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                ) : (
                    <path
                        d="M24 12H8M24 12L18 6M24 12L18 18"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                )}
            </svg>
        </button>
    );
}

export default function Latest_events() {
    const ref = React.useRef();

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Latest Events</h2>
            <div className={styles.carouselWrapper}>
                <ResponsiveContainer
                    carouselRef={ref}
                    render={(parentWidth, carouselRef) => (
                        <StackedCarousel
                            ref={carouselRef}
                            slideComponent={Slide}
                            slideWidth={400} // smaller to ensure stacking fits
                            slideHeight={500}
                            carouselWidth={parentWidth * 1.3} // increase container size
                            data={events}
                            maxVisibleSlide={5}
                            transitionTime={400}
                            customScales={[1, 0.85, 0.7, 0.55]}
                            useGrabCursor={true}
                            className={styles.carousel}
                        />
                    )}
                />
                <div className={styles.buttonContainer}>
                    <NavButton isLeft onClick={() => ref.current?.goBack()} />
                    <NavButton onClick={() => ref.current?.goNext()} />
                </div>
            </div>
        </div>
    );
}
