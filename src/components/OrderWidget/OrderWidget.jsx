import React, { useState } from "react";
// import orderLogo from "../../assets/orderLogo";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./OrderWidget.css";

const OrderWidget = ({ productInfo }) => {
    // const [selectedPayment, setSelectedPayment] = useState("novaposhta");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [valid, setValid] = useState(true);

    // const handlePaymentChange = (event) => {
    //     setSelectedPayment(event.target.value);
    // };

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
                        <h4 className="offer__subtitle-text">
                            {productInfo.title}
                        </h4>
                    </div>
                </div>

                <div className="price">
                    <div className="price__new">
                        <p>
                            <span className="price__title">Ціна:</span>
                            <span className="price__value">
                                {productInfo.price}
                            </span>
                            <small className="price__currency">грн.</small>
                        </p>
                    </div>
                    {/* <div className="price__old">
                        <span className="price__title">Звичайна ціна:</span>
                        <p>
                            <span className="price__value">
                                {oldPrice}
                            </span>
                            <small className="price__currency">грн.</small>
                        </p>
                    </div>
                    <div className="price__new">
                        <span className="price__title">Ціна сьогодні:</span>
                        <p>
                            <span className="price__value">
                            {newPrice}
                            </span>
                            <small className="price__currency">грн.</small>
                        </p>
                    </div> */}
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
                    </form>

                    {/* <div className="payment">
                        <b className="payment__title">Оберіть спосіб отримання:</b>
                        <div className="block-col payment_selector_field">
                            <label
                                className={`custom-radio ${
                                    selectedPayment === "novaposhta"
                                        ? "selected"
                                        : ""
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value="novaposhta"
                                    checked={selectedPayment === "novaposhta"}
                                    onChange={handlePaymentChange}
                                />
                                <i className="fa-solid fa-check payment_selector checkmark"></i>
                                <img
                                    src={orderLogo.novaPoshta}
                                    width="22"
                                    alt="Novaposhta Icon"
                                />
                                <span className="payment_title">
                                    Накладний платіж
                                </span>
                            </label>
                            <label
                                className={`custom-radio ${
                                    selectedPayment === "selfDelivery"
                                        ? "selected"
                                        : ""
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value="selfDelivery"
                                    checked={selectedPayment === "selfDelivery"}
                                    onChange={handlePaymentChange}
                                />
                                <i className="fa-solid fa-check payment_selector checkmark"></i>
                                <img
                                    src={orderLogo.delivery}
                                    width="22"
                                    alt="SelfDelivery Icon"
                                />
                                <span className="payment_title">
                                    Самовивіз
                                </span>
                            </label>
                            <label
                                className={`custom-radio ${
                                    selectedPayment === "wayforpay"
                                        ? "selected"
                                        : ""
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value="wayforpay"
                                    checked={selectedPayment === "wayforpay"}
                                    onChange={handlePaymentChange}
                                />
                                <i className="fa-solid fa-check payment_selector checkmark"></i>
                                <img
                                    src={orderLogo.wayForPay}
                                    width="22"
                                    alt="WayForPay Icon"
                                />
                                <span className="payment_title">
                                    Онлайн оплата
                                </span>
                            </label>
                        </div>
                    </div> */}
                    <div className="order__button btn-pulse">
                        Замовити зараз
                    </div>
                </div>

                {/* <b className="lastpack__wrapper">Залишилось всього{" "}<span className="lastpack"><span className="lastpack_value">{amount} шт.</span></span>{" "}по акції</b> */}
            </div>
        </div>
    );
};

export default OrderWidget;
