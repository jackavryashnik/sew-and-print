import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from "../../components";
import images from "../../assets/images"
import "./Prints.css";

const Procedure = () => {
    const { printingDepartment } = images;
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const [showText1, setShowText1] = useState(true);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);

    const toggleText = (textNumber) => {
        switch (textNumber) {
            case 1:
                setShowText1(true);
                setShowText2(false);
                setShowText3(false);
                setShowText4(false);
                break;
            case 2:
                setShowText1(false);
                setShowText2(true);
                setShowText3(false);
                setShowText4(false);
                break;
            case 3:
                setShowText1(false);
                setShowText2(false);
                setShowText3(true);
                setShowText4(false);
                break;
            case 4:
                setShowText1(false);
                setShowText2(false);
                setShowText3(false);
                setShowText4(true);
                break;
            default:
                break;
        }
    };

    return (
        <div className="prints" id="prints">
            <SectionTitle startText={"Друк принтів на замовлення"} />
            <section className="prints__content">
                <div className="content__text">
                    <h2>
                        Наша послуга друку на замовлення відкриває безмежні можливості для створення унікальних і персоналізованих продуктів.
                    </h2>

                    <div onClick={() => toggleText(1)}>
                        <h3 className="prints__subtitle">Особиста та унікальна продукція <i className="ri-corner-down-left-fill"></i></h3>
                        <p>
                            {showText1 && (
                                <>Ми даємо нашим клієнтам створювати особисті і унікальні дизайни для друку на різних продуктах, таких як футболки, кружки, плакати та інше. Це дає можливість виразити свій стиль, індивідуальність та творчість через наші друковані вироби.</>
                            )}
                        </p>
                    </div>

                    <div onClick={() => toggleText(2)}>
                        <h3 className="prints__subtitle">Професійний друк високої якості <i className="ri-corner-down-left-fill"></i></h3>
                        <p>
                            {showText2 && (
                                <>Ми використовуємо сучасну технологію та високоякісні матеріали для забезпечення найкращої якості друку. Незалежно від того, чи це кольоровий друк, чорно-білий або щось незвичайне, ми гарантуємо чіткість та насиченість кожного зображення.</>
                            )}
                        </p>
                    </div>

                    <div onClick={() => toggleText(3)}>
                        <h3 className="prints__subtitle">Індивідуальне обслуговування <i className="ri-corner-down-left-fill"></i></h3>
                        <p>
                            {showText3 && (
                                <>Наша команда професіоналів завжди готова надати індивідуальну консультацію та допомогу з вибором правильних опцій для друку. Ми працюємо над кожним проектом з уважністю до деталей, щоб гарантувати задоволення наших клієнтів.</>
                            )}
                        </p>
                    </div>

                    <div onClick={() => toggleText(4)}>
                        <h3 className="prints__subtitle">Швидка доставка та задоволення клієнтів <i className="ri-corner-down-left-fill"></i></h3>
                        <p>
                            {showText4 && (
                                <>Ми робимо все можливе, щоб надати нашим клієнтам зручний і швидкий процес замовлення та доставки. Ми завжди відкриті до фідбеку і завжди стараємося забезпечити найкращий досвід для наших клієнтів.</>
                            )}
                        </p>
                    </div>
                    
                    <div className="products__catalog">
                        <Link to="/prints">
                            <button className="button">Детальніше</button>
                        </Link>
                    </div>
                </div>
                <div className="content__img">
                    <img ref={ref}
                    className={`content__img-img ${inView ? 'rollIn' : ''}`}
                    src={printingDepartment}
                    alt="printing department"/>
                </div>
            </section>
        </div>
    );
};

export default Procedure;
