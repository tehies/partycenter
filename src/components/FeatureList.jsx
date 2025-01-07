import React from 'react';
import '../css/featureList.css';

const features = [
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0571/0525/2512/files/Home_Delivery_Blue.png?v=1700800352",
    text: "Home Delivery*",
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0571/0525/2512/files/Payment_Blue.png?v=1700800352",
    text: "Secure Payment",
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0571/0525/2512/files/100_Authentic_Blue.png?v=1700800352",
    text: "100% Authentic",
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0571/0525/2512/files/Free_Shipping_Blue.png?v=1700800352",
    text: "Free Shipping SAR 250+",
  },
];

const FeatureList = () => (
  <div className="featurelist">
    <ul>
      {features.map((feature, index) => (
        <li key={index}>
          <img className='featurelist-images' src={feature.imgSrc} alt={feature.text} />
          <p>{feature.text}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default FeatureList;
