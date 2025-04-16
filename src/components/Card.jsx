import React, { useEffect, useState } from "react";

const Card = ({ pill }) => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some((fav) => fav.id === pill.id);
    setLike(isFavorite);
  }, [pill.id]);

  const handleLike = () => {
    setLike((prev) => {
      const newLikeState = !prev;
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      if (newLikeState) {
        localStorage.setItem("favorites", JSON.stringify([...favorites, pill]));
      } else {
        const updatedFavorites = favorites.filter((fav) => fav.id !== pill.id);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }

      return newLikeState;
    });
  };

  return (
    <div className="card__item shadow-md max-w-[272px] w-full p-5">
      <div className="liked__btn">
        <button onClick={handleLike}>
          <img
            src={like ? "/svg/likedRedBtn.svg" : "/svg/likedBtn.svg"}
            alt="like button"
          />
        </button>
      </div>

      <div className="pillImg">
        <img className="w-56" src={pill.image} alt={pill.name} />
      </div>

      <div className="name mt-4">
        <p className="text-lg font-medium text-start">{pill.name}</p>
        <p className="text-md font-medium text-start text-gray-400 mt-2">
          Производитель: <span className="text-black">{pill.manufacturer}</span>
        </p>
      </div>

      <div className="price mt-8">
        <p className="text-4xl font-bold text-start">{pill.price} </p>
      </div>

      <div className="btn max-w-[232px] w-full mt-4">
        <div className="flex items-center rounded-full border-2 border-green-500 bg-green-500 text-white font-semibold overflow-hidden">
          <div className="flex items-center bg-white text-black px-4 py-2 rounded-l-full space-x-3">
            <button
              onClick={handleDecrement}
              className="text-xl font-bold text-gray-700"
            >
              −
            </button>
            <span className="text-lg font-semibold text-black">{count}</span>
            <button
              onClick={handleIncrement}
              className="text-xl font-bold text-gray-700"
            >
              +
            </button>
          </div>
          <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-r-full">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
