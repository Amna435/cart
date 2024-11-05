import React from 'react';
import ProductItem from './ProductItem';
import './ShoppingCart.css';

const products = [
    { 
        id: 1, 
        name: "Love ReDesigned", 
        price: 500, 
        image: "love Redesigned.webp",
        description: "A captivating romance that explores the intricacies of love."
    },
    { 
        id: 2, 
        name: "The Do-Over", 
        price: 400, 
        image: "do-over.jpg", 
        description: "A heartfelt story about second chances and new beginnings."
    },
    { 
        id: 3, 
        name: "The Rule Book", 
        price: 700, 
        image: "rule book.webp", 
        description: "A humorous take on the rules of dating and relationships."
    },
    { 
        id: 4, 
        name: "Funny Story", 
        price: 450, 
        image: "funny.jpg", 
        description: "A collection of comedic essays that will make you laugh out loud."
    },
    { 
        id: 5, 
        name: "Marriage For One", 
        price: 475, 
        image: "marriage.jpg", 
        description: "An insightful look into love and the complexities of marriage."
    },
    { 
        id: 6, 
        name: "Check & Mate", 
        price: 670, 
        image: "Check-Mate-by-Ali-Hazelwood-Review.webp", 
        description: "A thrilling romance set in the world of competitive chess."
    },
    { 
        id: 7, 
        name: "Girl Abroad", 
        price: 485, 
        image: "girl.jpg", 
        description: "A young woman’s adventures and misadventures while traveling."
    },
    { 
        id: 8, 
        name: "Love on the Brain", 
        price: 370, 
        image: "Love on the brain.webp", 
        description: "A clever romance that dives deep into neuroscience and relationships."
    }
];

const ProductList = ({ addToCart }) => (
    <div className="listProduct">
        {products.map((product) => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
);

export default ProductList;