import React from 'react';
import './CSS/Header.css'
import {Call, Email, WatchLater
} from '@mui/icons-material'
import { Wave } from 'react-animated-text';
import IconSet from './IconSet'

const Header = () => {
    return (
        <div className="header">
            <div>
                <div className="left">
                    <IconSet/>
                </div>
                <div className="right" style={{ display: 'flex' }}>
                    <div>
                        <Call />
                        <p>+8801761143991</p>
                    </div>
                    <div>
                        <Email />
                        <p>info@scientistx.com</p>
                    </div>
                    <div>
                        <WatchLater />
                        <p>SUN - THU 10:00 pm - 1:00 am</p>
                    </div>
                </div>
            </div>
            <div>
                <div style={{
                    fontSize: '30px'
                }} className="left">
                    <Wave text="Scientistx" effect="stretch"
                        effectDuration={0.9} effectDelay={0.8} effectChange={0.4} />
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    );
};

export default Header;