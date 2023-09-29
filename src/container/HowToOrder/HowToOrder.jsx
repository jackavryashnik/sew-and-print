import React from "react";
import { useInView } from 'react-intersection-observer';
import { SectionTitle, RoundItem } from "../../components";
import "./HowToOrder.css";

const HowToOrder = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
        <div className="order">
            <SectionTitle
                startText={"Як  замовити"}
            />
            <div ref={ref} className={`order__items ${inView ? 'order__items-active' : ''}`} >
                <RoundItem
                    className={`${inView ? 'order__item-active' : ''}`}
                    image={<i className="fa-solid fa-cart-plus"></i>}
                    alt={"shopping cart icon"}
                    step={"крок 1"}
                    deliveryText={"Ви залишаєте заявку на сайті"}
                />
                <RoundItem
                    className={`${inView ? 'order__item-active' : ''}`}
                    image={<i className="fa-solid fa-headset"></i>}
                    alt={"headset icon"}
                    step={"крок 2"}
                    deliveryText={"Менеджер уточнює деталі замовлення"}
                />
                <RoundItem
                    className={`${inView ? 'order__item-active' : ''}`}
                    image={<i className="fa-solid fa-truck-fast"></i>}
                    alt={"delivery icon"}
                    step={"крок 3"}
                    deliveryText={"Ми надсилаємо замовлення в будь-який регіон"}
                />
                <RoundItem
                    className={`${inView ? 'order__item-active' : ''}`}
                    image={<i className="fa-solid fa-money-bills"></i>}
                    alt={"money icon"}
                    step={"крок 4"}
                    deliveryText={"Ви оплачуєте замовлення при отриманні товару"}
                />
            </div>
        </div>
    );
};

export default HowToOrder;
