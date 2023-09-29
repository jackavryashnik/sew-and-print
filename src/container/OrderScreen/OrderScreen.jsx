import React from "react";
import { OrderScreenWidget } from "../../components";
import "./OrderScreen.css";

const OrderScreen = () => {    
    return (
        <div className="order-screen section__padding" id="order">
                <>
                    <OrderScreenWidget />
                </>
        </div>
    );
};

export default OrderScreen;
