import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CSS/Post.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SendIcon from '@mui/icons-material/Send';


const Post = () => {
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
        <div className="container">
            <h1>Post and Comments</h1>
            <Slider {...settings}>
                <div className="slide">
                    <div className="slide-left">
                        <img height={400} width={300} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' />
                    </div>
                    <div className="slide-right">
                        <h3>What is React Native?</h3>
                        <p>React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.</p>
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
                                        multiline
                                        rows={4}
                                        placeholder="Enter Your Any Comments!"
                                    />
                                </div>
                                <div className="send-button">
                                    <LoadingButton
                                        size="small"
                                        endIcon={<SendIcon />}
                                        loadingPosition="end"
                                        variant="outlined"
                                    >
                                        Send
                                    </LoadingButton>
                                </div>
                            </Box>
                        </div>

                    </div>
                </div >
                <div className="slide">
                    <div className="slide-left">
                        <img height={400} width={300} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' />
                    </div>
                    <div className="slide-right">
                        <h3>What is React Native?</h3>
                        <p>React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.</p>
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
                                        multiline
                                        rows={4}
                                        placeholder="Enter Your Any Comments!"
                                    />
                                </div>
                                <div className="send-button">
                                    <LoadingButton
                                        size="small"
                                        endIcon={<SendIcon />}
                                        loadingPosition="end"
                                        variant="outlined"
                                    >
                                        Send
                                    </LoadingButton>
                                </div>
                            </Box>
                        </div>

                    </div>
                </div >
            </Slider >
            
        </div >
    );
}

export default Post;

