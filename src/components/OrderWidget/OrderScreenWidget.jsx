import React, { useState } from "react";
import axios from "axios";
import { Alert } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./OrderWidget.css";

const OrderScreenWidget = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible && !item.classList.contains("appear")) {
        item.classList.add("appear");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  const tgBot = async (e) => {
    e.preventDefault();

    const TOKEN = "6586691947:AAGFAkEgqhiDmFHREDHw1vKmRvUMbJVeX2o";
    const CHAT_ID = "-1001881829689";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const success = document.getElementById("success");

    try {
      let tgNotification = `<b>Заявка з сайту!</b>\n`;
      tgNotification += `<b>Замовник: </b> ${name}\n`;
      tgNotification += `<b>Товар: </b> не визначен, треба консультація\n`;
      tgNotification += `<b>Пошта: </b> ${email}\n`;
      tgNotification += `<b>Телефон: </b> +${phoneNumber}\n`;
      tgNotification += `<b>Коментар: </b> ${message}`;

      await axios.post(URI_API, {
        chat_id: CHAT_ID,
        text: tgNotification,
        parse_mode: "html",
      });
      setName("");
      setEmail("");
      setPhoneNumber("380");
      setMessage("");
      success.style.display = "flex";
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Замовлення успішно відправлено!");
    }
  };

  return (
    <div className="bottom-widget-wrapper" id="order-bottom">
      <div className="bottom-order-widget flex__center">
        <div className="offer">
          <div className="offer__subtitle">
            <h4 className="offer__subtitle-text">
              Заповніть форму і ми зв'яжемося з вами
            </h4>
          </div>
        </div>

        <div className="inputs">
          <form className="input-form" onSubmit={tgBot}>
            <div className="input__name">
              <input
                type="text"
                name="name"
                placeholder="Введіть ім'я"
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input__email">
              <input
                type="email"
                name="email"
                placeholder="Введіть email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input__phone-number">
              <PhoneInput
                country={"ua"}
                name="tel"
                value={phoneNumber}
                onChange={handleChange}
                inputProps={{
                  required: true,
                }}
              />
              {!valid && <p>Будь-ласка введіть правильний номер телефона.</p>}
            </div>
            <div className="input__message">
              <textarea
                name="message"
                placeholder="Комментар"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div id="success">
              <Alert
                message="Заявка надіслана успішно!"
                type="success"
                showIcon
              />
            </div>

            <button
              type="submit"
              id="submit-btn2"
              className="order__button btn-pulse"
            >
              Надіслати
            </button>
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
        </div>
        {/* <b className="lastpack__wrapper">Залишилось всього{" "}<span className="lastpack"><span className="lastpack_value">{amount} шт.</span></span>{" "}по акції</b> */}
      </div>
    </div>
  );
};

export default OrderScreenWidget;
