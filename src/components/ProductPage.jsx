import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/ProductPage.css';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    const skuId = useParams().id;
    const [sku, setSku] = useState(null);
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedVariant, setSelectedVariant] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const skuResponse = await axios.get(`https://partycenter-vtex-backend.onrender.com/sku/${skuId}`);
                // const skuResponse = await axios.get(`http://localhost:4000/sku/${skuId}`);
                const skuData = skuResponse.data;
                setSku(skuData);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Error fetching product details');
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
            image: variant.image || sku.Images?.[0]?.ImageUrl || 'default-image.jpg',
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

    const displayedImage = selectedVariant?.image || sku.Images?.[0]?.ImageUrl || 'default-image.jpg';
    const displayedName = sku.SkuName || 'Product Name Not Available';
    const displayedPrice = selectedVariant?.price || `$${(price / 100).toFixed(2)}`;

    return sku ? (
        <div className="single_product-page-container">
            <div className="single_product-header">
                <h1>{displayedName}</h1>
            </div>
            <div className="single_product-details">
                <div className="single_product-images">
                    <img
                        src={displayedImage}
                        alt="Selected Variant"
                        className="single_product-main-img"
                    />
                </div>
                <div className="single_product-info">
                    <h1>{displayedName}</h1>
                    <p className="single_product-description">
                        {sku.ProductDescription || 'No description available'}
                    </p>
                    <p className="single_product-price">
                        Price: {displayedPrice}
                    </p>
                </div>
            </div>
        </div>
    ) : (
        <div className="not-found-message">SKU not found</div>
    );
};

export default ProductPage;
