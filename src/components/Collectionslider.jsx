import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Core Swiper components
import 'swiper/css'; // Swiper styles
import 'swiper/css/navigation'; // Optional: Navigation module styles
import 'swiper/css/pagination'; // Optional: Pagination module styles
import { Navigation } from 'swiper/modules'; // Optional modules
import '../css/collection-slider.css';

const Collectionslider = () => {
  return (
    <div className="disney-princess-slider">
      <div className="page-width">
        <Swiper
          modules={[Navigation]} // Add desired modules
          spaceBetween={30} // Space between slides
          slidesPerView={4} // Default number of slides visible
          loop={true} // Enable infinite loop
          pagination={{ clickable: true }} // Enables pagination dots
          navigation={{
            // Enable navigation arrows
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            // Define breakpoints for responsiveness
            0: {
              slidesPerView: 1, // 1 slide visible on mobile (0px and up)
              spaceBetween: 10, // Less space between slides on small screens
            },
            768: {
              slidesPerView: 2, // 2 slides visible on tablets (768px and up)
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4, // 4 slides visible on desktops (1024px and up)
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="disney-princess">
              <a href="">
                <div className="disney-princess-img">
                  <img
                    src="//partycentre.sa/cdn/shop/files/Halloween_1__5_11zon.webp?v=1727349197"
                    alt="Halloween"
                  />
                </div>
                <div className="disney-princess-block">
                  <div className="disney-princess-title">Halloween</div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="disney-princess">
              <a href="">
                <div className="disney-princess-img">
                  <img
                    src="//partycentre.sa/cdn/shop/files/New-Year_1__3_11zon.webp?v=1727349197"
                    alt="New Year"
                  />
                </div>
                <div className="disney-princess-block">
                  <div className="disney-princess-title">New Year</div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="disney-princess">
              <a href="">
                <div className="disney-princess-img">
                  <img src="//partycentre.sa/cdn/shop/files/h_2__11zon.webp?v=1727351612" alt="Bridal Shower" />
                </div>
                <div className="disney-princess-block">
                  <div className="disney-princess-title">Bridal Shower</div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="disney-princess">
              <a href="">
                <div className="disney-princess-img">
                  <img src="//partycentre.sa/cdn/shop/files/Wedding_1__1_11zon.webp?v=1727349197" alt="Wedding" />
                </div>
                <div className="disney-princess-block">
                  <div className="disney-princess-title">Wedding</div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="disney-princess">
              <a href="">
                <div className="disney-princess-img">
                  <img src="//partycentre.sa/cdn/shop/files/First-Bday_1__4_11zon.webp?v=1727349197" alt="1st Birthday" />
                </div>
                <div className="disney-princess-block">
                  <div className="disney-princess-title">1st Birthday</div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Collectionslider;
