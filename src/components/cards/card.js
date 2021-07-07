import React, { useRef, useEffect } from 'react'
import { gsap, Power3 } from 'gsap/all'
import data from './card-data'
import './card.scss'



function Card() {

    let block = useRef(null)

    useEffect(() => {
        block.addEventListener('mouseover', () => {
            gsap.set(block.querySelector('.images'), { scale: 0.93 })
            // gsap.set(block.querySelectorAll('.img'), { translate3d: 0 })
            gsap.to(block.querySelector('.text_two'), 0.08, {
                opacity: 1,
                ease: Power3.easeIn
            })

        })
        block.addEventListener('mouseout', () => {
            gsap.set(block.querySelector('.images'), { scale: 1 })

            gsap.to(block.querySelectorAll('.img'), .8, {
                rotateX: "0deg",
                rotateY: "0deg",

            })

            gsap.to(block.querySelector('.text_two'), 0.08, {
                opacity: 0,
                ease: Power3.easeIn
            })
        })

        block.addEventListener('mousemove', (event) => {

            let center = ((block.clientHeight + block.clientWidth) / 2) / 100;

            gsap.to(block.querySelectorAll('.img'), {
                rotateX: ((event.clientX / 100)) - (center) + "deg",
                rotateY: ((event.clientY / 100)) - (center) + "deg",

            })
        })

        return () => {
        }
    }, [block])

    return (
        <div className="card__section">
            <div className="blocks left__blocks">
                {
                    data[0].items.map((el, index) => {
                        return (
                            <div key={el.id} className={el.itemClasses} ref={(index) => { block = index }}>
                                <div className="images">
                                    {
                                        el.images.map((ell, index) => {
                                            return (
                                                <div key={index} className={ell.imgClass}>
                                                    <img src={ell.src} alt="img" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="texts">
                                    <p className="text_one">
                                        {el.texts}
                                    </p>
                                    <p className="text_two hide">
                                        see case
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="blocks right__blocks">
                {
                    data[1].items.map((el) => {
                        return (
                            <div key={el.id} className={el.itemClasses} ref={e => { block = e }}>
                                <div className="images">
                                    {
                                        el.images.map((ell, index) => {
                                            return (
                                                <div key={index} className={ell.imgClass}>
                                                    <img src={ell.src} alt="img" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="texts">
                                    <p className="text_one">
                                        {el.texts}
                                    </p>
                                    <p className="text_two hide">
                                        see case
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card
