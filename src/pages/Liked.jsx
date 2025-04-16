import React from 'react'
import { useNavigate } from 'react-router-dom'

const Liked = () => {
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
          Избранные товары
        </h1>

        {/* Если товаров нет */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <p className="text-[#144F24] text-lg font-medium">
            У вас пока нет избранных товаров
          </p>
          <p className="text-gray-500 text-sm mt-2 max-w-md">
            Добавляйте товары в избранное, чтобы быстрее находить нужное и следить за изменениями цен
          </p>
        </div>

        {/* Если будут товары — рендер карточек здесь */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          // Карточки товаров
        </div> */}
      </div>
    </div>
  )
}

export default Liked
