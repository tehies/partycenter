import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "../css/ProductSlider.css";
import QuantityControls_home from "./QuantityControls_home";

function ProductSlider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const collectionId = "142"; // Collection ID for the API request

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://partycenter-vtex-backend.onrender.com/collectionProductDetails",
          {
            params: { collectionId },
          }
        );

        if (response.data?.Products && Array.isArray(response.data.Products)) {
          const processedProducts = response.data.Products.map(product => {
            const arabicTitle = product?.SkuDetails?.ProductSpecifications?.find(
              spec => spec.FieldName === "Arabic title"
            )?.FieldValues?.[0];

            console.log(`Arabic Title for Product ${product.ProductId}:`, arabicTitle);

            return { ...product, arabicTitle: arabicTitle || "No Arabic Title Available" };
          });
          console.log(response.data.Products);

          setProducts(response.data.Products);
        } else {
          console.warn("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [collectionId]);

  if (loading) {
    return (
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return <div className="no-products">No products found for this collection.</div>;
  }

  return (
    <div className="product-slider-container product-container ">
      <h2 className="slider-title">Latest Collection of Costumes</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        autoHeight
        spaceBetween={30}
        slidesPerView={5} // Default number of slides for large screens
        breakpoints={{
          // Define breakpoints for responsiveness
          0: {
            slidesPerView: 2, // 1 slide visible on mobile (0px and up)
            spaceBetween: 10, // Less space between slides on small screens
          },
          768: {
            slidesPerView: 3, // 2 slides visible on tablets (768px and up)
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5, // 4 slides visible on desktops (1024px and up)
            spaceBetween: 30,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.SkuId}>
            <Link to={`/product/${product.SkuId}`} className="product-card">
              <img
                src={product.SkuImageUrl || "/placeholder-image.jpg"}
                alt={product.ProductName || "Unnamed Product"}
                className="product-image"
              />
              <h3 className="product-name">{product.ProductName || "Unnamed Product"}</h3>
              <p className="product-price">
                {product.Price ? `SAR ${product.Price.toFixed(2)}` : "Price Unavailable"}
              </p>
            </Link>
            <QuantityControls_home id={product.SkuId} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
