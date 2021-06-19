import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
    let headerTitle = useRef(null);
    // let headerImg = useRef(null);

    useEffect(() => {

        gsap.from(headerTitle, .8, {
            y: 20,
            opacity: 0,
            ease: "power3.inOut"

        }, "-=1")
        // gsap.from(headerImg, .8, {
        //     x: 20,
        //     opacity: 0,
        //     ease: "power3.inOut"

        // }, '-=1')
    })

    return (
        <div className="container">
            <div className="wrapper">
                <h5 className="header_title" ref={el => (headerTitle = el)}>
                    You will fly <br />
                    away with US!
                </h5>
                {/* <div className="header_img" ref={el => (headerImg = el)}>
                </div> */}
            </div>
        </div >
    );
}