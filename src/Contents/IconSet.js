import React from 'react';
import './CSS/IconSet.css';
import {
    Facebook,
    Twitter,
    Instagram,
    YouTube,
    Call,
    Email,
    WatchLater
} from '@mui/icons-material'
const IconSet = () => {
    return (
        <div>
            <div className='f'> <Facebook /></div>
            <div className='f'><Twitter /></div>
            <div className='f'><Instagram /></div>
            <div className='f'><YouTube /></div>
        </div>

    );
};

export default IconSet;
