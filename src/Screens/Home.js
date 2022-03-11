import React from 'react';
import Header from '../Contents/Header'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Slider from '../Contents/Slider'
import Footer from '../Contents/Footer'
import OurProject from '../Contents/OurProject'

const Home = () => {

    return (
        <Parallax pages={3} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
                offset={0}
                speed={2.5}
                style={{ display: 'inline-block', justifyContent: 'center' }}>
                <Header />
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100%',
                }}>
                    <div style={{
                        width:'50%',
                    }}>

                    </div>
                    <div style={{
                        width:'50%',
                    }}>
                        <Slider />
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={.5} style={{ backgroundColor: '#ff6d6d' }} />
            <ParallaxLayer
                offset={1}
                speed={0.8}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                }}>
                <OurProject/>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#ff6d6d' }} />
            <ParallaxLayer
                offset={2}
                speed={0.5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                }}>
                <Footer/>
            </ParallaxLayer>
        </Parallax>
    );
};

export default Home;