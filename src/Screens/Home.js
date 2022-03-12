import React from 'react';
import Header from '../Contents/Header'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Slider from '../Contents/Slider'
import Footer from '../Contents/Footer'
import OurProject from '../Contents/OurProject'
import UserInfo from '../Contents/UserInfo';
import './Css/Home.css';
import { useDispatch } from 'react-redux';
import {alert} from '../action'
import Post from '../Contents/Post'
import Graph from '../Contents/Graph'

const Home = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Header />
            <Parallax pages={4} style={{ top: '0', left: '0' }}>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    style={{ display: 'inline-block', justifyContent: 'center' }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: '100%',
                        marginTop:'120px'
                    }}>
                        <div className='home-div'>
                            <UserInfo />
                        </div>
                        <div className='home-div'>
                            <Slider />
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={.5} style={{ backgroundColor: 'rgba(163, 163, 163, 0.317)' }} />
                <ParallaxLayer
                    offset={1}
                    speed={0.8}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'black',
                    }}>
                    <OurProject />
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: 'rgba(163, 163, 163, 0.317)' }} />
                <ParallaxLayer
                    offset={2}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                    <Post/>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={.5} style={{ backgroundColor: 'rgba(163, 163, 163, 0.317)' }} />
                <ParallaxLayer
                    offset={3}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                    <Graph/>
                </ParallaxLayer>
            </Parallax>
        </div>

    );
};

export default Home;