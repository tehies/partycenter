import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import '../css/banner-slider.css';
import { useTranslation } from "react-i18next";

const BannerSlider = () => {
  const { i18n } = useTranslation();
  const [isRtl, setIsRtl] = useState(i18n.language === "ar");
  const [swiperKey, setSwiperKey] = useState(0); // To force Swiper reinitialization

  useEffect(() => {
    // Update direction and reinitialize Swiper when language changes
    const isArabic = i18n.language === "ar";
    setIsRtl(isArabic);
    document.body.dir = isArabic ? "rtl" : "ltr";
    setSwiperKey((prevKey) => prevKey + 1); // Update key to force Swiper re-render
  }, [i18n.language]);

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <Swiper
        key={swiperKey} // Force re-render when key changes
        dir={isRtl ? "rtl" : "ltr"} // Explicitly set Swiper's direction
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="banner-slider"
      >
        <SwiperSlide>
          <a href="#">
            <img src="/assets/images/banner-mobile-1.jpeg" alt="banner_mobile_1" className="small-mobile" />
            <img src="/assets/images/banner-1.jpeg" alt="banner-1" className="for-desktop" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="#">
            <img src="/assets/images/banner-mobile-2.jpeg" alt="banner_mobile_2" className="small-mobile" />
            <img src="/assets/images/banner-2.webp" alt="banner-2" className="for-desktop" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="#">
            <img src="/assets/images/banner-mobile-3.jpeg" alt="banner_mobile_3" className="small-mobile" />
            <img src="/assets/images/banner-3.webp" alt="banner-3" className="for-desktop" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="#">
            <img src="/assets/images/banner-mobile-4.jpeg" alt="banner_mobile_4" className="small-mobile" />
            <img src="/assets/images/banner-4.webp" alt="banner-4" className="for-desktop" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
