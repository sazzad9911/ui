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
                    <img className="slider" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-uIjwaqEu3W_q9jCNvK9r3KdCFUHGMMs_A&usqp=CAU" alt="img1" />
                    <div className="slider-content">
                        <div className="slider-bottom"> 
                        <p>
                            Hello! I am sunny lion. I am your sex partner. Do you know about ma? If not then you can press the Button.......
                        </p>
                        <Button href="https://www.google.com/search?q=boobs+of+sunny+leone&rlz=1C1GCEB_enBD989BD989&sxsrf=APq-WBsHB6RSD5hij8yFMqDRbEDdOP_N6w:1647084064328&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjn3sakusD2AhWQ_XMBHb2PC1kQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1" size="small" variant="outlined">Press Boobs</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slider" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYapAPWUBa3MWsJRxDlGg4l9p9uHOf8CS_g&usqp=CAU" alt="img2" />
                    <div className="slider-content">
                        
                    <div className="slider-bottom"> 
                        <p>
                            Hello! I am sunny lion. I am your sex partner. Do you know about ma? If not then you can press the Button.......
                        </p>
                        <Button href="https://www.google.com/search?q=boobs+of+sunny+leone&rlz=1C1GCEB_enBD989BD989&sxsrf=APq-WBsHB6RSD5hij8yFMqDRbEDdOP_N6w:1647084064328&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjn3sakusD2AhWQ_XMBHb2PC1kQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1" size="small" variant="outlined">Press Boobs</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <img className="slider" src="https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/sunny-leone-bikini-photo-201610-1585208358.jpg" alt="img3" />
                    <div className="slider-content">
                       
                    <div className="slider-bottom"> 
                        <p>
                            Hello! I am sunny lion. I am your sex partner. Do you know about ma? If not then you can press the Button.......
                        </p>
                        <Button href="https://www.google.com/search?q=boobs+of+sunny+leone&rlz=1C1GCEB_enBD989BD989&sxsrf=APq-WBsHB6RSD5hij8yFMqDRbEDdOP_N6w:1647084064328&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjn3sakusD2AhWQ_XMBHb2PC1kQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1" size="small" variant="outlined">Press Boobs</Button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Slider;

