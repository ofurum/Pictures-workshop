import React, {useEffect} from "react";
import gsap from "gsap";
import SplitText from "../../utils/split3.min.js"
import "./style.scss"
const Header = () => {

    useEffect(() => {
      const split = new SplitText("#header-text",{
          type: "lines",
          LinesClass: "lineChildren"
      });

    //   const splitParent = new SplitText("#header-text",{
    //     type: "lines",
    //     LinesClass: "lineParents"
    // });

      gsap.to(split.lines, {
          duration: 1,
          y: 0,
          opacity:1,
          stagger: 0.1,
          ease: "power2"
      })
    }, [])
    return(
        <section className = "header-container" data-scroll-section>
            <ul className = "header-menu">
                <li>About</li>
                <li>Intro</li>
                <li>Featured</li>
            </ul>
            <h1 id = "header-text">Black Culture</h1>
        </section>
    )
};
export default Header;