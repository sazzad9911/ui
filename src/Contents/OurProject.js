import React from 'react';
import './CSS/OurProject.css';

const OurProject = () => {
    return (
        <div>
            <div>
                <h1 className='txt'>Our Projects</h1>
            </div>
            <div className='boxx'>
                <div className='box'>
                    <div className='boxxx'>
                        <div className='boxxxx'>
                            <p id='f'>1</p>
                        </div>
                        <div className='txtxt'>
                            <p className='t'>Recent Projects</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='boxxx'>
                        <div className='boxxxx'>
                            <p id='f'>2</p>
                        </div>
                        <div className='txtxt'>
                            <p className='t'>Upcoming Projects</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='boxxx'>
                        <div className='boxxxx'>
                            <p id='f'>3</p>
                        </div>
                        <div className='txtxt'>
                            <p className='t'>Previous Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProject;