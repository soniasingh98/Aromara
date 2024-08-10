'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';
import { useCart } from "../context/CartContext"
import c1 from '../images/c8.jpg';
import c2 from '../images/c2 (2).jpg';
import c3 from '../images/c3.jpg';
import c4 from '../images/c4.jpg';
import c5 from '../images/c5.jpg';
import c6 from '../images/c6.jpg';
import c7 from '../images/c7.jpg';
import c8 from '../images/coffee1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "../styles/products.css";
import toast from 'react-hot-toast';

const products = [
  { src: c1, name: 'Espresso', price: '$36' },
  { src: c2, name: 'Latte', price: '$48' },
  { src: c3, name: 'Cappuccino', price: '$72' },
  { src: c4, name: 'Macchiato', price: '$36' },
  { src: c5, name: 'Mocha', price: '$48' },
  { src: c6, name: 'Flat White', price: '$72' },
  { src: c7, name: 'Cold Brew', price: '$72' },
  { src: c8, name: 'Cortado', price: '$72' }
];

const itemsPerPage = 4;

export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(0);
  const { addToCart } = useCart(); // Use the addToCart function from context

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="product-main">
      <div className="product-outer">
        {currentItems.map((product, index) => (
          <div key={index} className="product-inner">
            <Image src={product.src} alt={product.name} width={200} height={200} objectFit="cover" className="product-inner-img" />
            <div className="product-details">
             
             <span>
              <FontAwesomeIcon icon={faShoppingCart} size="1.5x" onClick={() => {addToCart(product); toast.success("Item added to cart!");}} className="cursor-pointer" />
              </span>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 pagination pageclass">
        <ReactPaginate
          previousLabel={'←'}
          nextLabel={'→'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
}
