import React from 'react'
import './service.scss';
import data from './service-data'

export default function Service() {
    return (
        <div className="service">
            <div className="service__title">
                <h1>
                    Whatever you need, <br />
                    we build
                </h1>
            </div>
            <div className="service__body">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="service__block block__service">
                                <h1 className="block__title">
                                    {item.title}
                                </h1>
                                <p className="block__desc">
                                    {item.desc}
                                </p>
                                <img src={item.img} alt="img" className="block__img" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}