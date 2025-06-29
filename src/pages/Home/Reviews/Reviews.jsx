import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "../../../components/Home/TestimonialCard/TestimonialCard";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])

    return (
        <div className="relative w-full max-w-screen-xl mx-auto px-4 py-16">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                   
                    576: {
                        slidesPerView: 2,
                        centeredSlides: true,
                    },
                    1024: {
                        slidesPerView: 3,
                        centeredSlides: true,
                    },
                }}
                navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn",
                }}
                pagination={{ clickable: true }}
                loop
            >
                {reviews.map((item, idx) => (
                    <SwiperSlide key={item.id}>
                        {({ isActive }) => (
                            <TestimonialCard {...item} active={isActive} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Prev / Next Buttons */}
            <div className="absolute -bottom-12 left-1/2 flex gap-4 -translate-x-1/2">
                <button className="prev-btn w-10 h-10 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition">
                    <svg
                        className="w-5 h-5 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="next-btn w-10 h-10 bg-lime-300 text-white rounded-full shadow hover:bg-lime-400 transition">
                    <svg
                        className="w-5 h-5 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Reviews;