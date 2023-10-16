import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/styles/swiper/swiper.css'
// import required modules
import { EffectFade,Autoplay, Pagination } from 'swiper/modules';

export default function HeaderSlide() {
    return (
      <>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade,Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://img07.shop-pro.jp/PA01361/349/slideshow/slideshow_img_28c79a.jpg?cmsp_timestamp=20230912174034" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img07.shop-pro.jp/PA01361/349/slideshow/slideshow_img_f13a8b.jpg?cmsp_timestamp=20230929104847" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img07.shop-pro.jp/PA01361/349/slideshow/slideshow_img_2dd1ab.jpg?cmsp_timestamp=20230623090403" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img07.shop-pro.jp/PA01361/349/slideshow/slideshow_img_8337a7.jpg?cmsp_timestamp=20220922155208" />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
  