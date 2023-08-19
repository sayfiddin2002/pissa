import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from '../../img/swiper1.png';
import img2 from '../../img/swiper2.png';
import '../../style/style.css'

export default function Hero() {

    return (

        <section data-aos="fade-up" className="swip">
            <Swiper className="w-full relative cursor-pointer"
                slidesPerView={2}
                loop

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    868: {
                        slidesPerView: 2,
                    },
                }}
            >
                <SwiperSlide>
                    <img style={{ width: '100%', height: 'autu', padding: '0', margin: '0' }} src={img1} alt="slide" />
                </SwiperSlide>

                <SwiperSlide >
                    <img style={{ width: '100%', height: 'auto' }} src={img2} alt="slide" />
                </SwiperSlide>

                <SwiperSlide >
                    <img style={{ width: '100%', height: 'auto' }} src={img1} alt="slide" />
                </SwiperSlide>

                <SwiperSlide >
                    <img style={{ width: '100%', height: 'auto' }} src={img2} alt="slide" />
                </SwiperSlide>

            </Swiper>

        </section>

    )
}