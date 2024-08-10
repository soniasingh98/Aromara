"use client"
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav style={{ background: "linear-gradient(70deg, #855d3c 0%, #61432d 35%, #4b3832 100%)" }} className="text-white shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          {/* Desktop View */}
          <div className="hidden md:flex w-full">
            <div className="flex flex-1 space-x-4">
            <Link href="/" className="hover:text-black-600">Home</Link>
              <Link href="/explore" className="hover:text-black-600">Explore</Link>
              <a href="/about" className="hover:text-black-600">About</a>
            </div>
            <div className="text-2xl font-bold text-center flex-shrink-0">Aromara</div>
            <div className="flex flex-1 justify-end">
              <Link href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              </Link>
              {cart.length>0 && <span style={{backgroundColor:"red",height:"25px",padding:"0 6px",borderRadius:"10px"
              }}>{cart.length}</span>}
            </div>
          </div>
          
          {/* Mobile View */}
          <div className="md:hidden flex justify-between items-center w-full">
            <div className="text-2xl font-bold">Aromara</div>
            <div className="space-y-2" onClick={toggleSidebar}>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
            </div>
          </div>
        </div>
      </nav>
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>
        <div className="bg-white w-64 h-full shadow-xl p-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Aromara</div>
            <button onClick={toggleSidebar}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="mt-4 space-y-2">
  <Link href="/" className="block hover:bg-gray-100 p-2 rounded">Home</Link>
  <Link href="/explore" className="block hover:bg-gray-100 p-2 rounded">Explore</Link>
  <Link href="/about" className="block hover:bg-gray-100 p-2 rounded">About</Link>
  <Link href="/cart" className="block hover:bg-gray-100 p-2 rounded">
    Cart {cart.length > 0 && <span className="text-red-500 mx-1">{cart.length}</span>}
  </Link>
</nav>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
