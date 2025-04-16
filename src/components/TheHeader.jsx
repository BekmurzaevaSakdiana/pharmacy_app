import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const TheHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasFavorites, setHasFavorites] = useState(false);
  const [hasItemsInCart, setHasItemsInCart] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const updateFavorites = () => {
    const favoritePills = JSON.parse(localStorage.getItem("favorites")) || [];
    setHasFavorites(favoritePills.length > 0);
  };

  const updateCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setHasItemsInCart(cartItems.length > 0);
  };

  useEffect(() => {
    updateFavorites();
    updateCart();

    window.addEventListener("favoritesChanged", updateFavorites);
    window.addEventListener("cartChanged", updateCart);

    return () => {
      window.removeEventListener("favoritesChanged", updateFavorites);
      window.removeEventListener("cartChanged", updateCart);
    };
  }, []);

  const toggleFavorite = (pill) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    if (favorites.some((fav) => fav.id === pill.id)) {
      favorites = favorites.filter((fav) => fav.id !== pill.id);
    } else {
      favorites.push(pill);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    window.dispatchEvent(new Event("favoritesChanged"));
  };

  return (
    <header className="shadow-md">
      <div className="container">
        <div className="headerItems flex items-center justify-between py-12 max-sm:flex-wrap">
          <Link to={"/"} className="logo">
            <img src="/svg/logo.png" alt="" />
          </Link>

          <div className="input__search w-[60%] flex items-center gap-3 border border-mainColor rounded-xl px-8 py-3 max-md:py-1">
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Поиск"
            />
            <img src="/svg/search.svg" alt="" />
          </div>

          <div className="icons flex items-center gap-10 max-[1029px]:hidden">
            <Link
              to={"/liked"}
              className="liked flex flex-col items-center gap-1"
            >
              <img
                src={hasFavorites ? "/svg/likedRed.svg" : "/svg/liked.svg"}
                alt="Favorites"
              />
              <p className="font-medium text-md hover:text-mainColor">
                Избранное
              </p>
            </Link>

            <Link
              to={"/cart"}
              className="liked flex flex-col items-center gap-1"
            >
              <img src="/svg/cart.svg" alt="" />
              <p className="font-medium text-md hover:text-mainColor">
                Корзина
              </p>
              {hasItemsInCart && (
                <span className="absolute top-10 right-[119px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  !
                </span>
              )}
            </Link>

            <Link
              to={"/login"}
              className="liked flex flex-col items-center gap-1"
            >
              <img src="/svg/login.svg" alt="" />
              <p className="font-medium text-md hover:text-mainColor">Войти</p>
            </Link>
          </div>

          <div onClick={handleOpen} className="menu hidden max-[1029px]:block">
            <img className="w-10" src="/svg/menu.png" alt="" />
          </div>
        </div>
      </div>

      {isOpen && <Menu handleOpen={handleOpen} />}
    </header>
  );
};

export default TheHeader;
