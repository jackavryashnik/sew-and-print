import React from 'react'
import './Achievements.css'

const Achievements = () => {
  return (
    <div className='achievements__wrapper'>
        <h2 className="achievements__title">Наші досягнення</h2>
        <div className="achievements">
            <div className="achievement">
                <h2>5</h2>
                <p>Років на ринку</p>
            </div>
            <div className="achievement">
                <h2>1000+</h2>
                <p>Одиниць проданої друкарської техніки</p>
            </div>
            <div className="achievement">
                <h2>22 000+</h2>
                <p>Виконаних роздрібних замовлень</p>
            </div>
            <div className="achievement">
                <h2>10 000+</h2>
                <p>Задоволених клієнтів</p>
            </div>
        </div>
    </div>
  )
}

export default Achievements