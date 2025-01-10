import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../css/CollectionPage.css';
import QuantityControls_home from "./QuantityControls_home";

export default function CollectionPage({ id }) {
    const [quantity, setQuantity] = useState(1);
    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleAddToCart = () => {
        alert(`Added ${quantity} item(s) to the cart`);
    };
    const [collectionProducts, setCollectionProducts] = useState([]);
    const { collectionId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [collectionName, setCollectionName] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const [Prtoductlength, setProductLength] = useState('');
    const [viewType, setViewType] = useState('grid'); // State for view type

    useEffect(() => {
        const fetchCollection = async () => {
            try {
                const productResponse = await axios.get('https://partycenter-vtex-backend.onrender.com/collectionProduct', {
                    params: { collectionId },
                });
                setProducts(productResponse.data.Data || []);
                setFilteredProducts(productResponse.data.Data || []);
                setProductLength(productResponse.data.Size);

                const collectionResponse = await axios.get('https://partycenter-vtex-backend.onrender.com/collection');
                const collection = collectionResponse.data.items.find(
                    (item) => item.id.toString() === collectionId
                );
                setCollectionName(collection ? collection.name : 'Unknown Collection');
            } catch (error) {
                console.error('Error fetching collection:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCollection();
    }, [collectionId]);

    const handleFilterChange = (event) => {
        const value = event.target.value;
        setSortOrder(value);

        let filtered = [...products];

        if (value === 'lowToHigh') {
            filtered = filtered.sort((a, b) => a.Price - b.Price);
        } else if (value === 'highToLow') {
            filtered = filtered.sort((a, b) => b.Price - a.Price);
        } else if (value === 'aToZ') {
            filtered = filtered.sort((a, b) => a.ProductName.localeCompare(b.ProductName));
        } else if (value === 'zToA') {
            filtered = filtered.sort((a, b) => b.ProductName.localeCompare(a.ProductName));
        }

        setFilteredProducts(filtered);
    };

    return (
        <div className="collection-container">
            <h2>{collectionName}</h2>

            <div className="srtngprdts">
                <div className="noprtds">
                    <div className="view-toggle-buttons">
                        <button
                            className={`toggle-btn gridbtn ${viewType === 'grid' ? 'active' : ''}`}
                            onClick={() => setViewType('grid')}
                        >

                        </button>
                        <button
                            className={`toggle-btn listbtn ${viewType === 'list' ? 'active' : ''}`}
                            onClick={() => setViewType('list')}
                        >

                        </button>
                    </div>
                    <p>There are {Prtoductlength} products</p>
                </div>
                <div className="sorting-controls">
                    <label htmlFor="sortOrder">Sort By:</label>
                    <select id="sortOrder" value={sortOrder} onChange={handleFilterChange}>
                        <option value="">Default</option>
                        <option value="lowToHigh">Price: Low to High</option>
                        <option value="highToLow">Price: High to Low</option>
                        <option value="aToZ">Name: A to Z</option>
                        <option value="zToA">Name: Z to A</option>
                    </select>
                </div>

                {/* View Toggle Buttons */}

            </div>

            {loading ? (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className={`product-container ${viewType}`}>
                    {filteredProducts.map((product) => (
                        <div key={product.SkuId} className={`product-card ${viewType}`}>
                            <Link to={`/product/${product.SkuId}`}>
                                <img src={product.SkuImageUrl} alt={product.ProductName} />
                            </Link>
                            <div className="namebtnnn">
                                <div className="product-info">
                                    <h3>{product.ProductName}</h3>
                                    <p className="product-price">
                                        {product.Price
                                            ? `$${(product.Price / 100).toFixed(2)}`
                                            : 'Price not available'}
                                    </p>
                                    <div className="proddesc">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                    </div>

                                </div>
                                <QuantityControls_home id={product.SkuId} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
