import React from "react";
import "./style.scss";

import SectionHeader from "../SectionHeader"
const Footer = () => {

    return(
        <section className="footer" data-scroll-section>
            <SectionHeader title="Created by " />

            <p>chigo with &#10084;&#65039;</p>
        </section>
    )
};

export default Footer;