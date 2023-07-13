import React from 'react'

const ProjectCard = ({ img, langs, title, desc, url, github }) => {
  return (
    <>
      <div  data-aos="fade-up" data-aos-delay="300" className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0">
        {/* img */}
        <div className="card-img h-[180px] md:h-[250px]">
          <img className=" w-full" src={img} alt="" />
        </div>
        {/* skills */}
        <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF]">
          {langs.map((e) => {
            return <span className="project-breadcum text-[12px] md:text-[16px]" key={e}>{e}</span>;
          })}
        </div>
        {/* disc */}
        <div className=" p-4">
          <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
          <p className=" py-4 text-[#ABB2BF] ">{desc}</p>
          {/* btns */}
          <div className="flex">
            {url!=="" && (
              <a href={url} target='_blank' rel="noreferrer" className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150 mr-3 flex justify-center items-center">
              Live {"<"}~{">"}
            </a>
            ) }
            {github!=="" && (
              <a href={github} target='_blank' rel="noreferrer" className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150 flex justify-center items-center">
                <img src="/github.png" alt="" /> Codigo
              </a>
            ) }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard