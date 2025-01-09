import React, { useState } from 'react';
import '../css/QuantityControls_home.css'
import axios from 'axios';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

const QuantityControls_home = ({ id }) => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const [sku, setSku] = useState(null);
    const skuId = id;
    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };





    const handleAddToCart = async () => {
        try {

            let orderFormId = localStorage.getItem('orderFormId')

            if (orderFormId == null) {

                // const { data } = await axios.get('http://localhost:4000/cart');
                const { data } = await axios.get('https://partycenter-vtex-backend.onrender.com/cart');
                orderFormId = data.orderFormId
                localStorage.setItem('orderFormId', data.orderFormId)
            }





            // const API_BASE_URL = "http://localhost:4000";
            const API_BASE_URL = "https://vtex-backend-l0v5.onrender.com";

            let response_add = await axios.post(`${API_BASE_URL}/add-to-cart/${orderFormId}`, {
                orderItems: [
                    {
                        quantity: quantity,
                        seller: "1",
                        id: skuId,
                        index: 0,
                        price: 1099,
                    },
                ],
            });

            navigate(`/cart/${orderFormId}`, {
                state: {
                    orderFormId: orderFormId,
                    skuId
                },
            });
        } catch (err) {
            console.error('Error adding to cart:', err);
            alert('Failed to add to cart');
        }
    };

    return (
        <div className="main-product-container">
            <div className="quantity-controls">
                <button className="decrease-btn" onClick={handleDecrease}>
                    -
                </button>
                <input
                    type="number"
                    className="quantity-input"
                    value={quantity}
                    min="1"
                    readOnly
                />
                <button className="increase-btn" onClick={handleIncrease}>
                    +
                </button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                + ADD TO CART
            </button>

        </div>
    );
};

export default QuantityControls_home;
