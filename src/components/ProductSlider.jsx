import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules'; // Optional modules
import '../css/ProductSlider.css'; // Your custom styles
import QuantityControls from "./QuantityControls";

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

    // Function to handle adding products to the cart
    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            const isProductInCart = prevCart.find(
                (item) => item.SkuId === product.SkuId
            );

            if (isProductInCart) {
                return prevCart.map((item) =>
                    item.SkuId === product.SkuId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

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
            <Swiper
            modules={[Navigation]} 
                slidesPerView={5} // Number of slides to show
                spaceBetween={30} // Space between slides
                pagination={{ clickable: true }} // Enable pagination
                navigation
                loop={true} 
                autoHeight={true}
                breakpoints={{
                    // Responsive breakpoints
                    1024: {
                        slidesPerView: 5,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                }}
            >
                {products.map((product) => (
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
                ))}
            </Swiper>
        </div>
    );
}

export default ProductSlider;
