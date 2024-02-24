"use client";
import React, { useEffect, useState } from "react";
import "./Card.css";

function Card({ name, surname, price }) {
  return (
    <div className="overflow-hidden relative h-72 shadow-xl rounded-lg">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQus-AjHxy0MDlYnmriF0hyMl_6lsULiMBintbpq8SJVw&s"
        alt="image"
        className="object-cover w-full h-full"
      />
      <div className="overflow-hidden h-0 absolute bottom-0 left-0 w-full bg-gray-800 transition-all duration-500">
        <p className="font-bold text-2xl font-serif italic text-white text-left pt-2 pl-2 pb-0">
          {name} {surname}
        </p>
        <p className="font-bold font-serif italic text-white pl-2 pb-2">
          ${price}
        </p>
      </div>
    </div>
  );
}

export default Card;
