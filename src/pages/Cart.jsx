import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Загружаем товары из localStorage при монтировании компонента
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Увеличиваем количество товара
  const handleIncrement = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  // Уменьшаем количество товара, если становится 0 — удаляем
  const handleDecrement = (id) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
      .filter((item) => item.count > 0); // Удаляем если count 0

    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  // Удаляем товар из корзины
  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  // Считаем итоговую сумму
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

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
          Корзина
        </h1>

        {cartItems.length === 0 ? (
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
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl p-6 mb-6 flex items-center gap-4 relative"
              >
                {/* Кнопка-крестик для удаления */}
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="absolute top-4 right-4 text-xl text-gray-500 hover:text-red-500"
                >
                  ✖
                </button>

                <img
                  className="w-20 h-20 object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <h3 className="text-lg font-medium text-[#144F24]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">Цена: {item.price} ₽</p>
                  <p className="text-sm text-gray-500">
                    Производитель: {item.manufacturer}
                  </p>
                  <div className="mt-5 flex items-center gap-5">
                    <p className="text-sm text-gray-500">Количество: </p>
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="ml-2 text-xl text-white rounded-lg px-3 bg-mainColor"
                    >
                      -
                    </button>
                    <p className="text-black">{item.count}</p>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="ml-2 text-xl text-white rounded-lg px-3 bg-mainColor"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-right text-lg font-bold">
              <p>Общая сумма: {totalPrice} ₽</p>
            </div>

            <button className="bg-[#30B856] text-white py-2 px-4 rounded-full mt-6">
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
