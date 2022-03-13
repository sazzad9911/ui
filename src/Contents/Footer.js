import React from 'react';
import './CSS/Footer.css';
import png from './../Files/Scientixtx.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footerbody'>
            <div className='footerbodyf'>
                <div className='footerscientistxicon'>
                    <img src={png} height="120px" width="auto" />
                </div>
                <div className='footertxt'>
                    <p>This is the site for something new innovation.You can build with us any project.</p>
                </div>
                <div className='footerIconSetbox'>
                    <div className='footerIconSets'>
                        <div className='footerIconSetf'>
                            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                        </div>
                        <div className='footerIconSetf'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className='footerIconSetf'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className='footerIconSetf'>
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerbodys'>
            <p className='footerbodystxt'>ABOUT<br/>SERVICES<br/>JOB OPPORTUNITIES<br/>CALENDER OF EVENTS<br/>LOCATION</p>
            </div>
            <div className='footerbodyt'>

            </div>
            <div className='footerbodyfo'>

            </div>
        </div>
    );
};

export default Footer;