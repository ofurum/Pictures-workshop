import React from "react";
import Photos from "../../utils/data";
import "./features.styles.scss"
const Features = () => {
const [firstURl, secondURl] = Photos
    return(
        <section className = "featured-section" data-scroll-section>
             <section className = "feature-row-layout">
                 <h6>Talking drum</h6>
                 <img src = {firstURl} alt="icon" />
             </section>
             <section className = "feature-column-layout">
                 <h6>Woman with a nice scarf</h6>
                 <img src = {secondURl} alt="icon" />
             </section>
        </section>
    )
};
export default Features