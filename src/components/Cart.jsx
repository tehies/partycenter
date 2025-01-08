import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { setOrderForm, clearCart, incrementQuantity, decrementQuantity } from './cartSlice';
import "../css/Cart.css";

const Loader = () => (
    <div className="loader">
        <div className="spinner"></div>
    </div>
);

const Cart = () => {
    const { orderFormId } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const cart = useSelector((state) => state.cart.orderForm);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCartDetails = async () => {
            const storedOrderFormId = localStorage.getItem('orderFormId');
            if (!storedOrderFormId) return;

            setLoading(true);
            setError(null);

            try {
                const { data } = await axios.get(`https://vtex-backend-l0v5.onrender.com/cart-with-product-details/${orderFormId}`);
                dispatch(setOrderForm(data));

                const productSpecifications = Array.isArray(data?.productDetails) ? data.productDetails : [];

                const updatedItems = data?.items?.map(item => {
                    const skuSpecifications = productSpecifications
                        .find(spec => spec?.skuDetails?.ProductSpecifications)
                        ?.skuDetails?.ProductSpecifications || [];

                    const arabicTitle = skuSpecifications
                        .flat()
                        .find(spec => spec?.FieldName === 'Arabic title')?.FieldValues?.[0] || 'N/A';

                    return { ...item, arabicTitle };
                }) || [];
                console.log(updatedItems);
                dispatch(setOrderForm({ ...data, items: updatedItems }));
            }
            catch (err) {
                console.error('Error fetching cart details:', err);
                setError('Failed to load cart');
            } finally {
                setLoading(false);
            }
        };

        fetchCartDetails();
    }, [orderFormId, dispatch]);

    const handleIncrement = (itemId) => {
        dispatch(incrementQuantity(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementQuantity(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
        localStorage.removeItem('orderFormId');
    };

    const calculateTotalPrice = () => {
        return cart.items?.reduce((total, item) => total + item.price * item.quantity, 0) || 0;
    };

    if (loading) return <Loader />;
    if (error) return <div>{error}</div>;

    return (
        <div className='cart-details'>
            <h1>Your Cart</h1>
            {cart.items && cart.items.length > 0 ? (
                <table className='cartTable'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Products</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.items.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    />
                                </td>
                                <td>
                                    {item.name || 'Product Name Not Available'}
                                </td>

                                <td className='Quantity-btn'>
                                    <div className='btn-style'>
                                        <button
                                            onClick={() => handleDecrement(item.id)}
                                            disabled={item.quantity <= 1}
                                            style={{ marginRight: '15px' }}
                                        >
                                            -
                                        </button>
                                        {item.quantity}
                                        <button
                                            onClick={() => handleIncrement(item.id)}
                                            style={{ marginLeft: '15px' }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>{item.price ? `$ ${(item.price / 100).toFixed(2)}` : '$0.00'}</td>
                                <td>${(item.price * item.quantity / 100).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='4' style={{ textAlign: 'right' }}>
                                <strong>Total Price:</strong>
                            </td>
                            <td>
                                <strong>${(calculateTotalPrice() / 100).toFixed(2)}</strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            ) : (
                <p>No items in the cart</p>
            )}
            <button className='clear_Button' onClick={handleClearCart} style={{ marginTop: '20px' }}>
                Clear Cart
            </button>
        </div>
    );
};

export default Cart;
