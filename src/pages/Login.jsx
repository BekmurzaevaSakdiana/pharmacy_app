import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/data/users.json");
      const data = await res.json();

      const user = data.users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        setSuccess(true);
        setTimeout(() => {
          navigate("/userPage");
        }, 2000);
      } else {
        setError("Неверный email или пароль");
      }
    } catch (err) {
      setError("Ошибка загрузки пользователей");
      console.error(err);
    }
  };

  return (
    <div className="bg-[#F9F9F9] py-10 min-h-screen">
      <div className="container">
        <Link
          to={"/"}
          className="flex items-center text-[#30B856] font-medium mb-6"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M10 18L2 10L10 2"
              stroke="#30B856"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Назад</span>
        </Link>

        <h1 className="text-3xl font-bold text-[#144F24] mb-6 text-center">
          Вход в аккаунт
        </h1>

        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && (
            <div className="fixed top-0 left-0 w-full bg-opacity-50 bg-green-500 justify-center items-center transition-all duration-500 z-50">
              <div className="text-white text-2xl p-6 bg-[#30B856] rounded-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 inline-block mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Успешный вход!
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-[#30B856] text-white font-medium rounded-md hover:bg-[#248c41] transition"
          >
            Войти
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            Нет аккаунта?{" "}
            <Link
              to={"/auth"}
              className="text-[#30B856] font-medium hover:underline"
            >
              Зарегистрируйтесь
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
