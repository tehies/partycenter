import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import '../css/banner-slider.css';


function BannerSlider() {
    return (
        <div> 
            <Swiper
                navigation={false}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="banner-slider">

                <SwiperSlide>
                    <a href="">
                        <img src="/assets/images/banner-mobile-1.jpeg" alt="banner_mobile_1" className='small-mobile' />
                        <img src="/assets/images/banner-1.jpeg" alt="bnner-1" className='for-dektop' />
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href="">
                        <img src="/assets/images/banner-mobile-2.jpeg" alt="banner_mobile_2" className='small-mobile' />
                        <img src="/assets/images/banner-2.webp" alt="bnner-2" className='for-dektop' />
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href="">
                        <img src="/assets/images/banner-mobile-3.jpeg" alt="banner_mobile_3" className='small-mobile'/>
                        <img src="/assets/images/banner-3.webp" alt="bnner-3" className='for-dektop' />
                    </a>
                </SwiperSlide>
                
                <SwiperSlide>
                    <a href="">
                        <img src="/assets/images/banner-mobile-4.jpeg" alt="banner_mobile_4" className='small-mobile'/>
                        <img src="/assets/images/banner-4.webp" alt="bnner-4" className='for-dektop' />
                    </a>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default BannerSlider;
