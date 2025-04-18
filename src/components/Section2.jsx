import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <section className="secondSection__items">
      <div className="container">
        <div className="py-[100px] px-5">
          <div className="">
            <h2 className="font-extrabold text-4xl text-[#144F24]">
              Возникли вопросы?
            </h2>
          </div>

          <form className="mt-5 flex flex-col gap-2" action="">

           

            <Link to={"https://wa.me/+996552225101 "} className="w-full max-w-[480px] rounded-xl text-white font-bold text-lg bg-[#144F24] py-5 text-center">ЗАДАТЬ ВОПРОС</Link>


          </form>
        </div>
      </div>
    </section>
  );
};

export default Section2;
