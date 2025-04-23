import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="text-center mt-10 text-gray-500">
        Пользователь не найден. Пожалуйста, войдите в аккаунт.
      </div>
    );
  }

  return (
    <div className="bg-[#F9F9F9] py-10 min-h-screen">
      <div className="container">
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
        <div className="max-w-xl mx-auto mt-10 p-6 border rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold mb-6" style={{ color: "#30B856" }}>
            Профиль пользователя
          </h1>

          <div className="mb-4">
            <span className="font-semibold">Email:</span>{" "}
            <span>{user.email}</span>
          </div>

          <div className="mb-6">
            <span className="font-semibold">Пароль:</span>{" "}
            <span>{user.password}</span>
          </div>

          {user.purchases && user.purchases.length > 0 ? (
            <>
              <h2
                className="text-xl font-semibold mb-3"
                style={{ color: "#30B856" }}
              >
                Купленные товары
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {user.purchases.map((item, index) => (
                  <li key={index}>
                    {item.name} — {item.count} шт. ({item.price})
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>Пока нет покупок</p>
          )}
        </div>
      </div>
    </div>
  );
}
