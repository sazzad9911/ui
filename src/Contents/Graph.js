import React from 'react';
import './CSS/Graph.css';
import img1 from '../Files/design-thinking.png';
import img2 from '../Files/search-engine.png';

const Graph = () => {
    return (
        <div className='overall'> 
            <div className='leftportion'>
                <div className='leftheader'>
                    <p>We listen and work together to create a truly unique experience.</p>
                </div>
                <div className='leftheader1'>
                    <p>We design, build and support websites and apps for clients worldwide.Create beautiful, eye-catching on-page messages without the need for a developer.</p>
                </div>
                <div className='leftph'>
                    <img src={img1} height="30" width={"30"}/>
                    <p>Digital experience</p>
                </div>
                <div className='digitaldescription'>
                    <p>We are all developper.</p>
                </div>
                <div className='leftph'>
                    <img src={img2} height="30" width={"30"}/>
                    <p>Branding strategy</p>
                </div>
                <div className='digitaldescription'>
                    <p>We are all developper and also sucker.</p>
                </div>
            </div>
            <div className='rightportion'>

            </div>
            
        </div>
    );
};

export default Graph;