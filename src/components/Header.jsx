import "../css/header.css";
import { Swiper, SwiperSlide } from "swiper/react"; // Core Swiper components
import "swiper/css"; // Swiper styles
import "swiper/css/navigation"; // Optional: Navigation module styles
import "swiper/css/pagination"; // Optional: Pagination module styles
import { Autoplay } from "swiper/modules";
import 'font-awesome/css/font-awesome.min.css'; 
const Header = () => {
  return (
    <div className="header-content">
      <div className="header-nav navfullwidth">
        <div id="shopify-section-header-top" className="shopify-section">
          <div
            id="header"
            data-section-id="header-top"
            data-section-type="header-section"
          >
            <header className="site-header" role="banner">
              <div className="tops_bar_Slider">
                <Swiper
                  modules={[Autoplay]} // Add modules for autoplay and pagination
                  slidesPerView={1} // Number of visible slides
                  spaceBetween={10} // Space between slides
                  autoplay={{
                    delay: 3000, // Time between auto slides (3 seconds)
                    disableOnInteraction: false, // Continue autoplay after interaction
                  }}
                  loop={true} // Enable infinite loop
                  pagination={{ clickable: true }} // Enable pagination dots
                >
                  {/* Slide 1 */}
                  <SwiperSlide>
                    <div className="item">
                      <h4>Free shipping for orders over 250 SAR</h4>
                    </div>
                  </SwiperSlide>

                  {/* Slide 2 */}
                  <SwiperSlide>
                    <div className="item">
                      <h4>Shipping from Riyadh across Saudi Arabia</h4>
                    </div>
                  </SwiperSlide>

                  {/* Slide 3 */}
                  <SwiperSlide>
                    <div className="item">
                      <h4>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="hnf-svg-icon"
                        >
                          <path
                            d="M12 17c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1z"
                            fill="white"
                          ></path>
                          <path
                            fillRule="evenodd"
                            fill="white"
                            clipRule="evenodd"
                            d="M9 2C7.3431 2 6 3.3432 6 5v14c0 1.6569 1.3431 3 3 3h6c1.6569 0 3-1.3431 3-3V5c0-1.6568-1.3431-3-3-3H9zM8 5c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1v14c0 .5523-.4477 1-1 1H9c-.5523 0-1-.4477-1-1V5z"
                          ></path>
                        </svg>
                        Apple Pay
                      </h4>
                    </div>
                  </SwiperSlide>

                  {/* Slide 4 */}
                  <SwiperSlide>
                    <div className="item">
                      <h4>
                        10% Off on First Order. Code:
                        <b>&nbsp;WELCOME10</b>
                      </h4>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="nav-header top-set top_bar_hiden">
                <div className="page-width">
                  <div className="row">
                    <div className="deliverys header-block col-md-4 col-sm-12">
                      <div className="header-text delivery">
                        <span>
                          10% Off on First Order. Code: <b>WELCOME10</b>
                        </span>
                      </div>
                    </div>

                    <div className="header-block col-md-4 col-sm-12 text-center shiping">
                      <div className="header-text">
                        <span>Free Shipping on Orders AED200+</span>
                      </div>
                    </div>

                    <div className="header-block col-md-4 col-sm-12 text-center ships">
                      <div className="header-text">
                        <span className="EN_trnaslate">
                          Shipping from Riyadh across Saudi Arabia
                        </span>
                        <span className="ar_translate hide">
                          الشحن من الرياض عبر المملكة العربية السعودية
                        </span>
                      </div>
                    </div>

                    <div className="header-block col-md-4 col-sm-12 text-center pay">
                      <div className="header-text">
                        <span>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hnf-svg-icon "
                          >
                            <path
                              d="M12 17c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1z"
                              fill="white"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              fill="white"
                              clip-rule="evenodd"
                              d="M9 2C7.3431 2 6 3.3432 6 5v14c0 1.6569 1.3431 3 3 3h6c1.6569 0 3-1.3431 3-3V5c0-1.6568-1.3431-3-3-3H9zM8 5c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1v14c0 .5523-.4477 1-1 1H9c-.5523 0-1-.4477-1-1V5z"
                            ></path>
                          </svg>
                          Apple Pay
                        </span>
                      </div>
                    </div>

                    {/* <div className=" _desktop_user_info user_info full-width col-md-4 com-sm-12">
            <div className="userinfo-inner">
              <ul className="header-bar__module header-bar__module--list">
                <li className="store-location"><a href="/pages/store-locations"><i className="fas fa-map-marker-alt"></i> Store Locations</a></li>
                <li className="phone"><a href="tel:800-MYPARTY (6972789)"><i className="fas fa-phone-volume"></i> 800-MYPARTY (6972789)</a></li>
              </ul>
            </div>
          </div> */}
                  </div>
                </div>
              </div>

              <div className="header-top site-header-inner">
                <div className="page-width">
                  <div className="row">
                    <div className="header-logo-section col-md-3 col-sm-12 col-xs-12 logo_left">
                      <h1 className="h2 header__logo">
                        <a href="/" className="header__logo-image">
                          <img src="assets/header-icons/Party-centre-Logo-with-arabic_version-GIF_2_1024x1024_cf17503e-c020-413e-852d-5976479c61fd_1024x1024.avif" />
                        </a>
                      </h1>
                      <img
                        src="assets/header-icons/KSA_Badge_copy.avif"
                        className="badge_image_twenty"
                      />
                    </div>

                    <div className="ishiheadercontactblock col-md-8 col-sm-6 col-xs-6 hidden-xs-down">
                      <div
                        className="site-header__search col-md-4 hidden-lg-down"
                        id="_desktop_search"
                      >
                        <div className="search-title clearfix collapsed">
                          <span className="search-toggle"></span>
                        </div>

                        <div
                          id="search-container-full"
                          className="search-info collapse"
                        >
                          <form
                            action="/search"
                            method="GET"
                            className="search-form search-header search search--focus"
                          >
                            <input
                              type="text"
                              name="q"
                              className="search-input search-header__input search__input"
                              placeholder="Search for products..."
                            />
                            <button
                              type="submit"
                              className="search-button search-header__submit search__submit btn--link"
                            >
                              <span className="search-logo">
                                {/* <i className="fas fa-search"></i> */}
                                <img src="assets/header-icons/svgexport-8.png" />
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="dextop_icons">
                      <div id="_desktop_login" className="hidden-lg-down">
                        <div className="site-header__cart expand-more">
                          <span className="account-logo hidden-lg-down">
                            <a href="">
                              <span className="head-icon">
                                <i
                                  className="fa fa-user-o"
                                  aria-hidden="true"
                                ></i>
                                <p className="head-account">Account</p>
                              </span>
                            </a>
                          </span>
                        </div>
                      </div>

                      <div id="_desktop_wishlist" className="hidden-lg-down">
                        <div className="wishlist_dextop-icon">
                          <div className="wishlist-content">
                            <a href="">
                              <span className="head-icon">
                                <img src="assets/header-icons/icons8-map-marker-32.png" />
                                <p>Store Locations</p>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div id="_desktop_cart" className="hidden-lg-down">
                        <div className="cart-display site-header__cart expand-more">
                          <div className="cart-title clearfix collapsed">
                            <div className="site-header__cart expand-more">
                              <span className="head-icon cart-logo hidden-lg-down">
                                <span className="cart-logo hidden-lg-down">
                                  <img src="assets/header-icons/shopping-cart.png" />
                                  <p>Cart</p>
                                </span>
                                
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mobile-width hidden-lg-up">
                <div className="page-width">
                  <div className="row">
                    <div className="mobile-width-left">
                      <div id="menu-icon" className="menu-icon hidden-lg-up">
                        <img src="assets/header-icons/hamburger.png" />
                      </div>
                      <img
                        className="mob_badge_image_twenty"
                        src="assets/header-icons/KSA_Badge_copy.avif"
                      />
                    </div>

                    <div className="header-logo-section col-md-3 col-sm-12 col-xs-12 logo_left">
                      <h1
                        className="h2 header__logo"
                        itemscope=""
                        itemtype="http://schema.org/Organization"
                      >
                        <a
                          href="/"
                          itemprop="url"
                          className="header__logo-image"
                        >
                          <img src="assets/header-icons/Party-centre-Logo-with-arabic_version-GIF_2_1024x1024_cf17503e-c020-413e-852d-5976479c61fd_1024x1024.avif" />
                        </a>
                      </h1>
                    </div>

                    <div className="mobile-width-right">
                      {/* <div id="_mobile_scroll_search" style="display:none;"><i className="material-icons">search</i></div> */}

                      <div id="_mobile_cart">
                        <div className="cart-display site-header__cart expand-more">
                          <div className="cart-title clearfix collapsed">
                            <div className="site-header__cart expand-more">
                              <span className="head-icon cart-logo hidden-lg-down">
                                <span className="cart-logo hidden-lg-down">
                                  <img src="assets/header-icons/shopping-cart.png" />
                                </span>
                                <p>Cart</p>
                              </span>

                              <div className="cart-logo hidden-lg-up">
                                <img src="assets/header-icons/shopping-cart.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="_mobile_search">
                    <div
                      className="search-info collapse"
                      id="search-container-full"
                    >
                      <form
                        action="/search"
                        method="GET"
                        className="search-form search-header search search--focus"
                      >
                        <input
                          type="text"
                          name="q"
                          className="search-input search-header__input search__input"
                          placeholder="Search for products..."
                        />
                        <button
                          type="submit"
                          className="search-button search-header__submit search__submit btn--link"
                        >
                          <span className="search-logo">
                            <img src="assets/header-icons/svgexport-8.png" />
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="fixed_menu-mobile">
                  <div className="mobile_tab_menu dddd ww">
                    <ul>
                      <li>
                        <a href="">Disney Golden Princess</a>
                      </li>
                      <li>
                        <a href="">Birthdays</a>
                      </li>
                      <li>
                        <a href="">Balloons</a>
                      </li>
                      <li>
                        <a href="">Costumes</a>
                      </li>
                      <li>
                        <a href="">Decorations</a>
                      </li>
                      <li>
                        <a href="">Party Favours</a>
                      </li>
                      <li>
                        <a href="">Theme Parties</a>
                      </li>
                      <li>
                        <a href="">Baby Events</a>
                      </li>
                      <li>
                        <a href="">Special Occasions</a>
                      </li>
                      <li>
                        <a href="">Holiday Seasons</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>

        <div className="wrapper-nav hidden-lg-down">
          <div className="page-width">
            <div className="row">
              <div
                id="shopify-section-Ishi_megamenu"
                className="shopify-section"
              >
                <div className="megamenu-section hidden-lg-down">
                  <div
                    id="_desktop_top_menu"
                    className="menu js-top-menu hidden-sm-down"
                  >
                    <ul className="top-menu" id="top-menu">
                      <li className="category">
                        <a className="dropdown-item" href="">
                          Disney Golden Princess
                        </a>
                      </li>
                      <li className="category">
                        <a className="dropdown-item" href="">
                          Birthdays
                        </a>
                      </li>
                      <li className="category">
                        <a className="dropdown-item" href="">
                          Balloons
                        </a>
                      </li>
                      <li className="category">
                        <a className="dropdown-item" href="">
                          Costumes
                        </a>
                      </li>
                      <li className="category">
                        <a className="dropdown-item" href="">
                          Decorations
                        </a>
                      </li>
                      <li className="category">
                        <a className="dropdown-item" href="">
                          Party Favours
                        </a>
                      </li>
                      <li className="category">
                        <a className="dropdown-item" href="">
                          Theme Parties
                        </a>
                      </li>
                      <li className="category">
                        <a href="">Baby Events</a>
                      </li>
                      <li className="category">
                        <a className="dropdown-item" href="">
                          Special Occasions
                        </a>
                      </li>
                      <li className="category">
                        <a className="dropdown-item" href="">
                          Holiday Seasons
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
