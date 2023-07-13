import React, { useEffect, useState } from "react";
import './navbar.css'

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div
        data-aos="fade-down"
        className="navbar top-0 left-0 right-0 bg-[#282C33]"
      >
        <div className="px-5 max-w-[1400px] mx-auto flex items-center justify-between py-2 my-0 md:my-1">
          <div className="left flex gap-2 items-center font-bold text-white text-[22px] md:text-[28px]">
            {/* logo */}
            <div className="img">
              <img src="/logo.png" alt="" />
            </div>
            <span className="quotes hidden md:block">{"<"}</span>Dev.Josh <span className="slash hidden md:block">/</span><span className="quotes hidden md:block">{">"}</span>
          </div>
          <div className="right flex items-center">
            <div
              className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full z-50 ${
                !toggle
                  ? `right-[-100%] top-0 bottom-0`
                  : `right-0 top-0`
              } bg-[#282C33] md:static`}
            >
              <Link to="/">
                <li className="text-[#ABB2BF] text-[20px] my-4 md:my-auto list-none mx-4 font-semibold">
                  <span className="text-[#C778DD] font-medium">#</span>Inicio
                </li>
              </Link>
              <Link to="/projects">
                <li className="text-[#ABB2BF] text-[20px] my-4 md:my-auto list-none mx-4 font-semibold">
                  <span className="text-[#C778DD] font-medium">#</span>Portafolio
                </li>
              </Link>
              <Link to="/about">
                <li className="text-[#ABB2BF] text-[20px] my-4 md:my-auto list-none mx-4 font-semibold">
                  <span className="text-[#C778DD] font-medium">#</span>Sobre-mi
                </li>
              </Link>
              {/* <Link to="/contact">
                <li className="text-[#ABB2BF] text-[22px] my-4 md:my-auto list-none mx-4 font-semibold">
                  <span className="text-[#C778DD] font-medium">#</span>Contactame
                </li>
              </Link> */}
              <div className="social flex justify-center md:hidden gap-3 mb-3">
                <a href="https://github.com/Devjclopez19">
                  <img src="/github.png" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/jcastrolopez">
                  <img src="/linkedin.png" alt="" />
                </a>
                <a href="#">
                  <img src="/Twitter.png" alt="" />
                </a>
              </div>
              <div
                onClick={() => setToggle(false)}
                className="close absolute block md:hidden right-3 top-3"
              >
                <img src="/close.png" alt="" />
              </div>
            </div>
            {/* CLOSE&OPEN btns */}
            <div onClick={() => setToggle(true)} className="">
              <div className="open block md:hidden w-8">
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
