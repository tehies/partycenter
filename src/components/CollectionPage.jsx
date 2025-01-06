import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../css/CollectionPage.css';

export default function CollectionPage({ id }) {
    const { collectionId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [collectionName, setCollectionName] = useState('');

    useEffect(() => {
        const fetchCollection = async () => {
            try {
                const productResponse = await axios.get('https://partycenter-vtex-backend.onrender.com/collectionProduct', {
                    // const productResponse = await axios.get('http://localhost:4000/collectionProduct', {
                    params: { collectionId },
                });
                setProducts(productResponse.data.Data || []);

                const collectionResponse = await axios.get('https://partycenter-vtex-backend.onrender.com/collection');
                // const collectionResponse = await axios.get('http://localhost:4000/collection');
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

    return (
        <div className="collection-container">
            <h2>{collectionName}</h2>
            {loading ? (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className="product-grid">
                    {products.map((product) => (
                        <Link
                            to={`/product/${product.SkuId}`}
                            key={product.SkuId}
                            className="product-card"
                        >
                            <div className="product-info">
                                <img src={product.SkuImageUrl} alt={product.ProductName} />
                                <h3>{product.ProductName}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
