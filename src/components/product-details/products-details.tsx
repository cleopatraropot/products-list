import React, {useEffect, useState} from "react";
import {Product} from "../product-display/products-display";
import './products-details.scss';
import {useParams, Link} from 'react-router-dom';

const ProductDisplay: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data: Product) => setProduct(data))
            .catch((error) => console.error('Eroare la preluarea detaliilor produsului:', error));
    }, [id]);

    if (!product) {
        return <p>Se încarcă detaliile produsului...</p>;
    }

    return (
        <div className="product-details">
            <Link to={`/products/${id}`}>
                <img src={product.image} alt={product.title} className="product-details-image"/>
                <h1>{product.title}</h1>
                <p className="product-details-price">Preț: ${product.price.toFixed(2)}</p>
                <p className="product-details-category">Categorie: {product.category}</p>
                <p className="product-details-description">{product.description}</p>
                <p className="product-details-rating">
                    Rating: {product.rating.rate} ({product.rating.count} reviews)
                </p>
            </Link>
        </div>

    )
}

export default ProductDisplay;