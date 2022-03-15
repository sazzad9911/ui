import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CSS/Post.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from "react-redux";
import { orange, purple } from "@mui/material/colors";


const Post = () => {
    const theme = useSelector(state => state.PageSettings.isDark)
    const theme1 = createTheme({
        palette: {
            secondary: {
                main: orange[500],
            },
            primary: {
                main: purple[500],
            },
            placeholder:{
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
            <div className="container">
                <h1 style={{
                    color: theme ? 'white' : 'black'
                }}>Post and Comments</h1>
                <Slider {...settings}>
                    <div className="slide">
                        <div className="slide-left">
                            <img height={300} width={300} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' />
                        </div>
                        <div className="slide-right">
                            <h3 style={{
                                color: theme ? 'white' : 'black'
                            }}>What is React Native?</h3>
                            <p style={{
                                color: theme ? 'white' : 'black'
                            }}>React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.</p>
                            <div className="comment">
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField 
                                            className="textfield"
                                            id="outlined-multiline-static"
                                            label="Comment"
                                            sx={{"label": {color: theme ? 'white' : 'black'}}}

                                            multiline
                                            rows={4}
                                        />
                                    </div>
                                    <div className="send-button">
                                        <LoadingButton
                                            size="small"
                                            endIcon={<SendIcon />}
                                            loadingPosition="end"
                                            variant="outlined"
                                        >
                                            <p style={{
                                                color: theme ? 'white' : 'black'
                                            }}>Send</p>
                                        </LoadingButton>
                                    </div>
                                </Box>
                            </div>

                        </div>
                    </div >
                    <div className="slide">
                        <div className="slide-left">
                            <img height={300} width={300} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' />
                        </div>
                        <div className="slide-right">
                            <h3 style={{
                                color: theme ? 'white' : 'black'
                            }}>What is React Native?</h3>
                            <p style={{
                                color: theme ? 'white' : 'black'
                            }}>React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.</p>
                            <div className="comment">
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                    <TextField
                                            id="outlined-multiline-static"
                                            label="Comment"
                                            sx={{"label": {color: theme ? 'white' : 'black'}}}
                                            multiline
                                            rows={4}
                                        />
                                    </div>
                                    <div className="send-button">
                                        <LoadingButton
                                            size="small"
                                            endIcon={<SendIcon />}
                                            loadingPosition="end"
                                            variant="outlined"
                                        >
                                            <p style={{
                                                color: theme ? 'white' : 'black'
                                            }}>Send</p>
                                        </LoadingButton>
                                    </div>
                                </Box>
                            </div>

                        </div>
                    </div >
                </Slider >

            </div >
        </ThemeProvider>
    );
}

export default Post;

