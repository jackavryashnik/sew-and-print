import React from "react";
import { useInView } from 'react-intersection-observer';
import "./TopLine.css"

const TopLine = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
            <div ref={ref} className={`top-line ${inView ? 'top-line-active' : ''}`}>
                <div
                    className="top-line__item wow animate__animated animate__flipInX"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                    style={{
                        visibility: "visible",
                        animationDuration: "1s",
                        animationDelay: "0.2s",
                        animationName: "flipInX",
                    }}
                >
                    <i
                        className="fa-solid fa-star"
                        style={{ color: "orange" }}
                    ></i>
                    <p>100% гарантія якості</p>
                </div>
                <div
                    className="top-line__item wow animate__animated animate__flipInX"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                    style={{
                        visibility: "visible",
                        animationDuration: "1s",
                        animationDelay: "0.4s",
                        animationName: "flipInX",
                    }}
                >
                    <i
                        className="fa-solid fa-leaf"
                        style={{ color: "seagreen" }}
                    ></i>
                    <p>Екологічно чисті матеріали</p>
                </div>
                <div
                    className="top-line__item wow animate__animated animate__flipInX"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                    style={{
                        visibility: "visible",
                        animationDuration: "1s",
                        animationDelay: "0.6s",
                        animationName: "flipInX",
                    }}
                >
                    <i
                        className="fa-solid fa-heart"
                        style={{ color: "#f02400" }}
                    ></i>
                    <p>
                        <nobr>10 000+</nobr> задоволених клієнтів
                    </p>
                </div>
            </div>
    );
};

export default TopLine;
