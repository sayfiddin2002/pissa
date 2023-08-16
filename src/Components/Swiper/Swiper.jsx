import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from '../../img/swiper1.png';
import img2 from '../../img/swiper2.png';

export default function Hero() {

    return (
        <section data-aos="fade-up" className="mb-10">
            <Swiper className="w-full relative cursor-pointer"
                slidesPerView={2}
                loop

                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    868: {
                        slidesPerView: 2,
                    },
                }}
            >
                <SwiperSlide >
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