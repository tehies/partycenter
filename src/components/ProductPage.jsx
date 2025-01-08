import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/ProductPage.css";
import QuantityControls from "./QuantityControls";
import FeatureList from "./FeatureList";
import CouponPopup from "./CouponPopup";
import Pdp_tabs from "./Pdp_tabs";

const ProductPage = () => {
  const skuId = useParams().id;
  const [sku, setSku] = useState(null);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [zoomStyle, setZoomStyle] = useState({});
  const containerRef = useRef(null);
  const zoomOverlayRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skuResponse = await axios.get(
          `https://partycenter-vtex-backend.onrender.com/sku/${skuId}`
        );
        const skuData = skuResponse.data;
        setSku(skuData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

    // Calculate zoomed position based on mouse coordinates
    const zoomX = (x / width) * 100;
    const zoomY = (y / height) * 100;

    setZoomStyle({
      backgroundPosition: `${zoomX}% ${zoomY}%`,
      display: "block", // Show the zoom overlay
    });
  };

  const handleMouseEnter = () => {
    setZoomStyle((prevState) => ({
      ...prevState,
      display: "block", // Ensure the zoom overlay shows when hovering
    }));
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      display: "none", // Hide the zoom overlay when not hovering
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
  const displayedName = sku.SkuName || "Product Name Not Available";
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
              alt="Selected Variant"
              className="single_product-main-img"
              source={displayedImage}
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
          {/* <p className="single_product-description">
            {sku.ProductDescription || "No description available"}
          </p> */}
          <p className="single_product-price">Price: {displayedPrice}</p>


          {/* CouponPopup */}
          <CouponPopup />

          {/* FeatureList */}
          <FeatureList />
          {/* end FeatureList */}

          {/* QuantityControls  */}
          <div className="Add-to-cart">
            <QuantityControls />
          </div>
        </div>

        {/* Pdp_tabs */}
        <Pdp_tabs />

      </div>
    </div>
  ) : (
    <div className="not-found-message">SKU not found</div>
  );


};

export default ProductPage;
