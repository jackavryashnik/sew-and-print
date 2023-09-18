import React from "react";
import { SectionTitle } from "../../components";
import "./ProductionProcess.css";

const ProductionProcess = () => {
    return (
        <div className="process">
            <SectionTitle startText={"Як відбувається друк"} />

            <section className="process__content">
                <div className="process__content-vid">
                    <iframe
                    src="https://www.youtube.com/embed/UX1oIeHYVa8?si=tjFvIuoEcsPuoX4j"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen></iframe>
                </div>

                <div className="process__content-text">
                    <h2>Виготовлення речей з принтами відбувається в 6 основні етапи</h2>
                    <ul>
                        <li>Підготовка Дизайну, який ви бажаєте надрукувати на текстильному виробі.</li>
                        <li>Підготовка Принтера, щоб забезпечити бездоганну якість.</li>
                        <li>Друк принта на спеціальній плівці.</li>
                        <li>Нанесення білого фону за допомогою якого забезпечується насиченість та якість друку кольорових зображень.</li>
                        <li>Фіксація принту.</li>
                        <li>Перенос принту на готовий вироб.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ProductionProcess;
