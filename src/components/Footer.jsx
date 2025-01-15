import React, { useState } from "react";
import "../css/footer.css";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const {t} = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("Please agree to receive promotional emails.");
      return;
    }
    console.log("Email submitted:", email);
    // You can handle form submission logic here, such as sending data to your API.
  };
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };
  return (
    <footer className="site-footer footerimage">
      <div className="nimonics_icons_container">
        <div className="nimonics_icons desk_onl">
          <img src="https://cdn.shopify.com/s/files/1/0571/0525/2512/files/New_Footer_Design_4.png?v=1697439193" />
        </div>

        <ul className="nimonics_icons mobil_onl">
          <li>
            <div className="image_text_foot">
              <div className="imagefoot">
                <img src="https://cdn.shopify.com/s/files/1/0571/0525/2512/files/1_e547ccd9-820f-4f20-9cb6-7c56da041ac6.webp?v=1696935489" />
              </div>
              <div className="textfoot">
                <h3>{t("In-store Pick-Up")}</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="image_text_foot">
              <div className="imagefoot">
                <img src="https://cdn.shopify.com/s/files/1/0571/0525/2512/files/footer_logos-transparent.png?v=1696941049" />
              </div>
              <div className="textfoot">
                <h3>{t("Registered in KSA")}</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="image_text_foot">
              <div className="imagefoot">
                <img src="https://cdn.shopify.com/s/files/1/0571/0525/2512/files/6_0f276a97-96f3-4be8-b543-c31b43d8944e.png?v=1696935088" />
              </div>
              <div className="textfoot">
                <h3>{t("100% Authentic")}</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="image_text_foot">
              <div className="imagefoot">
                <img src="https://cdn.shopify.com/s/files/1/0571/0525/2512/files/4_9c222eb6-777d-4442-b8df-2d2cb5a26437.webp?v=1696935490" />
              </div>
              <div className="textfoot">
                <h3 className="neomic_for_desctop">
                  {t("Free Shipping on Orders SAR 250+")}
                </h3>
                {/* <h3 class="neomic_for_mobile" style="display:none">Free Shipping on Orders SAR 250+</h3> */}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="footer-before">
        <div className="page-width">
          <div className="row">
            <div className="block_newsletter footer-block">
              <div id="newsletter-container" className="newsletter-inner">
                <div className="newsletter_text col-md-4 col-lg-4">
                  <h2 className="title_block EN_trnaslate">{t("Folow Us")}</h2>
                  <h3 className="followus_party">#{t("PARTYCENTRE")}</h3>
                  <div className="footer-right">
                    <div className="follow-us">
                      <div
                        id="social-icon-container"
                        className="social-icon-inner"
                      >
                        <div className="social-media-blocks">
                          <div className="social-icon-inner">
                            <div className="header-social">
                              <ul className="list--inline site-footer__social-icons social-icons">
                                <li className="instagram">
                                  <a
                                    className="social-icons__link"
                                    href="https://instagram.com/partycentrearabia"
                                    title="Party Centre Saudi Arabia on Instagram"
                                    target="_blank"
                                  >
                                    <i
                                      className="fa fa-instagram"
                                      aria-hidden="true"
                                    ></i>
                                    <span className="icon__-text">
                                      {t("Instagram")}
                                    </span>
                                  </a>
                                </li>
                                <li claclassNamess="tiktok">
                                  <a
                                    className="social-icons__link"
                                    href="https://www.tiktok.com/@partycentre.sa"
                                    title="Party Centre Saudi Arabia on tiktok"
                                    target="_blank"
                                  >
                                    <svg
                                      className="colorchange"
                                      fill="black"
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="1em"
                                      viewBox="0 0 448 512"
                                    >
                                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                                    </svg>
                                    <span className="icon__-text">
                                      {t("Translation missing: en.general.social.tiktok")}
                                    </span>
                                  </a>
                                </li>
                                <li className="facebook">
                                  <a
                                    className="social-icons__link"
                                    href="https://www.facebook.com/PartyCentreArabia"
                                    title="Party Centre Saudi Arabia on Facebook"
                                    target="_blank"
                                  >
                                    <i
                                      className="fa fa-facebook"
                                      aria-hidden="true"
                                    ></i>
                                    <span className="icon__-text">
                                      {t("Facebook")}
                                    </span>
                                  </a>
                                </li>
                                <li className="youtube">
                                  <a
                                    className="social-icons__link"
                                    href="https://www.youtube.com/channel/UChmnORIF9yz_5wIJblbIxgQ/featured"
                                    title="Party Centre Saudi Arabia on YouTube"
                                    target="_blank"
                                  >
                                    <i
                                      className="fa fa-youtube-play"
                                      aria-hidden="true"
                                    ></i>
                                    <span className="icon__-text">{t("YouTube")}</span>
                                  </a>
                                </li>
                                <li className="pinterest">
                                  <a
                                    className="social-icons__link"
                                    href="https://www.pinterest.com/mypartycentre"
                                    title="Party Centre Saudi Arabia on Pinterest"
                                    target="_blank"
                                  >
                                    <i
                                      className="fa fa-pinterest-p"
                                      aria-hidden="true"
                                    ></i>
                                    <span className="icon__-text">
                                      {t("Pinterest")}
                                    </span>
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

                <div
                  id="_desktop_contact_payment"
                  className="col-md-4 contact-payment"
                >
                  <div className="footer-content contact-info">
                    <div
                      id="contact-info-container"
                      className="contact-info-inner footer-dropdown"
                    >
                      <h2 className="footer-heading EN_trnaslate">
                        {t("Contact Us")}
                      </h2>
                      <h2 className="footer-heading ar_translate hide">
                        اتصل بنا
                      </h2>
                      <ul className="site-footer__linklist">
                        <li className="cus_phone_number site-footer__linklist-item shop-address">
                          <i className="fa fa-phone"></i>
                          <div className="content">
                            <a href="tel:+966 11 2369992">+966-11-2369992</a>
                          </div>
                        </li>
                        <li className="site-footer__linklist-item shop-email">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                          <div className="content">
                            <a href="mailto:customerservice@bluepatharabia.com">
                              customerservice@bluepatharabia.com
                            </a>
                          </div>
                        </li>
                        <li className="cus_phone_number site-footer__linklist-item shop-contact">
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                          <div className="content">
                            <a href="https://api.whatsapp.com/send?phone=966552648115">
                              +966-55-2648115
                            </a>
                          </div>
                        </li>
                        <li className="site-footer__linklist-item shop-contact">
                          <div className="content">
                            <p className="vat EN_trnaslate">
                              <span>{t("VAT ID")}:</span> 302008533300003
                            </p>
                            <p className="vat ar_translate hide">
                              <span>الرقم التعريفي لضريبة القيمة المضافة:</span>{" "}
                              302008533300003
                            </p>
                            <p className="vat EN_trnaslate">
                              <span>{t("CR No")}. :</span> 1010467934
                            </p>
                            <p className="vat ar_translate hide">
                              <span>رقم السجل :</span> 1010467934
                            </p>
                            <p className="vat EN_trnaslate">
                              {t("Blue Path International Trading Co. Branch")}
                            </p>
                            <p className="vat ar_translate hide">
                              فرع شركة بلوباث للتجارة العالمية
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="site-footer__newsletter col-md-4 col-lg-4 ">
                  <h2 className="title_block EN_trnaslate">{t("SIGN UP")}</h2>
                  <h2 className="title_block ar_translate hide">اشتراك</h2>
                  <p className="block-newsletter-label EN_trnaslate">{t("Get access on exclusive offers and promotions and get 10% off your first order!")}</p>
                  <p className="block-newsletter-label ar_translate hide">احصل على العروض الحصرية والعروض الترويجية واحصل على خصم 10% على طلبك الأول!</p>
           

            </div>



            </div>
            </div>
          </div>
        </div>
      </div>

<div className="footer-container">
  <div className="page-width">
  <div className="row">
      {/* Account Section */}
      <div className="bottom-link-list footer-block col-md-3">
        <div
          className={`footer-title clearfix hidden-lg-up ${activeAccordion === "account" ? "" : "collapsed"}`}
          data-target="#account-info-container"
          data-toggle="collapse"
          aria-expanded={activeAccordion === "account"}
          onClick={() => toggleAccordion("account")}
        >
          <span className="h3 block-heading EN_trnaslate">{t("Account")}</span>
          <span className="h3 block-heading ar_translate hide">الحساب</span>
          <span class="navbar-toggler collapse-icons">
          <img src="/assets/images/download (1).png"/>
          </span>
        </div>
        <div
          className={`account-info-inner collapse footer-dropdown ${activeAccordion === "account" ? "show" : ""}`}
          id="account-info-container"
          style={{
            maxHeight: activeAccordion === "account" ? "300px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-out",
          }}
        >
          <h2 className="footer-heading hidden-lg-down EN_trnaslate">{t("Account")}</h2>
          <ul className="site-footer__linklist EN_trnaslate">
            <li className="site-footer__linklist-item"><a href="/">{t("Login/ Register")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Wishlist")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Delivery Information")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Become an Affiliate")}</a></li>
          </ul>
        </div>
      </div>

      {/* Company Section */}
      <div className="bottom-link-list footer-block col-md-4">
      <div
          className={`footer-title clearfix hidden-lg-up ${activeAccordion === "company" ? "" : "collapsed"}`}
          data-target="#category-info-container"
          data-toggle="collapse"
          aria-expanded={activeAccordion === "company"}
          onClick={() => toggleAccordion("company")}
        >
          <span className="h3 block-heading EN_trnaslate">{t("Company")}</span>
          <span className="h3 block-heading ar_translate hide">أعلى الفئات</span>
          <span class="navbar-toggler collapse-icons">
<img src="/assets/images/download (1).png"/>
          </span>
        </div>
        <div
          className={`account-info-inner collapse footer-dropdown ${activeAccordion === "company" ? "show" : ""}`}
          id="company-info-container"
          style={{
            maxHeight: activeAccordion === "company" ? "300px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-out",
          }}
        >
          <h2 className="footer-heading hidden-lg-down EN_trnaslate">{t("Company")}</h2>
          <ul className="site-footer__linklist EN_trnaslate">
            <li className="site-footer__linklist-item"><a href="/">{t("About Us")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Privacy")} &amp; {t("Security Policy")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Terms")} &amp; {t("Conditions")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Our Services")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Consumer Rights")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Party Tips")} &amp; {t("Ideas")}</a></li>
          </ul>
        </div>
      </div>

      {/* Top Categories Section */}
      <div className="bottom-link-list footer-block col-md-4">
        <div
          className={`footer-title clearfix hidden-lg-up ${activeAccordion === "categories" ? "" : "collapsed"}`}
          data-target="#category-info-container"
          data-toggle="collapse"
          aria-expanded={activeAccordion === "categories"}
          onClick={() => toggleAccordion("categories")}
        >
          <span className="h3 block-heading EN_trnaslate">{t("Top Categories")}</span>
          <span className="h3 block-heading ar_translate hide">أعلى الفئات</span>
          <span class="navbar-toggler collapse-icons">
          <img src="/assets/images/download (1).png"/>
          </span>
        </div>
        <div
          className={`account-info-inner collapse footer-dropdown ${activeAccordion === "categories" ? "show" : ""}`}
          id="category-info-container"
          style={{
            maxHeight: activeAccordion === "categories" ? "300px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-out",
          }}
        >
          <h2 className="footer-heading hidden-lg-down EN_trnaslate">{t("Top Categories")}</h2>
          <ul className="site-footer__linklist EN_trnaslate">
            <li className="site-footer__linklist-item"><a href="/">{t("Christmas Decorations")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("New Year Party Decor")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Disney Party Supplies")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Balloon Decorations")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Theme Party Supplies")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Costumes For Everyone")}</a></li>
          </ul>
        </div>
      </div>

      {/* Customer Care Section */}
      <div className="bottom-link-list col-md-4 footer-block">
        <div
          className={`footer-title clearfix hidden-lg-up ${activeAccordion === "customer" ? "" : "collapsed"}`}
          data-target="#product-info-container"
          data-toggle="collapse"
          aria-expanded={activeAccordion === "customer"}
          onClick={() => toggleAccordion("customer")}
        >
          <span className="h3 block-heading EN_trnaslate">{t("Customer Care")}</span>
          <span className="h3 block-heading ar_translate hide">رعاية العميل</span>
          <span class="navbar-toggler collapse-icons">
          <img src="/assets/images/download (1).png"/>
          </span>
        </div>
        <div
          className={`product-info-inner collapse footer-dropdown ${activeAccordion === "customer" ? "show" : ""}`}
          id="product-info-container"
          style={{
            maxHeight: activeAccordion === "customer" ? "300px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-out",
          }}
        >
          <h2 className="footer-heading hidden-lg-down EN_trnaslate">{t("Customer Care")}</h2>
          <ul className="site-footer__linklist EN_trnaslate">
            <li className="site-footer__linklist-item"><a href="/">{t("Brands")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Store Locations")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Safety")} &amp; {t("Quality")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Size Guide")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Share Feedback")}</a></li>
            <li className="site-footer__linklist-item"><a href="/">{t("Event Central")}</a></li>
          </ul>
        </div>
      </div>
    </div>  
  </div>
</div>



      <div class="footer-all-con">
        <div class="new-sec-heading-footer page-width">
          <h2 id="footer-sec-heading">{t("Popular Searches")}</h2>
          <div class="btn-group-footer">
            <a href="/">
              <button>{t("New Year Decorations")}</button>
            </a>
            <a href="/">
              <button>{t("New Year Party Kits")}</button>
            </a>
            <a href="/">
              <button>{t("New Year Party Decor")}</button>
            </a>
            <a href="/">
              <button>{t("New Year Balloons")}</button>
            </a>
            <a href="/">
              <button>{t("New Year Tableware")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Birthday Balloons")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Disney Golden Princess")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Princess Belle")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Princess Cinderella")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Princess Jasmine")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Princess Ariel")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Princess Aurora")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Marvel party supplies")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Disney Decorations")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Spiderman Decorations")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Marvel Costumes")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Avengers Decorations")}</button>
            </a>
            <a href="/">
              {" "}
              <button>{t("Baby Costumes")}</button>
            </a>
            <a href="/">
              {" "}
              <button id="dynamic-btn">{t("Superhero Costumes")}</button>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="page-width">
          <div class="row">
            <div class="footer-left col-md-6 col-sm-12">
              <div class="site-footer__copyright--bottom EN_trnaslate">
                <p>© 2024 PartyCentre. All rights reserved</p>
              </div>
              <div class="site-footer__copyright--bottom ar_translate hide">
                <p>© 2024 PartyCentre. محفوظة الحقوق جميع</p>
              </div>
            </div>

            <div class="payment-icons footer-right col-md-6 col-sm-12">
              <div class="logo-bar">
                <div class="logo-bar__item">
                  <div class="logo-bar__link">
                    <img src="https://cdn.shopify.com/s/files/1/0536/7621/2412/files/visa-logo.svg?v=1673430609" />
                  </div>
                </div>
                <div class="logo-bar__item">
                  <div class="logo-bar__link">
                    <img src="https://cdn.shopify.com/s/files/1/0536/7621/2412/files/mastercard-logo.svg?v=1673430609" />
                  </div>
                </div>
                <div class="logo-bar__item">
                  <div class="logo-bar__link">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0571/0525/2512/files/mada.png?v=1666681317"
                      alt="MADA"
                    />
                  </div>
                </div>
                <div class="logo-bar__item">
                  <div class="logo-bar__link">
                    <img src="https://cdn.shopify.com/s/files/1/0536/7621/2412/files/applepay-logo.svg?v=1673430609" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
