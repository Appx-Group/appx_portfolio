import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {
    let headerTitle = useRef(null);

    useEffect(() => {
        gsap.from(headerTitle, .8, {
            y: 20,
            opacity: 0,
            ease: "power3.inOut"
        }, "-=1")
    })

    return (
        <div className="home__title">
            <h5 className="header_title" ref={el => (headerTitle = el)}>
                We keep brands <br />
                relevant through<br />
                immersive digital<br />
                experiences
            </h5>
            <p className="header__desc">
                We use technological mastery to <br />
                conjure memorable experiences<br />
                that ignite the audience's<br />
                imagination.
            </p>
            {/* <div className="header_img" ref={el => (headerImg = el)}>
                </div> */}
        </div>
    );
}