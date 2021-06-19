import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3, Expo, TimelineMax } from "gsap";

import ringImg from "../images/ring.png"

export default function Loading(props) {

    let loadingPage = useRef(null);
    let ringOne = useRef(null);
    let ringTwo = useRef(null);

    // const { num } = props.num;

    // const [count, setCount] = useState("0")

    // useEffect(() => {
    //     let start = 0;

    //     let end = 100;

    //     if (start === end) {
    //         return;
    //     }

    //     let incrementTime = (2 / end) * 1000;

    //     let timer = setInterval(() => {
    //         start += 1;
    //         setCount(String(start))
    //         if (start === end) clearInterval(timer);
    //     }, incrementTime);



    // }, [num])

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
            <div class="loader">
                <div class="ringOne ring" ref={el => { ringOne = el }}>
                    <img src={ringImg} alt="Ring" />
                </div>
                <div class="ringTwo ring" ref={el => { ringTwo = el }}>
                    <img src={ringImg} alt="Ring" />
                </div>
            </div>
        </div>
    )
}