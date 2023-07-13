import React from "react";

const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-6"></div>
      {/* footer */}
      <div className="px-5 max-w-[1400px] mx-auto py-6">
        <div className="flex items-center justify-between gap-4 md:gap-8 flex-col md:flex-row ">
          {/* logo */}
          <div className=" flex gap-2 items-center text-2xl text-white font-bold">
            <img src="/logo.png" alt="" />
            <span>Dev.Josh</span>
          </div>
          {/* email */}
          {/* <span className="text-[#ABB2BF]">dev.jclopez@gmail.com</span> */}
          <div className="text-[#ffffff] text-center">
            <p>Desarrollador Web Full Stack de Cusco, <b>Perú.</b></p>
          </div>
          <div className="text-center text-[#ABB2BF]">© Copyright 2023.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
