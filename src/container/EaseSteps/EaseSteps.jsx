import React from "react";
import "./EaseSteps.css";

const EaseSteps = () => {
    return (
        <div className="container pf-sliding-block pf-sliding-block--horizontal pf-py-64 pf-sliding-block--scrollable">
            <div className="text-center pf-mt-12 pf-mb-40">
                <h2 className="pf-h2 pf-m-0">Перетворіть свої ідеї на успішний бізнес за 3 простих кроки</h2>
                <h4 className="pf-ui-subheading-lg pf-mt-8 pf-mb-0 text-muted">Ми виконаємо ваші замовлення — ви керуєте своєю компанією</h4>
            </div>
            <div className="row">
                <div className="col-12 col-xl-10 offset-xl-1 col-lg-12 offset-lg-0 col-sm-10 offset-sm-1">
                    <div className="row steps-slider text-center">
                        <div className="col-12 col-xs-6 col-sm-6 col-md-4 pf-sliding-block__item">
                            <div className="row no-gutters">
                                <div className="col-12">
                                    <div className="pf-sliding-block__item--image" aria-hidden="true">
                                        <img
                                            src="https://static.cdn.printful.com/static/v863/images/homepage/register-connect-a-store.svg"
                                            data-src="https://static.cdn.printful.com/static/v863/images/homepage/register-connect-a-store.svg"
                                            alt="register and connect a store"
                                            className="img-responsive center-block"
                                            loading="lazy"
                                            width="180"
                                            height="180"
                                            data-src-processed="1"
                                        />
                                    </div>
                                    <div className="pf-sliding-block__step--container pf-mt-8">
                                        <span className="sr-only sr-only-focusable">Part 1</span>
                                        <div className="js--sliding-block-number pf-sliding-block__step--number pf-sliding-block__step--number">
                                            <div className="pf-d-flex pf-align-items-center pf-justify-content-center" style={{ height: "100%" }} aria-hidden="true">
                                                1
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pf-px-16">
                                        <div className="pf-h4 pf-mt-12">
                                            Зареєструйтеся та залиште заявку
                                        </div>
                                        <p className="pf-ui-body pf-text-muted text-center pf-mt-8 pf-mb-0"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xs-6 col-sm-6 col-md-4 pf-sliding-block__item">
                            <div className="row no-gutters">
                                <div className="col-12">
                                    <div className="pf-sliding-block__item--image" aria-hidden="true">
                                        <img
                                            src="https://static.cdn.printful.com/static/v863/images/homepage/create-a-design.svg"
                                            data-src="https://static.cdn.printful.com/static/v863/images/homepage/create-a-design.svg"
                                            alt="design a product"
                                            className="img-responsive center-block"
                                            loading="lazy"
                                            width="180"
                                            height="180"
                                            data-src-processed="1"
                                        />
                                    </div>
                                    <div className="pf-sliding-block__step--container pf-mt-8">
                                        <span className="sr-only sr-only-focusable">Part 2</span>
                                        <div className="js--sliding-block-number pf-sliding-block__step--number pf-sliding-block__step--number">
                                            <div className="pf-d-flex pf-align-items-center pf-justify-content-center" style={{ height: "100%" }} aria-hidden="true">
                                                2
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pf-px-16">
                                        <div className="pf-h4 pf-mt-12 wrap">
                                        Створюйте свої продукти в нашому безкоштовному конструкторі і продавайте все, що забажаєте
                                        </div>
                                        <p className="pf-ui-body pf-text-muted text-center pf-mt-8 pf-mb-0"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xs-6 col-sm-6 col-md-4 pf-sliding-block__item">
                            <div className="row no-gutters">
                                <div className="col-12">
                                    <div className="pf-sliding-block__item--image" aria-hidden="true">
                                        <img
                                            src="https://static.cdn.printful.com/static/v863/images/homepage/earn-money.svg"
                                            data-src="https://static.cdn.printful.com/static/v863/images/homepage/earn-money.svg"
                                            alt="earn money"
                                            className="img-responsive center-block"
                                            loading="lazy"
                                            width="180"
                                            height="180"
                                            data-src-processed="1"
                                        />
                                    </div>
                                    <div className="pf-sliding-block__step--container pf-mt-8">
                                        <span className="sr-only sr-only-focusable">Part 3</span>
                                        <div className="js--sliding-block-number pf-sliding-block__step--number pf-sliding-block__step--number">
                                            <div className="pf-d-flex pf-align-items-center pf-justify-content-center" style={{ height: "100%" }} aria-hidden="true">
                                                3
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pf-px-16">
                                        <div className="pf-h4 pf-mt-12">
                                            Заробляйте гроші на своїх продажах
                                        </div>
                                        <p className="pf-ui-body pf-text-muted text-center pf-mt-8 pf-mb-0"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EaseSteps;