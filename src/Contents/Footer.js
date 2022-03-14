import React from 'react';
import './CSS/Footer.css';
import png from './../Files/Scientixtx.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footerbody'>
            <div className='footerbodyone'>
                <div className='bodyf'>
                <div className='bodyftop'></div>
                <div><img src={png} height="80px" width="auto" /></div>
                <div> <p>This is the site for something new innovation.You can build with us any project.</p></div>
                <div className='ficon'>
                <div className='footerIconSetf'><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></div>
                <div className='footerIconSetf'><FontAwesomeIcon icon={faTwitter} /></div>
                <div className='footerIconSetf'><FontAwesomeIcon icon={faInstagram} /></div>
                <div className='footerIconSetf'><FontAwesomeIcon icon={faYoutube} /></div>
                </div>                
                </div>
                <div className='bodys'>
                <p>ABOUT<br />SERVICES<br />JOB OPPORTUNITIES<br />CALENDER OF EVENTS<br />LOCATION</p>
                </div>
            </div>
            <div className='footerbodytwo'>
                <div className='bodyth'>

                </div>
                <div className='bodyfo'>
                <p>amanullah</p>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;