"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import "./gallery.css";

function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result[0] + result.substring(1, length).toLocaleLowerCase();
}

function Gallery(props) {
  const [card, setCard] = useState([]);

  useEffect(() => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let generateCard = data.map((e, i) => {
      let price = (Math.random() * 100).toFixed(2);
      let name = generateRandomString(6);
      let surname = generateRandomString(5);
      return { key: i, name, surname, price };
    });
    // console.log(generateCard);
    setCard(generateCard);
  }, []);

  return (
    <div className="gallery ">
      <Navbar />
      <div className="grid custom-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 px-10 py-10">
        {card.map((elem, i) => {
          return (
            <Card
              key={i}
              name={elem.name}
              surname={elem.surname}
              price={elem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
