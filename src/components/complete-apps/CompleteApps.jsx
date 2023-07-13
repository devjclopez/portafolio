import React from 'react'
import { complete_projects } from '../../data'
import ProjectCard from '../project_card/ProjectCard';

const CompleteApps = () => {
  return (
    <div>
            <div className=" pt-[114px] px-5 max-w-[1400px] mx-auto">
                {/* top / title */}
                <div className="">
                    {/* projects */}
                    <div className=" text-white font-bold text-[32px]">
                        <span className=" text-[#C778DD]">/</span>
                        <span>portafolio</span>
                    </div>
                    {/* list */}
                    <div className=" text-white mt-[14px]">Lista de mis proyectos realizados</div>
                </div>
                {/* completed tasks */}
                <div className="">
                    {/* title */}
                    <div className=" text-white font-medium mt-[68px] mb-[28px] text-[32px]">
                        <span className=" text-[#C778DD]">#</span>
                        <span>Apps</span>
                    </div>
                    {/* projects */}
                    <div className="flex flex-wrap justify-start  gap-4 my-12">
                        {/* cards */}
                        {complete_projects.map(({ img, langs, title, desc, url, github }) => {
                            return (
                                <>
                                    <ProjectCard
                                        img={img}
                                        langs={langs}
                                        title={title}
                                        desc={desc}
                                        url={url}
                                        github={github}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CompleteApps