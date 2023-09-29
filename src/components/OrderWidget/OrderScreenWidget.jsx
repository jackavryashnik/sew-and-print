import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./OrderWidget.css";

const OrderScreenWidget = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [valid, setValid] = useState(true);

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

        return phoneNumberPattern.test(phoneNumber);
    };

    const items = document.querySelectorAll(".animation-rotate");

    function handleScroll() {
        for (const item of items) {
            const rect = item.getBoundingClientRect();
            const isVisible =
                rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (isVisible && !item.classList.contains("appear")) {
                item.classList.add("appear");
            }
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return (
        <div className="bottom-widget-wrapper" id="order-bottom">
            <div className="bottom-order-widget flex__center">
                <div className="offer">
                    <div className="offer__subtitle">
                        <h4 className="offer__subtitle-text">Заповніть форму і ми зв'яжемося з вами</h4>
                    </div>
                </div>

                <div className="inputs">
                    <form className="input-form">
                        <div className="input__name">
                            <input
                                type="text"
                                name="name"
                                placeholder="Введіть ім'я"
                                required={true}
                            />
                        </div>
                        <div className="input__email">
                            <input
                                type="email"
                                name="email"
                                placeholder="Введіть email"
                            />
                        </div>
                        <div className="input__phone-number">
                            <PhoneInput
                                country={"ua"}
                                value={phoneNumber}
                                onChange={handleChange}
                                inputProps={{
                                    required: true,
                                }}
                            />
                            {!valid && (
                                <p>Please enter a valid phone number.</p>
                            )}
                        </div>
                        <div className="input__message">
                            <textarea
                                name="message"
                                placeholder="Комментар"
                            ></textarea>
                        </div>
                    </form>

                    <div className="order__button btn-pulse">
                        Надіслати
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderScreenWidget;
