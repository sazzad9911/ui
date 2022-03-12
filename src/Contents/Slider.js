import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import "./CSS/swiper.min.css";
import { Link } from "react-router-dom";
//for arrow
//import "./components/pagination/pagination.min.css"
//import "./components/navigation/navigation.min.css"
import "./CSS/slider.css"
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";


const Slider = () => {
    SwiperCore.use([EffectCoverflow, Autoplay, Pagination, Navigation]);
    return (

        <div className="mySwiper">
            <Swiper

                navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 768 ? "auto" : "auto"}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 400,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={{
                    clickable: true
                }}
            >
                <SwiperSlide>
                    <img className="slider" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSNswHqc5j4AtjMxoXcfQO9GHuF-ze93P52A&usqp=CAU" alt="img1" />
                    <div className="slider-content">
                        <div className="slider-bottom"> 
                        <p>
                            Hello! I am sunny lion. I am your sex partner. Do you know about ma? If not then you can press the Button.......
                        </p>
                        <Button href="https://www.facebook.com/md.nahiduzzamann/" size="small" variant="outlined">Click Me</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slider" src="https://i2.wp.com/arabicmehndidesign.com/wp-content/uploads/2020/11/Download-100-Islamic-Dp-For-Whatsapp-HD-Pics-Best-Images-1.png?ssl=1" alt="img2" />
                    <div className="slider-content">
                        
                    <div className="slider-bottom"> 
                        <p>
                            Hello! I am sunny lion. I am your sex partner. Do you know about ma? If not then you can press the Button.......
                        </p>
                        <Button href="https://www.facebook.com/md.nahiduzzamann/" size="small" variant="outlined">Click Me</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <img className="slider" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtw7lhQtGxsKO1q-t3wnTZEsGcvw0APA3B02a9ghtjxRZH-AdYbIXNyt2hhd6yoWAFO9k&usqp=CAU" alt="img3" />
                    <div className="slider-content">
                       
                    <div className="slider-bottom"> 
                        <p>
                            Hello! I am sunny lion. I am your sex partner. Do you know about ma? If not then you can press the Button.......
                        </p>
                        <Button href="https://www.facebook.com/md.nahiduzzamann/" size="small" variant="outlined">Click Me</Button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Slider;

