import React, {useEffect, useState} from "react";
import './products-display.scss';

interface Product {
    id: number;
    name: string;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const ProductDisplay: React.FC = () => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Ooops..its an Error',error);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <p>Loading...</p>;
    }
    console.log('data',data);
    return (
        <div>
            <h2>My products list</h2>
            <div className="products-container">
                {data.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image"/>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price} $</p>
                        <p className="product-description">{product.description}</p>
                        <p className="product-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductDisplay;