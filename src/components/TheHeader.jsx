import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const TheHeader = () => {
    const [isOpen,setIsOpen]=useState(false)

    const handleOpen=()=>{
        setIsOpen(prev=>!prev)
    }
 

  return (
    <header className="shadow-md">
        <div className="container">
            <div className="headerItems flex items-center justify-between py-12 max-sm:flex-wrap">

                <Link to={'/'} className="logo">
                    <img src="/svg/logo.png" alt="" />
                </Link>

                <div className="input__search w-[60%] flex items-center gap-3  border border-mainColor rounded-xl px-8 py-3 max-md:py-1">
                    <input className="w-full outline-none " type="text" placeholder="Поиск " />
                    <img src="/svg/search.svg" alt="" />
                </div>

                <div className="icons flex items-center gap-10 max-[1029px]:hidden">


                    <Link to={'/liked'} className="liked flex flex-col items-center gap-1">
                        <img src="/svg/liked.svg" alt="" />
                        <p className="font-medium text-md hover:text-mainColor">Избранное</p>
                    </Link>

                    <Link to={'/cart'} className="liked flex flex-col items-center gap-1">
                        <img src="/svg/cart.svg" alt="" />
                        <p className="font-medium text-md hover:text-mainColor">Корзина</p>
                    </Link>

                    <Link to={'/login'} className="liked flex flex-col items-center gap-1">
                        <img src="/svg/login.svg" alt="" />
                        <p className="font-medium text-md hover:text-mainColor">Войти</p>
                    </Link>
                </div>

                <div onClick={handleOpen} className="menu hidden max-[1029px]:block">
                    <img className="w-10" src="/svg/menu.png" alt="" />
                </div>

                </div>
            </div>

            {
                isOpen && <Menu handleOpen={handleOpen}/>
            }
    </header>
  );
};

export default TheHeader;
