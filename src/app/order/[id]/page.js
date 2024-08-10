"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory
import "../../styles/order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";

const OrderPage = () => {
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/explore");
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="order-outer">
      <div className="order-inner">
        <FontAwesomeIcon icon={faCheck} size="2x" className="order-icon"/>
        <h1>Order Successfully Placed</h1>
      </div>
      <div className="order-inner2">
        <p>Order <span>#{id}</span> Confirmed</p>
        <p>Your Products Are Coming Your Way in 3 to 5 Days!</p>
      </div>
    </div>
  );
};

export default OrderPage;
