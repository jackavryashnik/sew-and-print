import React from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from "../../components";
import images from "../../assets/images"
import "./AddProduct.css";

const AddProduct = () => {
    const {condiments} = images;

    function scrollToTop() {
        setTimeout(() => {
            window.scrollTo(0, 0);
          }, 0);
    }

    return (
        <div className="add-product" id="add-product">
            <SectionTitle
                startText={"Витратні матеріали"}
            />
            <section className="add-product__content">
                <div className="content__img">
                    <img
                    className={`content__img-img`}
                    src={condiments}
                    alt="grape oil"/>
                </div>
                
                <div className="content__text">
                    <div className="description"/>
                    <p>
                        У нашому магазині ви знайдете повний асортимент необхідних витратних матеріалів для DTF друку. Наші витратні матеріали високої якості гарантують, що ваші принти будуть надзвичайно чіткими, насиченими та стійкими, дозволяючи вам створити найкращі текстильні вироби з власним дизайном. Наша команда готова надати професійну консультацію та підтримку, щоб ви могли здійснювати DTF друк на найвищому рівні.
                    </p>
                    
                    <div className="products__catalog">
                            <Link onClick={scrollToTop} to="/consumables">
                            <button className="button">Детальніше</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddProduct;
