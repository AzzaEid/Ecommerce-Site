import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};
////المطلوب اني اربط هدول البوتنز مع css
/// لازم افصل كود السوايبر لحالو وابعثلو الاريه الي بدي يلف عليها 