import React from 'react';
import './CSS/Footer.css';
import png from './../Files/Scientixtx.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from "react-redux";
import { orange, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles';



const Footer = () => {
    const theme = useSelector(state => state.PageSettings.isDark)
    const theme1 = createTheme({
        palette: {
            secondary: {
                main: orange[500],
            },
            primary: {
                main: purple[500],
            },
            placeholder: {
                main: purple[500]
            }
        },
        overrides: {
            MuiInput: {
                input: {
                    "&::placeholder": {
                        color: "white"
                    },
                    color: "white", // if you also want to change the color of the input, this is the prop you'd use
                }
            }
        }
    })
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <ThemeProvider theme={theme1}>
            <div className='footerbody'>
                <div className='footerbodyone'>
                    <div className='bodyf'>
                        <div className='bodyftop'></div>
                        <div><img src={png} height="80px" width="auto" /></div>
                        <div> <p
                            style={{
                                color: theme ? 'white' : 'black'
                            }}
                        >This is the site for something new innovation.You can build with us any project.</p></div>
                        <div className='ficon'>
                            <div className='footerIconSetf'><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></div>
                            <div className='footerIconSetf'><FontAwesomeIcon icon={faTwitter} /></div>
                            <div className='footerIconSetf'><FontAwesomeIcon icon={faInstagram} /></div>
                            <div className='footerIconSetf'><FontAwesomeIcon icon={faYoutube} /></div>
                        </div>
                    </div>
                    <div className='bodys'>
                        <p id='txt' style={{
                            color: theme ? 'white' : 'black'
                        }}
                        >ABOUT<br />SERVICES<br />JOB OPPORTUNITIES<br />CALENDER OF EVENTS<br />LOCATION</p>
                    </div>
                </div>
                <div className='footerbodytwo'>
                    <div className='bodyth'>
                        <p id='txt'
                            style={{
                                color: theme ? 'white' : 'black'
                            }}
                        >ADITIONAL LINKS<br />ABOUT US<br />TERMS & CONDITIONS<br />PRIVACY POLICIES<br />NEWS<br />CONTACT US</p>
                    </div>
                    <div className='bodyfo'>
                        <p id='txt'
                            style={{
                                color: theme ? 'white' : 'black'
                            }}
                        >CATEGORIES</p>
                    </div>

                </div>
            </div>
        </ThemeProvider>
    );
};

export default Footer;