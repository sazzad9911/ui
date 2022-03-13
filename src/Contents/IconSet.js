import React from 'react';
import './CSS/IconSet.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


library.add(faFacebookF);

const IconSet = () => {
    return (
        <div className='IconSets'>
            <div className='IconSetf'>
                <FontAwesomeIcon  icon="fa-brands fa-facebook-f" />
            </div>
            <div className='IconSetf'>
                <FontAwesomeIcon  icon={faTwitter} />
            </div>
            <div className='IconSetf'>
                <FontAwesomeIcon  icon={faInstagram} />
            </div>
            <div className='IconSetf'>
                <FontAwesomeIcon icon={faYoutube} />
            </div>
        </div>
    );
};

export default IconSet;