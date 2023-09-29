import React from 'react'
import logo from '../../assets'
import aboutIcons from '../../assets/aboutIcons'
import './AboutUs.css'

const AboutUs = () => {
  const [time, pallete, diamond] = aboutIcons
  return (
    <div className='about' id='about'>
        <div className='about__text'>
          <h2 className='about__subtitle'>Про SewPrint</h2>
          <div className='about__text-text'>
            <div>
              <p><b>Компанія "SewPrint"</b> - ваш надійний партнер у створенні одягу, мерчу та подарунків з нанесенням найвищої якості зображень.</p>
              <p>Ми перетворюємо звичайні речі, такі як футболки, худі, світшоти, еко-сумки, чашки, фартухи, кепки і багато інших, у виразне художнє вираження вашого стилю та ідеології.</p>
            </div>
            <br/>
            <div>
              <p><b>Наші продукти</b> - це чудовий вибір для подарунків, корпоративних заходів та промоакцій. Вони не просто модні та оригінальні, але також практичні та зручні у використанні, надаючи вам можливість виразити свою унікальність та стиль.</p>
            </div>
            <br/>
            <div>
              <p><b>SewPrint</b> - це не просто назва, це ваш шлях до створення незабутніх моментів та виразу ваших ідей через текстиль та дизайн. Разом з нами, ви можете створити власну історію стилю та індивідуальності</p>
            </div>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__logo'>
            <img src={logo} alt='logo'/>
          </div>

          <div className='about__points'>
            <div className='about__point'>
              <div className='about__circle'>
                <img className='about__circle-img' src={diamond} alt="Diamond Icon"/>
              </div>
              <p>Використовуємо тільки <b>ЯКІСНІ</b> матеріали за доступними цінами</p></div>
            <div className='about__point'>
              <div className='about__circle'>
                <img className='about__circle-img' src={pallete} alt="Pallete Icon"/>
              </div><p>Створимо ваш власний, персоналізований <b>дизайн БЕЗКОШТОВНО</b></p></div>
            <div className='about__point'>
              <div className='about__circle'><img className='about__circle-img' src={time} alt="Clock Icon"/></div>
            <p>Виконаємо ваше замовлення в <b>найкоротші терміни</b></p></div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs;