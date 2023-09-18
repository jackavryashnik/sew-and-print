import React, { useState, useEffect } from "react";
import mainScreenImages from "../../assets/mainScreenImg";
import "./MainScreen.css";

const MainScreen = () => {
  const imagesArray = Object.values(mainScreenImages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-screen" id="home">
        <div className="main-screen__content">
            <div className="main-screen__text">
                <h1 className="main-screen__title">Обладнання для DTF друку<br />Друк принтів на замовлення</h1>
                <div className="main-screen__text-coll">
                    <h2 className="text-coll__subtitle">СТВОРЮЙТЕ ПЕРСОНАЛІЗОВАНІ ФУТБОЛКИ, ХУДІ ТА ІНШЕ ЗA ВАШИМ ДИЗАЙНОМ</h2>
                    <p className="text-coll__description">З нашими послугами ви можете створити власний онлайн-бізнес із друком персоналізованого одягу на замовлення, також ви можете придбати усе необхідне обладнання і займатись цим самостійно</p>
                    <a href="#printers"><button className="button">Детальніше</button></a>
                </div>
            </div>
            <div className="main-screen__img">
                <img src={imagesArray[currentImageIndex]} alt="production" />
            </div>
        </div>
    </div>
  );
};

export default MainScreen;
