import React, { useState } from "react";
import { PrivacyPolicy } from "../../components";
import "./Footer.css";

const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="footer">
            <div className="footer__content">
                
                <div className="footer__company">
                    <i className="ri-building-line">Компанія</i>
                    <p>Сью Анд Прінт</p>

                    <i className="ri-map-pin-line">Адреса</i>
                    <p>Дніпро, Україна</p>
                    <div className="footer__privacy" onClick={handleShowModal}>
                    Політика конфіденційності
                    </div>
                </div>

                <div className="footer__contact">
                    <div className="contact__phones">
                        <div className="contact__subtitle">
                            <i className="ri-phone-line">Телефони</i>
                        </div>

                        <div className="phones">
                            <div>
                                <p>Елена</p>
                                <p>+380 (95) 541-88-66</p>
                                <p>Володимир</p>
                                <p>+380 (93) 577-55-76</p>
                            </div>
                            <div>
                                <p>Юрій</p>
                                <p>+380 (68) 656-34-84</p>
                                <p>+380 (68) 205-60-03</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact__messengers">
                        <div className="contact__subtitle">
                            <i className="ri-message-line">Месенджери</i>
                        </div>
                        <div className="messengers">
                            <div>
                                <i className="ri-telegram-line">Telegram</i><p></p>
                                <p>+380682056003</p>
                                <i className="ri-whatsapp-line">WhatsApp</i><p></p>
                                <p>+380955418866</p>
                            </div>
                            
                            <div>
                                <i className="ri-mail-line">Email</i>
                                <a href="mailto:sewprintdnipro@gmail.com"><p>sewprintdnipro@gmail.com</p></a>
                                <i className="fa-brands fa-viber">Viber</i>
                                <p>+380686563484</p>
                            </div>

                        </div>
                    </div>
                </div>

                {showModal && <PrivacyPolicy onClose={handleCloseModal} />}
            </div>
        </div>
    );
};

export default Footer;
