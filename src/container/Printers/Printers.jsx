import React from "react";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from "../../components";
import printers from "../../assets/printers";
import "./Printers.css";

const Introdaction = () => {
    const { industrialPrinter, smallPrinter } = printers;

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div className="printers" id="printers">
            <SectionTitle startText={"DFT обладнання"} />

            <div className="printers__industrial">
                <div className="product__img">
                    <img
                        ref={ref}
                        className={`product__img-img ${inView ? 'animation-rotate' : ''}`}
                        src={smallPrinter}
                        alt="dtf printer"
                    />
                </div>
                

                <section className="product-description">
                    <h2 className="product-description__subtitle">
                        В нас є великий ассортимент печатної техніки, від маленьких DTF принтерів до обладнання промислового рівня
                    </h2>

                    <div className="product-description__products">
                        <h3>Малі принтери</h3>
                        <p>
                            Маленькі DTF принтери - це ідеальний вибір для тих, хто починає свій шлях у світі цифрового текстильного друку. Вони компактні, легкі у використанні та забезпечують високу якість друку на текстилі. Ці принтери чудово підходять для невеликих обсягів виробництва та надають можливість надрукувати власні дизайни на футболках, кепках та інших текстильних виробах вдома або в маленькому бізнесі.
                        </p>
                        <div className="products__catalog">
                            <Link to="/machinery">
                                <button className="button">Каталог</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            <div className="printers__small">
                <section className="product-description">
                <div className="product-description__products">
                    <h3>Промислові принтери</h3>
                    <p>
                        Промислові DTF принтери - це потужні машини, які призначені для великосерійного виробництва та надзвичайно високоякісного друку на текстилі. Вони мають велику продуктивність, широкий спектр кольорів та велику роздільну здатність, що робить їх ідеальним вибором для виробників текстильних виробів та рекламних агентств. Промислові DTF принтери забезпечують надійність та стабільність у роботі, що робить їх незамінними для великих проектів та виробництва на замовлення.
                    </p>
                    </div>
                </section>
                <div className="product__img">
                    <img
                        src={industrialPrinter}
                        ref={ref}
                        className={`product__img-img ${inView ? 'animation-rotate' : ''}`}
                        alt="industrial printer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Introdaction;
