import React from "react";
import LocomotiveScroll from "Locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start) {
    React.useEffect(() => {
    if(!start) return;

    let locoScroll = new LocomotiveScroll({

        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1,
        class: "is-reveal"
    })
    console.log(locoScroll)

    }, [start])
} 