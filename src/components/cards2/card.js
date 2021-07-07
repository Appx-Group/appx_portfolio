import React from 'react'
import './card.scss'

import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'

function Card() {
    return (
        <div className="cards">
            <div className="cards__body">
                <div className="card__item item__card card__one">
                    <div className="item__body">
                        <div className="card__img">
                            <img src={img1} alt="img" />
                        </div>
                        <h4 className="item__title">
                            KIND Magazine
                        </h4>
                        <p className="title__desc">
                            One of a kind online publication platform
                        </p>
                    </div>
                    <div className="card__aside">
                        <p className="aside__title">
                            WEBSITE
                        </p>
                    </div>
                </div>
                <div className="card__item item__card card__two">
                    <div className="item__body">
                        <div className="card__img">
                            <img src={img2} alt="img" />
                        </div>
                        <h4 className="item__title">
                            KIND Magazine
                        </h4>
                        <p className="title__desc">
                            One of a kind online publication platform
                        </p>
                    </div>
                    <div className="card__aside">
                        <p className="aside__title">
                            WEBSITE
                        </p>
                    </div>
                </div>
                <div className="card__item item__card card__three">
                    <div className="item__body">
                        <div className="card__img">
                            <img src={img3} alt="img" />
                        </div>
                        <h4 className="item__title">
                            KIND Magazine
                        </h4>
                        <p className="title__desc">
                            One of a kind online publication platform
                        </p>
                    </div>
                    <div className="card__aside">
                        <p className="aside__title">
                            WEBSITE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
