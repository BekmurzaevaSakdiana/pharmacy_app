import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (id) => {
    const updateFavorites=favorites.filter((pill)=>pill.id!==id)
    localStorage.setItem("favorites",JSON.stringify(updateFavorites))
    setFavorites(updateFavorites)
  };

  return (
    <div className="bg-[#F9F9F9] py-10 min-h-screen">
      <div className="container">
        {/* Кнопка назад */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#30B856] font-medium hover:underline mb-6"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="#30B856"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Назад
        </button>

        <h1 className="text-3xl font-bold text-[#144F24] mb-6 text-center">
          Избранные
        </h1>

        {/* Если корзина пуста */}
        {favorites.length === 0 ? (
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <p className="text-[#144F24] text-lg font-medium">
              Ваша корзина пуста
            </p>
            <p className="text-gray-500 text-sm mt-2 max-w-md">
              Добавляйте товары в корзину, чтобы оформить заказ позже
            </p>
          </div>
        ) : (
          <div className="mt-10">
            {/* Отображение списка товаров из favorites */}
            {favorites.map((pill) => (
              <div
                key={pill.id}
                className="bg-white shadow-md rounded-xl p-6 mb-6 flex items-center gap-4"
              >
                <img
                  className="w-20 h-20 object-cover"
                  src={pill.image}
                  alt={pill.name}
                />
                <div>
                  <h3 className="text-lg font-medium text-[#144F24]">
                    {pill.name}
                  </h3>
                  <p className="text-sm text-gray-500">Цена: {pill.price} ₽</p>
                  <p className="text-sm text-gray-500">
                    Производитель: {pill.manufacturer}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveFavorite(pill.id)}
                  className="text-black font-bold text-xl ml-auto"
                >
                  ✖
                </button>
              </div>
            ))}
            {/* Здесь можно добавить кнопку для оформления заказа */}
            <button className="bg-[#30B856] text-white py-2 px-4 rounded-full mt-6">
              В корзину
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
