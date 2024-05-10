import { RiLink } from '@remixicon/react'
import React from 'react'

const ProjectCard = ({image, title, link}) => {
    return (
        <div className='flex flex-col mb-5'>
            <div className='w-full h-52 sm:h-72 md:h-96 lg:h-64 xl:h-72 flex justify-center items-center overflow-hidden mb-1'>
                <img className='w-full h-full object-cover' src={image} alt="Project-1" />
            </div>
            <div className='flex flex-row justify-between items-center'>
                <h4 className='project-title'>{title}</h4>
                <a href={link} className='project-link'>
                    <span className='mr-1'>Check</span>
                    <RiLink
                        size={16}
                    />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard