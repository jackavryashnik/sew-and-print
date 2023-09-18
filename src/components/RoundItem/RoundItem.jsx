import React from "react";
import "./RoundItem.css";

const RoundItem = ({ step, image, alt, text, deliveryText }) => {
    return (
        <div className="round-item">
            <div className="circle">
                {typeof image === "string" ? (
                    <img className="circle__img" src={image} alt={alt}/>
                ) : (
                    image
                )}
            </div>
            <h3 className="round-item__step">{step}</h3>
            <p className="round-item__description">{text}</p>
            <p className="round-item__description-delivery">{deliveryText}</p>
        </div>
    );
};

export default RoundItem;
