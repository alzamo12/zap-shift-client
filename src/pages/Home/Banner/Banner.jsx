import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// images
import banner1 from "../../../assets/banner/banner1.png"
import banner2 from "../../../assets/banner/banner2.png"
import banner3 from "../../../assets/banner/banner3.png"
// import "./Banner.css"
import "./Banner.css"
import BannerImg from '../../../components/Home/Banner/BannerImg';


const Banner = () => {
    return (
        <div>
            <Carousel showStatus={false} dynamicHeight={true} autoPlay={true} showThumbs={false} infiniteLoop={true} showArrows={true} useKeyboardArrows={true} stopOnHover={true}>
               <BannerImg bannerImg={banner1}/>
               <BannerImg bannerImg={banner2}/>
               <BannerImg bannerImg={banner3}/>
            </Carousel>
        </div>
    );
};

export default Banner;