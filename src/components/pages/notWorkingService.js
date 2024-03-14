import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/Service.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../style/images2/8686f14a-51ad-4011-a2f8-0493fb8387f4.JPG';
import slide_image_2 from '../style/images2/212c2968-7559-4060-a443-bd740e9f80c0.JPG';
import slide_image_3 from '../style/images2/744cad67-3a2f-41a4-8f1c-6ff9d1260aab.JPG';
import slide_image_4 from '../style/images2/d42c81fa-0949-4882-a80e-be8ada8197ba.JPG';
import slide_image_5 from '../style/images2/02d7226a-e483-4091-bdda-e980a662d28d.JPG';
import slide_image_6 from '../style/images2/6014f80f-7b13-47ce-9a42-404ed7166d1f.JPG';
import slide_image_7 from '../style/images2/f2427a96-f6e9-404b-a7df-271af86bdc52.JPG';
import slide_image_8 from '../style/images2/8d1929ab-bb95-4323-9526-5d9499968f34.JPG';
import slide_image_9 from '../style/images2/9dabd6bf-73cc-4613-9298-684415cc89eb.JPG';
import slide_image_10 from '../style/images2/2979f21e-2e36-4105-8124-27627ed40122.JPG';
import slide_image_11 from '../style/images2/39b6bc43-584d-4ae0-b2c0-faebf333ed7f.JPG';
import slide_image_12 from '../style/images2/45f082fc-028f-4e7e-8842-eb88475c7728.JPG';
import slide_image_13 from '../style/images2/6755ceb0-d97d-4fb9-b31f-288de599575e.JPG';
import slide_image_14 from '../style/images2/ba1329cc-567c-4d20-902d-ff33694b3e4f.JPG';
import slide_image_15 from '../style/images2/752d9b16-41b5-4840-8d99-bcf8d078f6ba.JPG';
import slide_image_16 from '../style/images2/a0f3e05d-ce24-4b11-b016-e7359c7f10c5.JPG';
import slide_image_17 from '../style/images2/cdc59e80-17d4-4ff9-a11b-84c1211526a7.JPG';
import slide_image_18 from '../style/images2/b09ff76b-0e17-4606-ab03-0204d2c87a4f.JPG';
import slide_image_19 from '../style/images2/e8f98972-e241-4724-aff3-752bf6df1030.JPG';
import slide_image_20 from '../style/images2/c209063c-0d2d-4eb2-8769-680d70b34926.JPG';
import slide_image_21 from '../style/images2/9f769784-bb88-4f1f-ae10-c426c368ab43.JPG';
import slide_image_22 from '../style/images2/a011b5e6-23cd-4c9f-884f-d40bbe726922.JPG';
import slide_image_23 from '../style/images2/7ecdb19c-d2f6-464a-8274-aa9b93d14751.JPG';
import slide_image_24 from '../style/images2/186e8b69-1870-45a2-9551-8ca8c976e251.JPG';
import slide_image_25 from '../style/images2/cf472a53-f54c-433a-a2af-8d47f35d188e.JPG';
import slide_image_26 from '../style/images2/1807f99b-d83a-42ce-9634-465a63c9a72e.JPG';
import slide_image_27 from '../style/images2/b8ef3053-b9f4-4c40-8384-58199db2b769.JPG';
import slide_image_28 from '../style/images2/805d5c64-1f15-412e-abd2-7d59a945abb0.JPG';
import slide_image_29 from '../style/images2/39d8eedf-6a93-41f1-92c5-3a9e605f00c3.JPG';
import slide_image_30 from '../style/images2/af48a528-50d8-4a0d-aa20-e92a91c1adce.JPG';
import slide_image_31 from '../style/images2/750f4cd4-ca9f-4102-8eee-63177aab07b7.JPG';
import slide_image_32 from '../style/images2/08557c87-1faf-4b5c-af12-352573b247fa.JPG';
import slide_image_33 from '../style/images2/745aa33d-c541-4409-8db7-b30bfd908df8.JPG';
import slide_image_34 from '../style/images2/0355a281-94d8-4144-893e-9b7e41d0984a.JPG';
import slide_image_35 from '../style/images2/28825b29-3d91-45c3-b528-99c1238d8352.JPG';
import slide_image_36 from '../style/images2/IMG_7996.jpeg';
import slide_image_37 from '../style/images2/IMG_7789.jpeg';
import slide_image_38 from '../style/images2/IMG_7786.jpeg';
import slide_image_39 from '../style/images2/IMG_7772.jpeg';


function Service() {
  return (
    <div className="container">
      <h1 className="heading">Projektit</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_13} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_14} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_15} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_16} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_17} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_18} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_19} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_20} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_21} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_22} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_23} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_24} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_25} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_26} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_27} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_28} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_29} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_30} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_31} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_32} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_33} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_34} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_35} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_36} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_37} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_38} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_39} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Service;