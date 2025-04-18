import React, { useEffect, useState } from "react";

export default function UserPage() {
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
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-6" style={{ color: "#30B856" }}>
        Профиль пользователя
      </h1>

      <div className="mb-4">
        <span className="font-semibold">Email:</span> <span>{user.email}</span>
      </div>

      <div className="mb-6">
        <span className="font-semibold">Пароль:</span>{" "}
        <span>{user.password}</span>
      </div>

      {user.purchases.length > 0 ? (
        <ul className="list-disc list-inside space-y-2">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: "#30B856" }}
          >
            Купленные товары
          </h2>
          {user.purchases.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Пока нет покупок</p>
      )}
    </div>
  );
}
