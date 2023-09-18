import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ startText, boldText, endText, secondBoldText }) => {
    return (
        <div className="section-title flex__center">
            <div>
                {startText}
                <b> {boldText} </b>
                {endText}
                <b> {secondBoldText} </b>
            </div>
        </div>
    );
};

export default SectionTitle;
