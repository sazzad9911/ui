import React from 'react';
import './CSS/IconSet.css';
import { IconContext } from "react-icons";

const IconSet = () => {

    return (
        <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
            <div>
                
            </div>
        </IconContext.Provider>


    );
};

export default IconSet;