import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { PrivacyPolicy } from "../../components";
import logo from "../../assets";
import "./Footer.css";

const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    function scrollToTop() {
        setTimeout(() => {
            window.scrollTo(0, 0);
          }, 0);
    }

    function scrollToOrder() {
        setTimeout(() => {
            const orderElement = document.getElementById('order');
            orderElement.scrollIntoView({ behavior: 'smooth' });
          }, 0);
    }

    function scrollToAbout() {
        setTimeout(() => {
            const aboutElement = document.getElementById('about');
            aboutElement.scrollIntoView({ behavior: 'smooth' });
          }, 0);
    }

    return (
        <div className="footer" id="footer">
            <div className="footer__content">
                <div className="footer__company">
                    <div className="footer__logo">
                        <img className="footer__logo-img" src={logo} alt="logo"></img>
                        <p className="footer__logo-slogan">Друк на одязі та сувенірах,<br/>друкарське обладнання</p>
                    </div>
                    <ul className="footer__links">
                        <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="14" cy="14" r="14" fill="url(#paint0_linear)"></circle>
                                <path d="M22.8925 10.4502C22.8511 9.51036 22.6991 8.86425 22.4814 8.30439C22.2568 7.71011 21.9113 7.17806 21.4586 6.73576C21.0163 6.28658 20.4807 5.93754 19.8933 5.71646C19.3302 5.49875 18.6875 5.34677 17.7477 5.30534C16.8009 5.26039 16.5003 5.25 14.0989 5.25C11.6975 5.25 11.3969 5.26039 10.4536 5.30183C9.51377 5.34326 8.86767 5.49538 8.30794 5.71295C7.71353 5.93754 7.18148 6.28307 6.73918 6.73576C6.28999 7.17806 5.94109 7.71362 5.71988 8.30102C5.50217 8.86425 5.35019 9.50685 5.30876 10.4466C5.26381 11.3935 5.25342 11.6941 5.25342 14.0955C5.25342 16.4969 5.26381 16.7974 5.30525 17.7407C5.34668 18.6805 5.4988 19.3267 5.7165 19.8865C5.94109 20.4808 6.28999 21.0128 6.73918 21.4551C7.18148 21.9043 7.71704 22.2534 8.30444 22.4744C8.86767 22.6922 9.51027 22.8441 10.4502 22.8856C11.3934 22.9271 11.6941 22.9374 14.0955 22.9374C16.4969 22.9374 16.7975 22.9271 17.7408 22.8856C18.6806 22.8441 19.3267 22.6922 19.8864 22.4744C21.0751 22.0149 22.0149 21.0751 22.4745 19.8865C22.6921 19.3233 22.8442 18.6805 22.8856 17.7407C22.927 16.7974 22.9374 16.4969 22.9374 14.0955C22.9374 11.6941 22.9339 11.3935 22.8925 10.4502ZM21.2997 17.6716C21.2616 18.5355 21.1166 19.0019 20.9956 19.3129C20.6984 20.0834 20.0869 20.695 19.3163 20.9922C19.0053 21.1131 18.5355 21.2582 17.6751 21.2962C16.7421 21.3377 16.4623 21.348 14.1024 21.348C11.7424 21.348 11.4591 21.3377 10.5296 21.2962C9.66575 21.2582 9.19929 21.1131 8.88832 20.9922C8.50487 20.8505 8.15583 20.6259 7.87253 20.3322C7.57883 20.0454 7.35424 19.6998 7.21252 19.3164C7.09159 19.0054 6.94649 18.5355 6.90857 17.6751C6.867 16.7422 6.85674 16.4623 6.85674 14.1023C6.85674 11.7424 6.867 11.4591 6.90857 10.5297C6.94649 9.66584 7.09159 9.19938 7.21252 8.88841C7.35424 8.50482 7.57883 8.15592 7.87604 7.87248C8.16272 7.57879 8.50824 7.3542 8.89183 7.21261C9.2028 7.09168 9.67277 6.94658 10.5331 6.90852C11.466 6.86709 11.7459 6.85669 14.1058 6.85669C16.4692 6.85669 16.749 6.86709 17.6786 6.90852C18.5424 6.94658 19.0088 7.09168 19.3198 7.21261C19.7033 7.3542 20.0523 7.57879 20.3356 7.87248C20.6293 8.1593 20.8539 8.50482 20.9956 8.88841C21.1166 9.19938 21.2616 9.66922 21.2997 10.5297C21.3411 11.4626 21.3515 11.7424 21.3515 14.1023C21.3515 16.4623 21.3411 16.7387 21.2997 17.6716Z" fill="white"></path>
                                <path d="M14.0988 9.55176C11.5903 9.55176 9.55511 11.5868 9.55511 14.0954C9.55511 16.604 11.5903 18.6391 14.0988 18.6391C16.6073 18.6391 18.6424 16.604 18.6424 14.0954C18.6424 11.5868 16.6073 9.55176 14.0988 9.55176ZM14.0988 17.0428C12.4714 17.0428 11.1514 15.7229 11.1514 14.0954C11.1514 12.4679 12.4714 11.1481 14.0988 11.1481C15.7263 11.1481 17.0461 12.4679 17.0461 14.0954C17.0461 15.7229 15.7263 17.0428 14.0988 17.0428Z" fill="white"></path>
                                <path d="M19.8826 9.37108C19.8826 9.95674 19.4077 10.4316 18.8219 10.4316C18.2362 10.4316 17.7614 9.95674 17.7614 9.37108C17.7614 8.78528 18.2362 8.31055 18.8219 8.31055C19.4077 8.31055 19.8826 8.78528 19.8826 9.37108Z" fill="white"></path>
                                <defs>
                                <linearGradient id="paint0_linear" x1="14" y1="0" x2="14" y2="28" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5C58C9"></stop>
                                <stop offset="0.286458" stopColor="#943CAA"></stop>
                                <stop offset="0.65625" stopColor="#CD2F90"></stop>
                                <stop offset="1" stopColor="#F68951"></stop>
                                </linearGradient>
                                </defs>
                                </svg></a></li>
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M28 14.0846C28 6.30662 21.7313 0 14 0C6.26875 0 0 6.30662 0 14.0846C0 21.1143 5.11875 26.9411 11.8125 27.9987V18.1571H8.25688V14.0846H11.8125V10.9816C11.8125 7.45225 13.9031 5.50116 17.1006 5.50116C18.6325 5.50116 20.235 5.77656 20.235 5.77656V9.243H18.4688C16.7306 9.243 16.1869 10.3283 16.1869 11.4437V14.0846H20.0694L19.4494 18.1571H16.1875V28C22.8813 26.943 28 21.1162 28 14.0846Z" fill="#38659F"></path>
                                </svg></a></li>
                        <li><a href="https://www.pinterest.com" target="_blank" rel="noreferrer"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 0C6.27588 0 0 6.2651 0 13.976C0 19.7109 3.42759 24.6266 8.4 26.7953C8.35171 25.8314 8.4 24.6266 8.64139 23.5663C8.93107 22.4097 10.4276 15.9519 10.4276 15.9519C10.4276 15.9519 9.9931 15.0362 9.9931 13.735C9.9931 11.6627 11.2 10.1205 12.6965 10.1205C13.9517 10.1205 14.5793 11.0843 14.5793 12.241C14.5793 13.494 13.7586 15.4217 13.3241 17.2048C12.9862 18.6988 14.0482 19.9036 15.5448 19.9036C18.2 19.9036 19.9862 16.4819 19.9862 12.4819C19.9862 9.39752 17.9103 7.13249 14.1448 7.13249C9.89652 7.13249 7.24139 10.3132 7.24139 13.8313C7.24139 15.0361 7.57931 15.9036 8.15861 16.5783C8.4 16.8674 8.44829 17.012 8.35171 17.3493C8.30342 17.5903 8.11032 18.2168 8.06203 18.4578C7.96545 18.7951 7.67583 18.9397 7.33791 18.7951C5.35861 17.9758 4.48963 15.8553 4.48963 13.4457C4.48963 9.49388 7.82064 4.72278 14.4827 4.72278C19.8413 4.72278 23.3655 8.57823 23.3655 12.7228C23.3655 18.2168 20.3241 22.3132 15.8345 22.3132C14.3379 22.3132 12.8897 21.4939 12.4069 20.5783C12.4069 20.5783 11.5862 23.8072 11.4414 24.4337C11.1517 25.494 10.5724 26.6024 10.0414 27.4217C11.2966 27.8072 12.6483 28 14 28C21.7241 28 28 21.7349 28 14.024C28 6.3132 21.7242 0 14 0Z" fill="#CB1F24"></path>
                                </svg></a></li>
                    </ul>
                </div>

                <div className="contact__phones">
                    <div className="contact__subtitle">
                        <h3><i className="ri-phone-line"></i> Телефони</h3>
                    </div>
                    <div className="phones">
                        <div>
                            <a href="tel:+380682056003"><p>+380 (68) 205-60-03</p></a>
                            <a href="tel:+380686563484"><p>+380 (68) 656-34-84</p></a>
                            <a href="tel:+380955418866"><p>+380 (95) 541-88-66</p></a>
                            <a href="tel:+380985775576"><p>+380 (93) 577-55-76</p></a>
                        </div>
                    </div>
                </div>
                    

                <div className="contact__messengers">
                    <div className="contact__subtitle">
                        <h3><i className="ri-message-line"></i> Месенджери</h3>
                    </div>
                    <div className="messengers">
                        <div>
                            <p><i className="ri-telegram-line"></i> Telegram</p>
                            <p>+380682056003</p>
                            <p><i className="ri-whatsapp-line"></i> WhatsApp</p>
                            <p>+380955418866</p>
                            <p><i className="fa-brands fa-viber"></i> Viber</p>
                            <p>+380686563484</p>
                            <p><i className="ri-mail-line"></i> Email</p>
                            <a href="mailto:sewprintdnipro@gmail.com"><p>sewprintdnipro@gmail.com</p></a>
                        </div>
                    </div>
                </div>

                <div className="footer__navbar">
                    <h3>Навігація</h3>
                    <ul>
                        <li><Link onClick={scrollToTop} to="/">Головна</Link></li>
                        <li><Link to="/" onClick={scrollToAbout}>Про нас</Link></li>
                        <li><Link onClick={scrollToTop} to="/machinery">Обладнання</Link></li>
                        <li><Link onClick={scrollToTop} to="/prints">Прінти</Link></li>
                        <li><Link onClick={scrollToTop} to="/consumables">Росхідники</Link></li>
                        {/* <li><Link to="#footer">Контакти</Link></li> */}
                        <li><Link to="/" onClick={scrollToOrder}>Замовлення</Link></li>
                    </ul>       
                </div>             
            </div>

            <div className="footer__privacy" onClick={handleShowModal}>
                <p>Copyright 2023</p> © sewprint. All rights reserved.
            </div>
            {showModal && <PrivacyPolicy onClose={handleCloseModal} />}
        </div>
    );
};

export default Footer;
