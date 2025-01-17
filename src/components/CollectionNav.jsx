import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for routing
import "../css/CollectionNav.css";
import QuantityControls_home from "./QuantityControls_home";
import { useTranslation } from "react-i18next";
const CollectionNav = ({ id }) => {
  const [collectionProducts, setCollectionProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // Sort state for low to high, high to low, etc.
  const [Prtoductlength, setProductLength] = useState("");
  const collectionId = id; // Dynamically set your collection ID
  const [viewType, setViewType] = useState("grid"); // State for view type
  const { t, i18n } = useTranslation();
  // useEffect(() => {
  //     const fetchCollectionProducts = async () => {
  //         try {
  //             // Fetch collection products
  //             // const response = await axios.get(`http://localhost:4000/collectionProduct?collectionId=${collectionId}`);
  //             const response = await axios.get(`https://partycenter-vtex-backend.onrender.com/collectionProductDetails?collectionId=${collectionId}`);
  //             console.log('API Response:', response);
  //             console.log('API Response:',);
  //             setProductLength(response.data.Size)

  //             if (response.data?.Products && Array.isArray(response.data.Products)) {
  //                 const processedProducts = response.data.Products.map((product) => {
  //                     const arabicTitle = product?.SkuDetails?.ProductSpecifications?.find(
  //                         (spec) => spec.FieldName === "Arabic title"
  //                     )?.FieldValues?.[0];

  //                     console.log(
  //                         `Arabic Title for Product ${product.ProductId}:`,
  //                         arabicTitle
  //                     );

  //                     return {
  //                         ...product,
  //                         arabicTitle: arabicTitle || t("No Arabic Title Available"),
  //                     };
  //                 });
  //                 setFilteredProducts(processedProducts);
  //             }

  //             if (Array.isArray(response.data.Products)) {
  //                 const products = response.data.Products;

  //                 // Fetch prices for each product
  //                 const productsWithPrices = await Promise.all(
  //                     products.map(async (product) => {
  //                         try {
  //                             const priceResponse = await axios.get(`https://partycenter-vtex-backend.onrender.com/pricing/${product.SkuId}`);
  //                             // const priceResponse = await axios.get(`http://localhost:4000/pricing/${product.SkuId}`);
  //                             console.log(`Price for SkuId ${product.SkuId}:`, priceResponse.data.basePrice);

  //                             return { ...product, Price: priceResponse.data.basePrice || 0 };
  //                         } catch (err) {
  //                             console.error(`Error fetching price for SkuId ${product.SkuId}:`, err);
  //                             return { ...product, Price: 0 };
  //                         }
  //                     })
  //                 );

  //                 setCollectionProducts(productsWithPrices);
  //                 setFilteredProducts(productsWithPrices);
  //             } else {
  //                 setError('Data is not an array');
  //             }
  //         } catch (err) {
  //             console.error('Error fetching products:', err);
  //             setError('Error fetching products');
  //         } finally {
  //             setLoading(false);
  //         }
  //     };

  //     fetchCollectionProducts();
  // }, [collectionId]);

  useEffect(() => {
    const fetchCollectionProducts = async () => {
      try {
        // Fetch collection products
        const response = await axios.get(
          `https://partycenter-vtex-backend.onrender.com/collectionProductDetails?collectionId=${collectionId}`
        );

        console.log("API Response:", );
        setProductLength(response.data.Products.length)

        // Set product length
        // setProductLength(response.data?.Size || 0);

        // Process products if the response data contains an array of products
        if (response.data?.Products && Array.isArray(response.data.Products)) {
          const processedProducts = response.data.Products.map((product) => {
            const arabicTitle =
              product?.SkuDetails?.ProductSpecifications?.find(
                (spec) => spec.FieldName === "Arabic title"
              )?.FieldValues?.[0];

            console.log(
              `Arabic Title for Product ${product.ProductId}:`,
              arabicTitle
            );

            return {
              ...product,
              arabicTitle: arabicTitle || t("No Arabic Title Available"),
            };
          });

          setFilteredProducts(processedProducts);

          // Fetch prices for each product
          const productsWithPrices = await Promise.all(
            processedProducts.map(async (product) => {
              try {
                const priceResponse = await axios.get(
                  `https://partycenter-vtex-backend.onrender.com/pricing/${product.SkuId}`
                );

                console.log(
                  `Price for SkuId ${product.SkuId}:`,
                  priceResponse.data?.basePrice
                );

                return {
                  ...product,
                  Price: priceResponse.data?.basePrice || 0,
                };
              } catch (err) {
                console.error(
                  `Error fetching price for SkuId ${product.SkuId}:`,
                  err
                );
                return { ...product, Price: 0 };
              }
            })
          );

          setCollectionProducts(productsWithPrices);
          setFilteredProducts(productsWithPrices);
        } else {
          setError("Data is not an array");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchCollectionProducts();
  }, [collectionId]);

  // Function to handle price filter
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSortOrder(value);

    let filtered = [...collectionProducts];

    if (value === "lowToHigh") {
      filtered = filtered.sort((a, b) => a.Price - b.Price);
    } else if (value === "highToLow") {
      filtered = filtered.sort((a, b) => b.Price - a.Price);
    } else if (value === "aToZ") {
      filtered = filtered.sort((a, b) =>
        a.ProductName.localeCompare(b.ProductName)
      );
    } else if (value === "zToA") {
      filtered = filtered.sort((a, b) =>
        b.ProductName.localeCompare(a.ProductName)
      );
    }

    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="collection-product-container">
      <h1 className="product-heading">Collection Products</h1>

      {/* Sorting Controls */}
      <div className="srtngprdts">
        <div className="noprtds">
          <div className="view-toggle-buttons">
            <button
              className={`toggle-btn gridbtn ${
                viewType === "grid" ? "active" : ""
              }`}
              onClick={() => setViewType("grid")}
            ></button>
            <button
              className={`toggle-btn listbtn ${
                viewType === "list" ? "active" : ""
              }`}
              onClick={() => setViewType("list")}
            ></button>
          </div>
          <p>There are {Prtoductlength} products</p>
        </div>
        <div className="sorting-controls">
        <label htmlFor="sortOrder">{t("Sort By:")}</label>
                    <select id="sortOrder" value={sortOrder} onChange={handleFilterChange}>
                        <option value="">{t("Default")}</option>
                        <option value="lowToHigh">{t("Price: Low to High")}</option>
                        <option value="highToLow">{t("Price: High to Low")}</option>
                        <option value="aToZ">{t("Name: A to Z")}</option>
                        <option value="zToA">{t("Name: Z to A")}</option>
          </select>
        </div>

        {/* View Toggle Buttons */}
      </div>

      {/* Product Grid */}
      <div className={` col-nav product-grid ${viewType}`}>
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.ProductId} className={`product-card ${viewType}`}>
              <Link
                key={product.SkuId}
                to={`/product/${product.SkuId}`}
                className="product-card-link"
              >
                <img
                  src={product.SkuImageUrl || "default-image.jpg"}
                  alt={product.ProductName}
                  className="product-image"
                />
              </Link>
              <div className="namebtnnn nav-data">

              <div className="product-name">
                {i18n.language === "ar"
                  ? product.arabicTitle
                  : product.ProductName || t("Product Name Not Available")}
              </div>
              <p className="product-price">
                {product.Price
                  ? `$${(product.Price / 100).toFixed(2)}`
                  : "Price not available"}
              </p>
              <p className='product-descrition'>{product.SkuDetails.ProductDescription}</p>
              <QuantityControls_home id={product.SkuId} />
              </div>
            </div>
          ))
        ) : (
          <div>No products found in this collection.</div>
        )}
      </div>
    </div>
  );
};

export default CollectionNav;
