import React, { useEffect, useState } from "react";

const Card = ({ pill }) => {
  const [like, setLike] = useState(false);

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

      window.dispatchEvent(new Event("favoritesChanged"));

      return newLikeState;
    });
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === pill.id);

    if (existingItemIndex !== -1) {
      // Товар уже есть в корзине, увеличим количество
      cart[existingItemIndex].count += 1;
    } else {
      // Товара нет, добавим с count: 1
      cart.push({ ...pill, count: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartChanged")); // Можно слушать в других местах
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
        <p className="text-4xl font-bold text-start">{pill.price} ₽</p>
      </div>

      <div className="btn max-w-[232px] w-full mt-4">
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full"
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default Card;
