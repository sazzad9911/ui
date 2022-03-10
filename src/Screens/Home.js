import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Contents/Header'
import Footer from '../Contents/Footer'
import {loader} from '../action'

const Home = () => {
    const dispatch = useDispatch()

    return (
        <div>
        <button onClick={()=>dispatch(loader(true,'it happens'))}>Load</button>
            <Header/>
            <Footer/>
        </div>
    );
};

export default Home;