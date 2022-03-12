import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { alert } from '../action'
import '../App.css'

const Alert = () => {
    const alertMessage = useSelector(state => state.PageSettings.alert);
    const dispatch = useDispatch()

    const style = {
        div: {
            width: '350px',
            minHeight: '200px',
            backgroundColor: 'blue',
            borderRadius: '5px',
            boxShadow: '1px 1px 10px black'
        }
    }

    return (
        <div>
            {
                alertMessage.state?
                (
                    <div className="loader">
                        <div style={style.div}>
                            <button onClick={()=>dispatch(alert(false,' ',' '))}>Close</button>
                        </div>
                    </div>
                ):(
                    <div></div>
                )
            }
        </div>
    );
};

export default Alert;