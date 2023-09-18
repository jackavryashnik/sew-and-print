import React from "react";
import { useInView } from 'react-intersection-observer';
import { BottomOrderWidget } from "../../components";
import "./OrderScreen.css";

const OrderScreen = ({ fetchedData }) => {    
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
        <div ref={ref} className="order-screen section__padding" id="order">
                <div className={`${inView ? 'bottom-order-widget-active' : ''}`}>
                    <BottomOrderWidget fetchedData={fetchedData} />
                </div>
        </div>
    );
};

export default OrderScreen;
