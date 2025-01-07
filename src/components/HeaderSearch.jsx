import React, { useState, useEffect, useRef } from "react";
import "../css/HeaderSearch.css";
import { useNavigate } from "react-router-dom";

const HeaderSearch = () => {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const searchContainerRef = useRef(null);

    const handleSearchChange = async (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);

        if (newQuery.length > 0) {
            try {
                const response = await fetch(`https://partycenter-vtex-backend.onrender.com/searchProducts?q=${newQuery}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        } else {
            setProducts([]);
        }
    };

    const handleProductClick = (product) => {
        const skuId = product.skus && product.skus.skus[0]?.sku;

        if (skuId) {
            navigate(`/product/${skuId}`);
        } else {
            navigate(`/product/${product.productId}`);
        }

        setIsOpen(false); // Close the modal
    };

    const handleClickOutside = (event) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
            setIsOpen(false); // Close the modal if clicked outside
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="site-header__search col-md-4 hidden-lg-down" id="_desktop_search" ref={searchContainerRef}>
            <div className="search-title clearfix collapsed">
                <span className="search-toggle"></span>
            </div>

            <div id="search-container-full" className="search-info collapse">
                <form className="search-form search-header search search--focus">
                    <input
                        type="text"
                        name="q"
                        className="search-input search-header__input search__input"
                        placeholder="Search for products..."
                        value={query}
                        onChange={handleSearchChange}
                        onFocus={() => setIsOpen(true)} // Open the modal on input focus
                    />
                </form>

                {isOpen && products.length > 0 && (
                    <div className="product-list_2">
                        {products.map((product) => (
                            <div className="product-card_2" key={product.productId} onClick={() => handleProductClick(product)}>
                                {product.items && product.items[0]?.images && (
                                    <img
                                        src={product.items[0].images[0].imageUrl}
                                        alt={product.productName}
                                        className="nav-product-image"
                                    />
                                )}
                                <p>{product.productName}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeaderSearch;
