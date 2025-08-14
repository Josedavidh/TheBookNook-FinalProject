import React, { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const titleBook = titleRef.current;
    if (!titleBook) return;

    const bookFontSize = () => {
      let fontSize = 24;
      titleBook.style.fontSize = fontSize + "px";

      while (titleBook.scrollWidth > titleBook.clientWidth && fontSize > 12) {
        fontSize -= 1;
        titleBook.style.fontSize = fontSize + "px";
      }
    };

bookFontSize();

window.addEventListener('resize', bookFontSize);
return () => {
    window.removeEventListener('resize', bookFontSize);
};

  }, [product.name]);


  return (
    <div className="product-card">
      <img
        src={product.image_url}
        alt={product.name}
        className="product-card__image"
      />

            <h3 ref={titleRef} className=''>{product.name}</h3>
            <p className='fw-bold fs-4'>${product.price.toFixed(2)}</p>
            <Link to={`/producto/${product.id}`}>
            <button className='btn btn-warning rounded-5 fs-6 fw-bold'    
            >More Details
            </button>
            </Link>
        </div>
    );
};

  export default ProductCard;