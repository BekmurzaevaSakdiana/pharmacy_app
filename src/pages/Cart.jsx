import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const navigate = useNavigate()

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
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Назад
        </button>

        <h1 className="text-3xl font-bold text-[#144F24] mb-6 text-center">
          Корзина
        </h1>

        {/* Если корзина пуста */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <p className="text-[#144F24] text-lg font-medium">
            Ваша корзина пуста
          </p>
          <p className="text-gray-500 text-sm mt-2 max-w-md">
            Добавляйте товары в корзину, чтобы оформить заказ позже
          </p>
        </div>

        {/* Если будут товары — рендер карточек и суммы */}
        {/* <div className="mt-10">
          // Список товаров + кнопка оформления
        </div> */}
      </div>
    </div>
  )
}
