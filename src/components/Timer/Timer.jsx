import React, { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

    const calculateTimeLeft = () => {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(24, 0, 0, 0);

        let timeLeft;
        if (now < endOfDay) {
            timeLeft = endOfDay - now;
        } else {
            const nextDay = new Date(endOfDay.getTime() + 24 * 60 * 60 * 1000);
            timeLeft = nextDay - now;
        }

        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return { hours, minutes, seconds };
    };

    useEffect(() => {
        const updateTimer = () => {
            setTime(calculateTimeLeft());
        };

        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <h3 className="timer__header flex__center">ДО КІНЦЯ АКЦІЇ:</h3>
            <div className="timer__time">
                <div className="timer__num">
                    <div className="timer__time-hours">
                        <p>{time.hours.toString().padStart(2, "0")}</p>
                    </div>
                    <div className="timer__time-hours_text">годин</div>
                </div>
                <div className="timer__num">
                    <div className="timer__time-mins">
                        <p>{time.minutes.toString().padStart(2, "0")}</p>
                    </div>
                    <div className="timer__time-mins_text">хвилин</div>
                </div>
                <div className="timer__num">
                    <div className="timer__time-secs">
                        <p>{time.seconds.toString().padStart(2, "0")}</p>
                    </div>
                    <div className="timer__time-secs_text">секунд</div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
