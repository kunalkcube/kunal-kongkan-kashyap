import React from 'react'
import { Project1, Project10, Project11, Project12, Project13, Project14, Project15, Project16, Project17, Project18, Project19, Project2, Project20, Project21, Project22, Project23, Project24, Project25, Project26, Project3, Project4, Project5, Project6, Project7, Project8, Project9 } from '../assets/index'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'

const Projects = () => {
    return (
        <section className='px-4 pt-24 pb-7 bg-secondary max-w-6xl mx-auto'>
            <Marquee title="PROJECTS" textSize="text-7xl lg:text-9xl" marginBottom="mb-6" />
            <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-3'>
                <ProjectCard image={Project1} title="Components" link="/" />
                <ProjectCard image={Project2} title="PhiliGenie" link="/" />
                <ProjectCard image={Project3} title="NASA-APOD" link="/" />
                <ProjectCard image={Project4} title="Sci-Kick" link="/" />
                <ProjectCard image={Project5} title="Mini Portfolio" link="/" />
                <ProjectCard image={Project6} title="Dictionary" link="/" />
                <ProjectCard image={Project7} title="Tasks App" link="/" />
                <ProjectCard image={Project8} title="NoteVault" link="/" />
                <ProjectCard image={Project9} title="Notice Box" link="/" />
                <ProjectCard image={Project10} title="Lens Of Beauty" link="/" />
                <ProjectCard image={Project11} title="3D Portfolio Card" link="/" />
                <ProjectCard image={Project12} title="PikoTaro" link="/" />
                <ProjectCard image={Project13} title="Tic-Tac-Toe" link="/" />
                <ProjectCard image={Project14} title="Pikode" link="/" />
                <ProjectCard image={Project15} title="TextUltra" link="/" />
                <ProjectCard image={Project16} title="PokeCard" link="/" />
                <ProjectCard image={Project17} title="404" link="/" />
                <ProjectCard image={Project18} title="Timeline" link="/" />
                <ProjectCard image={Project19} title="Nothing Clone (Mobile UI)" link="/" />
                <ProjectCard image={Project20} title="Accordion" link="/" />
                <ProjectCard image={Project21} title="Tabbed Interface" link="/" />
                <ProjectCard image={Project22} title="Scribe" link="/" />
                <ProjectCard image={Project23} title="Detemsic" link="/" />
                <ProjectCard image={Project24} title="Note Taking App" link="/" />
                <ProjectCard image={Project25} title="Bhagavad Gita" link="/" />
                <ProjectCard image={Project26} title="CipherCommand-Console" link="/" />
            </div>
        </section>
    )
}

export default Projects