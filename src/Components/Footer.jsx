import React from 'react';
import { useRef } from 'react';
import logo from '../img/logo2.png';
import viber from '../img/viber.png';
import simple from '../img/simple.png';
import twitter from '../img//twitter.png';
import telegram from '../img//telegram.png';
import facebook from '../img/facebook.png';
import jira from '../img/jira.png';


function Footer() {
    const openRegistr = useRef();

    const registr = () => {
        openRegistr.current.style.display = 'block'
    }
    const closeRegistr = () => {
        openRegistr.current.style.display = 'none'
    }
    return (
        <div className='brot'>
            <div className='foter-item'>
                <div className="container">
                    <div className="left">
                        <img src={logo} alt="Error" />
                        <div className="item">
                            <p>Калорийность и состав</p>
                            <p>Правовая информация</p>
                        </div>
                        <p className='item_p'>Мы в соцсетях</p>
                        <div id='body'>
                            <div id="insta">
                                <a href="https://www.instagram.com/sayfidd1n_2002/" target='_blank'>Instagram</a>
                                <a href="https://t.me/sayfiddin2002" target='_blank'>Telegram</a>
                                <a href="tel:+998941055799">Вконтакте</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="right">
                        <p className='ostalas'>ОСТАЛИСЬ ВОПРОСЫ? А МЫ ВСЕГДА НА СВЯЗИ:</p>
                        <div className='virtual-wrap'>
                            <div className="vwrap">
                                <img src={viber} alt="viber logo img" />
                            </div>
                            <div className="vwrap">
                                <img src={simple} alt="simple logo img" />
                            </div>
                            <div className="vwrap">
                                <img src={twitter} alt="twitter logo img" />
                            </div>
                            <div className="vwrap">
                                <img src={telegram} alt="telegram logo img" />
                            </div>
                            <div className="vwrap">
                                <img src={facebook} alt="facebook logo img" />
                            </div>
                            <div className="vwrap">
                                <img src={jira} alt="jira logo img" />
                            </div>
                            <button id='but' onClick={registr}>Написать нам</button>
                        </div>
                        <div className='right_footer'>
                            <p id='sakkiz'>+998 94 105 57 99</p>
                            <button id='zakasss' onClick={registr}>Заказать звонок</button>
                        </div>
                    </div>
                </div>
                <p id='bar'>Fibo Pasta Bar Все права защищены © 2023</p>
            </div>


            <div ref={openRegistr} className="clow">
                <div id='div'>
                    <div className="srov">
                        <div className="wrapper">
                            <p>Заказать звонок</p>
                            <p onClick={closeRegistr}>&times;</p>
                        </div>
                        <div className="inp">
                            <p>Номер телефона</p>
                            <input type="number" />
                        </div>
                        <div className="clow-footer">
                            <button>Заказать</button>
                            <p>
                                Продолжая, вы соглашаетесь со сбором и обработкой
                                данных и персональных соглашением пользовательским данных
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer