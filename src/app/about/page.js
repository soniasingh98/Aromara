// pages/about.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../images/about1.jpeg";
import img2 from "../images/illustration4.png";
import img3 from "../images/about3.jpg";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 px-4 md:px-8 lg:px-16 h-screen flex flex-col justify-center hidden lg:flex">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            About Aromara
          </h1>
          <p className="text-lg text-black-600">
            Discover the passion behind our coffee. Every cup is crafted with
            love and dedication.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ height: "290px" }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={img1}
              alt="Our Story"
              style={{ height: "150px" }}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Our Story
              </h2>
              <p className="text-gray-600">
                From a small local roastery to a beloved coffee brand, discover
                our journey and the milestones we achieved.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ height: "290px" }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={img2}
              alt="Our Mission"
              style={{ height: "150px" }}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To provide the finest coffee experience while supporting
                sustainable practices and communities.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ height: "290px" }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={img3}
              alt="Our Values"
              style={{ height: "150px" }}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Our Values
              </h2>
              <p className="text-gray-600">
                Integrity, quality, and community are at the core of everything
                we do. Learn more about our values.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-gray-100 px-4 md:px-8 lg:px-16 mt-20 block lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Aromara
          </h1>
          <p className="text-lg text-gray-600">
            Discover the passion behind our coffee. Every cup is crafted with
            love and dedication.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={img1}
              alt="Our Story"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Our Story
              </h2>
              <p className="text-gray-600">
                From a small local roastery to a beloved coffee brand, discover
                our journey and the milestones we achieved.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={img2}
              alt="Our Mission"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To provide the finest coffee experience while supporting
                sustainable practices and communities.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={img3}
              alt="Our Values"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Our Values
              </h2>
              <p className="text-gray-600">
                Integrity, quality, and community are at the core of everything
                we do. Learn more about our values.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
