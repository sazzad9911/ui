import React from 'react';
import animationData from '../Files/lf30_editor_2wlpugxw.json'
import Lottie from 'react-lottie';
import '../App.css'
import {useSelector} from 'react-redux'

const Loader = (props) => {

    const loader = useSelector((state) => state.PageSettings.loader)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            {loader.state ? (
                <div className="loader">
                    <div>
                        <Lottie options={defaultOptions}
                            height={150}
                            width={150}/>
                        <h3>{loader.text ? loader.text : 'Loading ...'}</h3>
                    </div>
                </div>
            ):(
                <div></div>
            )}
        </div>
    );
};

export default Loader;