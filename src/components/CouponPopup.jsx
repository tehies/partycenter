import React, { useState, useEffect, useRef } from 'react';
import "../css/coupons-you.css"; 

const CouponPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null); // Create a ref for the popup

  // Function to toggle the popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Close the popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="coupons-you">
      <div className="coupons-txt">
        <h3>Available Offers</h3>
        <p>
          10% Off on Your First Purchase{" "}
          <a
            className="active__offers"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              togglePopup();
            }}
          >
            Know More
          </a>
        </p>
      </div>

      {/* Popup section */}
      {isOpen && (
        <div className="coupon-popup" ref={popupRef}>
          <div className="popup-content">
            <a href="#">
              <img src="https://cdn.shopify.com/s/files/1/0571/0525/2512/files/Mobile_-_10_Off_EN_1__1_11zon_316b56b6-c4d9-450a-be1b-3ad58fba2c23.webp?v=1730706701"/>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};



export default CouponPopup;
