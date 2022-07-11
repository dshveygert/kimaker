import React from "react";
import './express-mac-consultation.sass';
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

const linkToConsultation = 'http://express.kimaker.ru';

function trackGa(target?: string) {
    trackCustomEvent({
        category: "from_kimaker_ru",
        action: "click",
        label: target
    })
}

export default function ExpressMacConsultation() {
    return (
        <div className='express'>
            <div className="layout-width">
                <h1><mark>Четыре шага с МАК</mark><br/>экспресс-консультация</h1>
                <div className="express-block">
                    <p>Метафорические ассоциативные карты – это способ заглянуть в своё подсознание.</p>
                    <p>МАКарты – это карточки с картинками, которые позволяют снять психологическую защиту и сосредоточиться на себе и своем внутреннем мире, соприкоснуться с Вашим подсознанием.</p>
                    <p>Карты не дают однозначного ответа, но раскрывают содержание подсознания, Ваши сильные и слабые стороны.</p>

                    <div className="divider" />

                    <p><a href={linkToConsultation} onClick={e => trackGa('link')}>Экспресс-консультация позволит</a> Вам понять как работают МАКарты и решить для себя, нужна ли Вам более глубокая проработка Вашего запроса на очной личной консультации.</p>
                </div>
                <a href={linkToConsultation}>
                    <button className='primary' onClick={e => trackGa('button')}>
                        Узнать подробнее об Экспресс-консультации
                    </button>
                </a>
            </div>
        </div>
    )
}
