import React from 'react'
import { Link } from 'react-router-dom'

export default function Auth() {
  return (
    <div className="bg-[#F9F9F9] py-10 min-h-screen">
      <div className="container">
        
        <Link to={'/login'} className="flex items-center text-[#30B856] font-medium mb-6">
          <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M10 18L2 10L10 2" stroke="#30B856" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Назад</span>
        </Link>
        
        <h1 className="text-3xl font-bold text-[#144F24] mb-6 text-center">
          Регистрация
        </h1>
        
        {/* Форма регистрации */}
        <form className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center max-w-5xl mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          
          <button
            type="submit"
            className="w-full p-3 bg-[#30B856] text-white font-medium rounded-md hover:bg-[#248c41] transition"
          >
            Зарегистрироваться
          </button>
        </form>

        {/* Ссылка на страницу входа */}
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            Уже есть аккаунт?{' '}
            <Link to={'/login'} className="text-[#30B856] font-medium hover:underline">
              Войдите
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
