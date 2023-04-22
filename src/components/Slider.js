import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img1_mobile from '../img/img1-mobile.jpg'
import img2_mobile from '../img/img2-mobile.jpg'
import img3_mobile from '../img/img3-mobile.jpg'
import img4_mobile from '../img/img4-mobile.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useState, useEffect } from 'react';

export default function Slider() {

  const[imagem1, setImagem1] = useState(img1)
  const[imagem2, setImagem2] = useState(img2)
  const[imagem3, setImagem3] = useState(img3)
  const[imagem4, setImagem4] = useState(img4)

  useEffect(()=>{
    function redimensionarImagens(){
      if(window.innerWidth < 800){
        setImagem1(img1_mobile)
        setImagem2(img2_mobile)
        setImagem3(img3_mobile)
        setImagem4(img4_mobile)
      } else {
        setImagem1(img1)
        setImagem2(img2)
        setImagem3(img3)
        setImagem4(img4)
      }
    }

    redimensionarImagens()

    window.addEventListener('resize', redimensionarImagens)

    return()=>{
      window.removeEventListener('resize', redimensionarImagens)
    }

  }, [])


  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={imagem1} alt="imagem 1"/></SwiperSlide>
        <SwiperSlide><img src={imagem2} alt="imagem 2"/></SwiperSlide>
        <SwiperSlide><img src={imagem3} alt="imagem 3"/></SwiperSlide>
        <SwiperSlide><img src={imagem4} alt="imagem 4"/></SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
}
