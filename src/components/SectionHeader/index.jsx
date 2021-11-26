import React from 'react';
import "./style.scss";

const SectionHeader = ({title}) => {

    return(
        <div className="section-header" data-scroll-section> 
          {title} 
        </div>
    )
};

export default SectionHeader;