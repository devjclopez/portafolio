import React from 'react'
import About from '../components/first_section_about/About'
import Projects from '../components/projects_section/Projects'
import AboutSection from '../components/about_section/AboutSection'
import ContactSection from '../components/contact-section/ContactSection'
import SkillSection from '../components/skills_section/SkillSection'

const HomePage = () => {
  return (
    <>
      <About />
      <SkillSection />
      <Projects />
      <AboutSection />
      {/* <ContactSection /> */}
    </>
  )
}

export default HomePage