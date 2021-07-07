import React, { useEffect, useRef } from "react";
import { gsap, Power3, Expo, TimelineMax } from "gsap";

import ringImg from "../images/ring.png"

export default function Loading(props) {

    let loadingPage = useRef(null);
    let ringOne = useRef(null);
    let ringTwo = useRef(null);

    useEffect(() => {
        gsap.to(
            loadingPage,
            1.5,
            {
                delay: 6,
                y: '-100%',
                opacity: 0,
                ease: Power3.easeInOut
            }
        )
        gsap.to(ringOne, 1, {
            delay: 7,
            zIndex: 3
        })
        gsap.to(ringTwo, 1, {
            delay: 7,
            zIndex: 3
        })

        var timeline1 = new TimelineMax();

        timeline1.from(ringOne, 3, {
            delay: 0.4,
            opacity: 0,
            y: 400,
            ease: Expo.easeInOut
        })
            .from(ringTwo, 3, {
                delay: 0.9,
                opacity: 0,
                y: 400,
                ease: Expo.easeInOut
            }, '-=4')
            .to(ringOne, 3, {
                delay: 1,
                // opacity: 0,
                x: 400,
                ease: Expo.easeInOut
            })
            .to(ringTwo, 3, {
                delay: 1.3,
                // opacity: 0,
                x: 400,
                ease: Expo.easeInOut
            }, '-=5')




    })

    // const loadingBarStyle = {
    //     width: `${count - 10}%`
    // }

    return (
        <div>
            <div
                className="loading_page"
                ref={el => { loadingPage = el }}>
                {/* <div className="loading_bar" style={loadingBarStyle}></div>
            <div className="loading_text">
                <h1>'{count}%</h1>
            </div> */}
            </div>
            <div className="loader">
                <div className="ringOne ring" ref={el => { ringOne = el }}>
                    <img src={ringImg} alt="Ring" />
                </div>
                <div className="ringTwo ring" ref={el => { ringTwo = el }}>
                    <img src={ringImg} alt="Ring" />
                </div>
            </div>
        </div>
    )
}