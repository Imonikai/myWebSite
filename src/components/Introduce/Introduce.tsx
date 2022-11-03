import React from 'react'
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Introduce.scss"
import Image from "./me.webp"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const Introduce = () => {


  return (
    <div className="Introduce">

        <img src={Image} className="Icon" />
        <Swiper 
            modules=
            {[
                Pagination,
                Autoplay,
            ]} 
            autoplay={{
                "delay":3000,
                "disableOnInteraction": false,
            }}
            pagination={true}
            loop={true} 
            className="Texts"
        >
                
            <SwiperSlide><h1>Hello!! I'm IMO!!</h1></SwiperSlide>
            <SwiperSlide><h1>This website was made with React</h1></SwiperSlide>
            <SwiperSlide><h1>唐揚げたべたい</h1></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Introduce