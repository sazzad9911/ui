import React from 'react';
import './CSS/IconSet.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


library.add(faFacebookF);

const IconSet = () => {

    return (
        <div className='s'>
            <div className='f'>
                <FontAwesomeIcon  icon="fa-brands fa-facebook-f" />
            </div>
            <div className='f'>
                <FontAwesomeIcon  icon={faTwitter} />
            </div>
            <div className='f'>
                <FontAwesomeIcon  icon={faInstagram} />
            </div>
            <div className='f'>
                <FontAwesomeIcon icon={faYoutube} />
            </div>
        </div>
    );
};

export default IconSet;