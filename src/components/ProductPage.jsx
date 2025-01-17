import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/ProductPage.css";
import QuantityControls from "./QuantityControls";
import FeatureList from "./FeatureList";
import CouponPopup from "./CouponPopup";
import Pdp_tabs from "./Pdp_tabs";
import { useTranslation } from "react-i18next";

const ProductPage = () => {
  const { t, i18n } = useTranslation();
  const skuId = useParams().id;
  const [sku, setSku] = useState(null);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [zoomStyle, setZoomStyle] = useState({});
  const [recommendations, setRecommendations] = useState([]);  // Add state for recommendations
  const containerRef = useRef(null);
  const zoomOverlayRef = useRef(null);

  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const skuResponse = await axios.get(
          `https://partycenter-vtex-backend.onrender.com/sku/${skuId}`
        );
        const skuData = skuResponse.data;

        // Extract Arabic title
        const arabicTitle =
          skuData.ProductSpecifications.find(
            (spec) => spec.FieldName === "Arabic title"
          )?.FieldValues?.[0] || null;

        // Add Arabic title to SKU
        setSku({
          ...skuData,
          arabicTitle,
        });

        setPrice(skuData.bestPrice || 0);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(t("Error fetching product details"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [skuId, t]);

  // Fetch recommendations
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const recommendationsResponse = await axios.get(
          `https://partycenter-vtex-backend.onrender.com/recommendations/${skuId}`
        );
        console.log(recommendationsResponse.data);

        setRecommendations(recommendationsResponse.data);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
      }
    };

    if (skuId) {
      fetchRecommendations();
    }
  }, [skuId]);

  const handleVariantClick = (variant) => {
    setSelectedVariant({
      name: variant.skuname || sku.NameComplete,
      price: variant.bestPriceFormated || `$${(price / 100).toFixed(2)}`,
      image: variant.image || sku.Images?.[0]?.ImageUrl || "default-image.jpg",
    });
  };

  const handleMouseMove = (e) => {
    const img = e.target;
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const zoomX = (x / width) * 100;
    const zoomY = (y / height) * 100;

    setZoomStyle({
      backgroundPosition: `${zoomX}% ${zoomY}%`,
      display: "block",
    });
  };

  const handleMouseEnter = () => {
    setZoomStyle((prevState) => ({
      ...prevState,
      display: "block",
    }));
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      display: "none",
    });
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const displayedImage =
    selectedVariant?.image || sku.Images?.[0]?.ImageUrl || "default-image.jpg";
  const displayedName =
    i18n.language === "ar"
      ? sku.arabicTitle || t("Product Name Not Available")
      : sku.ProductName || t("Product Name Not Available");
  const displayedPrice =
    selectedVariant?.price || `$${(price / 100).toFixed(2)}`;

  return sku ? (
    <div className="single_product-page-container">
      <div className="single_product-details">
        <div className="single_product-images">
          <div
            ref={containerRef}
            className="zoom-container"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={displayedImage}
              alt={t("Selected Variant")}
              className="single_product-main-img"
            />
            <div
              ref={zoomOverlayRef}
              className="zoom-overlay"
              style={{
                ...zoomStyle,
                backgroundImage: `url(${displayedImage})`,
              }}
            ></div>
          </div>
        </div>
        <div className="single_product-info">
          <h1>{displayedName}</h1>

          <p className="single_product-price">{t("Price")}: {displayedPrice}</p>

          <p className="single_product-price">Price: {displayedPrice}</p>

          {/* CouponPopup */}
          <CouponPopup />

          {/* FeatureList */}
          <FeatureList />


          {/* end FeatureList */}


          {/* QuantityControls */}
          <div className="Add-to-cart">
            <QuantityControls />
          </div>
        </div>


        {/* Product Tabs */}
        <Pdp_tabs />

        {/* Recommended Products */}
        <div className="recommended-products">
          <h2>{t("Recommended Products")}</h2>
          <div className="recommended-products-grid">
            {recommendations.map((recommendation) => (
              <div key={recommendation.productId} className="recommended-product">
                <img
                  src={recommendation.items[0]?.images[0]?.imageUrl || "default-image.jpg"}
                  alt={recommendation.productName}
                  className="recommended-product-image"
                />
                <h3>{recommendation.productName}</h3>


              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  ) : (
    <div className="not-found-message">{t("SKU not found")}</div>
  );
};

export default ProductPage;
