import React from 'react'
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" alt="about me" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            saepe corrupti enim neque ratione. Sequi et dolores asperiores
            corporis, aperiam temporibus accusantium tenetur? Velit ex optio,
            cum veritatis illo consectetur?
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
