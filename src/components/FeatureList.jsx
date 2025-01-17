import React from 'react';
import '../css/featureList.css';
import { useTranslation } from "react-i18next";

const FeatureList = () => {
  const { t } = useTranslation();

  const features = [
    {
      imgSrc: "https://cdn.shopify.com/s/files/1/0571/0525/2512/files/Home_Delivery_Blue.png?v=1700800352",
      text: t("Home Delivery"),
    },
    {
      imgSrc: "https://cdn.shopify.com/s/files/1/0571/0525/2512/files/Payment_Blue.png?v=1700800352",
      text: t("Secure Payment"),
    },
    {
      imgSrc: "https://cdn.shopify.com/s/files/1/0571/0525/2512/files/100_Authentic_Blue.png?v=1700800352",
      text: t("100% Authentic"),
    },
    {
      imgSrc: "https://cdn.shopify.com/s/files/1/0571/0525/2512/files/Free_Shipping_Blue.png?v=1700800352",
      text: t("Free Shipping SAR 250+"),
    },
  ];

  return (
    <div className="featurelist">
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <img className="featurelist-images" src={feature.imgSrc} alt={feature.text} />
            <p>{feature.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
