import React from "react";
import "./SectionTitle.css";

const SectionTitleWithBR = ({ startText, boldText, endText, secondBoldText }) => {
    return (
        <div className="section-title flex__center">
            <div className="has-br">
                {startText}
                <p>
                    <b> {boldText} </b>
                    {endText}
                    <b> {secondBoldText} </b>
                </p>
            </div>
        </div>
    );
};

export default SectionTitleWithBR;
