import Image from "next/image";

import Navbar from "../components/Navbar";
import "../styles/explore.css"
import { Toaster } from "react-hot-toast";
import RotatingText from "../components/RotatingText";
import Products from "../components/Products";


export default function Explore() {
  return (
    <>
    <Toaster/>
    <Navbar/>
    <div className="explore-outer">
      
        <h1>What Can We Brew For You Today?</h1>
        <div>
        <RotatingText/>  
      </div>
      <Products/>
    </div>
    </>
  );
}
