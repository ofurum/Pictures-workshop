import React from 'react';
import "./about.styles.scss";
import SectionHeader from "../SectionHeader"
const About = () => {

    return(
        <section className="about-section" data-scroll-section>
           <SectionHeader title="about" />
          <p>
          Depicting the history of Africa is a challenge due to the scarcity of written sources, with many researchers having to rely solely on oral history, archaeology and genetics to determine details of the continent’s past.  The recorded history of early civilisation began in Egypt and later spread to Nubia, the Maghreb and the Horn of Africa. Islam spread throughout Africa during the middle ages and remains to be the dominant religion in Northern African today.
          During the late fifteenth century Europeans and Arabs took slaves from parts of Africa and shipped them overseas to use in the slave trade. Over the nineteenth and early twentieth century the European colonisation of Africa rapidly developed until after the Second World War, where Europe was weakened and decolonisation began to take place.
          </p>
        </section>
    )
};

export default About;