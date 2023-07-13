import React from 'react'
import './projects.css'
import {projects} from '../../data'
import ProjectCard from '../project_card/ProjectCard'
import { Link } from 'react-router-dom'

const Projects = () => {

  return (
    <>
      <div className="px-5 max-w-[1400px] mx-auto mt-10 py-5">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>proyectos
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium hover:text-[#C778DD]">
            <Link to="/projects">
              <span>Ver todos ~~&gt;</span>
            </Link>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, desc, url, github }) => {
            return (
              
                <ProjectCard
                  img={img}
                  langs={langs}
                  title={title}
                  desc={desc}
                  url={url}
                  github={github}
                  key={img}
                />
              
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Projects