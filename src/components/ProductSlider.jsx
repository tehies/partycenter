import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import axios from 'axios';
import '../css/ProductSlider.css';

function ProductSlider() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const collectionId = '150'; // Updated to match the API response collection ID

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch data from your backend API
                // const response = await axios.get('http://localhost:4000/collectionProductDetails', {
                const response = await axios.get('https://partycenter-vtex-backend.onrender.com/collectionProductDetails', {
                    params: { collectionId },
                });

                if (response.data && Array.isArray(response.data.Products)) {
                    setProducts(response.data.Products);
                } else {
                    console.warn('Unexpected response format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [collectionId]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="product-container">
            <h2>Latest Collection of Costumes</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <Link
                        to={`/product/${product.SkuId}`}  // Use SkuId for routing
                        key={product.SkuId}
                        className="product-card"
                    >
                        <img
                            src={product.SkuImageUrl || 'default-image-url.jpg'}
                            alt={product.ProductName || 'Product Image'}
                            className="product-image"
                        />
                        <h3 className="product-name">{product.ProductName || 'Unnamed Product'}</h3>
                        <p className="product-price">
                            {/* You can customize this to show the price if available */}
                            SAR 225.00
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductSlider;
