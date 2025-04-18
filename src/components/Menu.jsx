import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Menu({ handleOpen }) {
  const [userExist, setUserExist] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setUserExist(true);
    }
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0   z-50 flex justify-center bg-black bg-opacity-50 backdrop-blur-sm  items-center min-h-screen h-full">
        <div
          className="bg-white p-6 rounded-xl shadow-lg w-4/5 md:w-1/2 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleOpen}
            className="absolute top-3 right-3 text-xl text-[#144F24]"
          >
            ✕
          </button>

          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                onClick={handleOpen}
                to="/"
                className="text-[#144F24] font-medium hover:text-[#30B856]"
              >
                На главное
              </Link>
            </li>
            <li>
              <Link
                onClick={handleOpen}
                to="/liked"
                className="text-[#144F24] font-medium hover:text-[#30B856]"
              >
                Избранное
              </Link>
            </li>
            <li>
              <Link
                onClick={handleOpen}
                to="/cart"
                className="text-[#144F24] font-medium hover:text-[#30B856]"
              >
                Корзина
              </Link>
            </li>

            {userExist ? (
              <li>
                <Link
                  onClick={handleOpen}
                  to="/userPage"
                  className="text-[#144F24] font-medium hover:text-[#30B856]"
                >
                  Ваша страница
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  onClick={handleOpen}
                  to="/login"
                  className="text-[#144F24] font-medium hover:text-[#30B856]"
                >
                  Войти
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
