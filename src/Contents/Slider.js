import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import "./CSS/swiper.min.css";
import "./CSS/slider.css"
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";


const Slider = () => {
    SwiperCore.use([Autoplay])
    SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
    return (
        
        <div className="slider-body">
            <Swiper 
            
                navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                loop={true}
                autoplay={{
                    delay: 2000,
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
                    <img className="slider"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-uIjwaqEu3W_q9jCNvK9r3KdCFUHGMMs_A&usqp=CAU" alt="img1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slider"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYapAPWUBa3MWsJRxDlGg4l9p9uHOf8CS_g&usqp=CAU" alt="img2"/>
                </SwiperSlide>
                <SwiperSlide >
                    <img className="slider" src="https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/sunny-leone-bikini-photo-201610-1585208358.jpg" alt="img3"/>
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Slider;

