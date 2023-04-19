import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Styles.css";
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Slider() {
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
        <SwiperSlide><img src={img1} alt="imagem 1"/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="imagem 2"/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="imagem 3"/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="imagem 4"/></SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
}
