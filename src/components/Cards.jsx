import React, { useEffect, useState } from "react";
import Card from './Card'


const Cards = () => {
  const [pills, setPills] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setPills(data))
      .catch((err) => console.error("ошибка"));
  }, []);

  return (
    <section>
      <div className="container">
        <div className="cards__items flex items-center justify-around gap-3 flex-wrap">
          {pills.map((pill) => (
            <Card key={pill.id} pill={pill} /> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
