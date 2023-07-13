import React from "react";
import "./smallProjects.css";
import { small_projects } from "../../data";

const SmallProjects = () => {
  return (
    <div className=" pt-[30px] px-5 max-w-[1400px] mx-auto">
      {/* title */}
      <div className="">
        <div className=" text-white font-medium mt-[30px] mb-[48px] text-[32px]">
          <span className=" text-[#C778DD]">#</span>
          <span>APIs</span>
        </div>
      </div>
      {/* body/cards */}
      <div className="cards flex justify-center flex-wrap gap-4">
        {
          // mapping
          small_projects.map((e) => {
            let { languages, title, body, url, github } = e;
            return (
              <>
                {/* card */}
                <div className="card max-w-[300px] w-full border border-[#ABB2BF]">
                  {/* skills */}
                  <div className="border-b border-[#ABB2BF] p-2 text-[#ABB2BF] flex flex-wrap gap-1">
                    {languages.map((lang) => {
                      return (
                        <span
                          className="project-breadcum text-[12px] md:text-[16px]"
                          key={lang}
                        >
                          {lang}{" "}
                        </span>
                      );
                    })}
                  </div>
                  {/* description */}
                  <div className="disc p-4">
                    <h2 className=" text-white font-medium text-2xl">
                      {title}
                    </h2>
                    <p className=" text-[#ABB2BF] py-4">{body}</p>
                    {/* we are only coders so maybe no one have figma projects */}
                    <div className="flex">
                    {url !=="" && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150 flex justify-center items-center"
                      >
                        <img src="/github.png" alt="" /> Demo {"<"}~{">"}
                      </a>
                    )}
                    {github !=="" && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150 flex justify-center items-center"
                      >
                        <img src="/github.png" alt="" /> Github {"<"}~{">"}
                      </a>
                    )}

                    </div>
                  </div>
                </div>
              </>
            );
          })
        }
      </div>
    </div>
  );
};

export default SmallProjects;
