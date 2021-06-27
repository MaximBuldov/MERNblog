import React from "react";

import "./HeaderBlock.scss";

const HeaderBlock = ({title, image, description}) => {
    return (
        <div className="header-block" style={{backgroundImage: `url(${image})`}}>
            <div className="container">
                <div className="header-block__overlay"/>
                <div className="header-block__center">
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                </div>
            </div>
        </div>
    )
}

export default HeaderBlock;