import React from 'react';
import {useSelector} from 'react-redux'

const UserInfo = () => {
    const theme= useSelector(state=>state.PageSettings.isDark)

    return (
        <div>
            <h1 style={{color: theme? 'white':'black'}}>Hi, Md Shariar</h1>
        </div>
    );
};

export default UserInfo;