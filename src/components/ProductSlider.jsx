import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import axios from 'axios';
import '../css/ProductSlider.css';

function ProductSlider() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
       // Load cart from localStorage when the component mounts
   useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
}, []);

// Save cart to localStorage whenever the cart state changes
useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);
    const [loading, setLoading] = useState(true);

    const collectionId = '142';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://partycenter-vtex-backend.onrender.com/collectionProduct', {
                    // const response = await axios.get('http://localhost:4000/collectionProduct', {
                    params: { collectionId },
                });

                if (response.data && Array.isArray(response.data.Data)) {
                    setProducts(response.data.Data);
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







    // Function to handle adding products to the cart
    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            // Check if the product is already in the cart
            const isProductInCart = prevCart.find((item) => item.SkuId === product.SkuId);

            if (isProductInCart) {
                // If the product is already in the cart, update its quantity
                return prevCart.map((item) =>
                    item.SkuId === product.SkuId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            // Otherwise, add the product with a quantity of 1
            return [...prevCart, { ...product, quantity: 1 }];
        });

        alert(`${product.ProductName} has been added to the cart!`);
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="product-container">
            <h2>Latest Collection of Costumes</h2>
            <div className="product-grid">
                {products.map((product) => (
                     <div key={product.SkuId} className="product-card">
                    <Link
                        to={`/product/${product.SkuId}`}
                        key={product.SkuId}
                        className="product-card"
                    >
                        <img
                            src={product.SkuImageUrl || 'default-image-url.jpg'}
                            alt={product.ProductName || 'Product Image'}
                            className="product-image"
                        />
                        <h3 className="product-name">{product.ProductName || 'Unnamed Product'}</h3>
                        <p className="product-price">SAR 225.00</p>
                    </Link>
                    <button
                            className="add-to-cart-btn"
                            onClick={() => handleAddToCart(product)}
                        >
                           + Add to Cart
                        </button>
                    </div>
                ))}
            </div>
                        {/* Display the cart items */}
                        <div className="cart-container">
                <h3>Shopping Cart</h3>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cart.map((item) => (
                            <li key={item.SkuId}>
                                {item.ProductName} - Quantity: {item.quantity}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
}

export default ProductSlider;
