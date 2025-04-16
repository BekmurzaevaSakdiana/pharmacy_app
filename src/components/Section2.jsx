import React from "react";

const Section2 = () => {
  return (
    <section className="secondSection__items">
      <div className="container">
        <div className="py-[100px] px-5">
          <div className="">
            <h2 className="font-extrabold text-4xl text-[#144F24]">
              Возникли вопросы?
            </h2>
            <p className="font-medium text-2xl ">Заполните форму ниже</p>
          </div>

          <form className="mt-5 flex flex-col gap-2" action="">

            <div className="two__inputs flex items-center gap-5 max-w-[480px]">
              <input
                className="border border-[#92CFAE] rounded-xl px-12 py-3 w-full outline-none"
                type="text"
                placeholder="Ваше имя"
              /> 
              <input
                className="border border-[#92CFAE] rounded-xl px-12 py-3 w-full outline-none"
                type="text"
                placeholder="+7 900 000 00 00"
              />
            </div>


            <div className="two__inputs flex items-center gap-5 max-w-[480px]">
              <input
                className="border border-[#92CFAE] rounded-xl px-12 py-3 w-full outline-none"
                type="text"
                placeholder="Введите ваш E-mail"
              />
              
            </div>


            <button className="w-full max-w-[480px] rounded-xl text-white font-bold text-lg bg-[#144F24] py-5 text-center">ЗАДАТЬ ВОПРОС</button>


          </form>
        </div>
      </div>
    </section>
  );
};

export default Section2;
