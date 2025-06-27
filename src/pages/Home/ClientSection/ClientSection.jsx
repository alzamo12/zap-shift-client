import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import logo1 from "../../../assets/brands/amazon.png"
import logo2 from "../../../assets/brands/amazon_vector.png"
import logo3 from "../../../assets/brands/casio.png"
import logo4 from "../../../assets/brands/moonstar.png"
import logo5 from "../../../assets/brands/randstad.png"
import logo6 from "../../../assets/brands/start-people 1.png"
import logo7 from "../../../assets/brands/start.png"
import LogoSlide from '../../../components/Home/ClientSection/LogoSlide';

const ClientSection = () => {
    return (
        <section className=" bg-gray-50 space-y-8">
            <h2 className="card-title justify-center text-secondary text-base md:text-2xl ">We've helped thousands of sales teams</h2>

            <div className=" mx-auto px-4">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    <SwiperSlide>
                        <LogoSlide src={logo1} alt="Company Logo 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LogoSlide src={logo2} alt="Company Logo 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LogoSlide src={logo3} alt="Company Logo 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LogoSlide src={logo4} alt="Company Logo 4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LogoSlide src={logo5} alt="Company Logo 5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LogoSlide src={logo6} alt="Company Logo 6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LogoSlide src={logo7} alt="Company Logo 7" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default ClientSection;