import React from 'react'
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Introduce.css"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const Introduce = () => {


  return (
    <div className="Introduce">

        <img src="src/components/introduce/me.webp" className="Icon" />
        <Swiper 
            modules={[Pagination, Autoplay]} 
            pagination={true}
            loop={true} 
            autoplay={true} 
            className="Texts">
                
            <SwiperSlide><h1>Hello!! I'm IMO!!</h1></SwiperSlide>
            <SwiperSlide><h1>This website made with React</h1></SwiperSlide>
            <SwiperSlide><h1>唐揚げたべたい</h1></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Introduce