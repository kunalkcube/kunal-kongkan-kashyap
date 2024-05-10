import React, { useState } from 'react'
import { Project1, Project2, Project3 } from '../assets/index'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'
import Button from '../components/Button'
import { RiCloseLine } from '@remixicon/react'

const Home = () => {
    const [showContactModal, setShowContactModal] = useState(false);

    const toggleContactModal = () => {
        setShowContactModal(!showContactModal);
    };

    return (
        <>
            <section className='px-4 pt-24 pb-7 bg-secondary text-left max-w-6xl mx-auto'>
                <h1 className='text-2xl mb-1 font-lora font-bold lg:text-3xl'>Kunal Kongkan Kashyap</h1>
                <h3 className='text-xl mb-2 font-teko font-semibold lg:text-2xl'>Developer</h3>
                <p className='text-base font-teko sm:text-lg lg:text-xl'><span className='font-satisfy font-semibold pr-1'>Passionate</span> about coding and recently HSSLC passed from Baihata Chariali, Assam. I am dedicated to continuously improving my skills and delivering exceptional web development projects. I have gained experience in creating websites and chatbots, and I am currently focused on mastering new technologies to develop <span className='font-satisfy font-semibold px-1'>innovative</span> solutions. Committed to continuous improvement and delivering <span className='font-satisfy font-semibold px-1'>exceptional</span> web development projects.
                </p>
                <p className='text-base font-teko mt-6 sm:text-lg lg:text-xl'>Apart from my technical pursuits, I find enjoyment in playing carrom and chess. These games provide a welcome break from coding and allow me to exercise my strategic thinking skills.</p>
            </section>
            <section className='py-7 px-4 bg-secondary max-w-6xl mx-auto'>
                <Marquee />
                <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-3'>
                    <ProjectCard image={Project1} title="Components" link="/" />
                    <ProjectCard image={Project2} title="PhiliGenie" link="/" />
                    <ProjectCard image={Project3} title="NASA-APOD" link="/" />
                </div>
                <Link to="/projects" className='inline-block px-2 py-1 bg-secondary border border-primary font-teko text-primary text-xl cursor-pointer hover:bg-primary hover:text-secondary btn lg:text-2xl font-semibold'>See More</Link>
            </section>
            <section className='py-7 px-4 bg-secondary text-left max-w-6xl mx-auto'>
                <div className='flex flex-col justify-center'>
                    <a className='font-teko text-lg font-semibold text-primary lg:text-xl' href="mailto:hello@kunalkcube.pro">hello@kunalkcube.pro</a>
                    <Button title="Contact" onClick={toggleContactModal} />
                </div>
            </section>

            {showContactModal && (
                <div className="flex fixed top-0 left-0 w-full h-full justify-center items-center bg-black/50 backdrop-blur z-30">
                    <span className="flex justify-center items-center text-white cursor-pointer absolute top-5 right-4 font-semibold text-base" onClick={toggleContactModal}>
                        <RiCloseLine
                            size={16}
                            color='white'
                            className='font-bold'
                        />
                    </span>
                    <div className='bg-secondary p-5 w-11/12 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl'>
                        <form className='flex flex-col justify-center'>
                            <div className='flex flex-col mb-5'>
                                <label htmlFor="name" className='mb-1 text-lg font-teko tracking-wide font-bold text-label lg:text-xl'>Name</label>
                                <input className='input p-1 text-base lg:text-lg font-teko border border-label hover:border-primary hover:outline-none' type="text" placeholder='Enter Your Name' name='name' id='name' required />
                            </div>
                            <div className='flex flex-col mb-5'>
                                <label htmlFor="email" className='mb-1 text-lg font-teko tracking-wide font-bold text-label lg:text-xl'>Email</label>
                                <input className='input p-1 text-base lg:text-lg font-teko border border-label hover:border-primary hover:outline-none' type="email" placeholder='Enter Your Email' name='email' id='email' required />
                            </div>
                            <div className='flex flex-col mb-5'>
                                <label htmlFor="message" className='mb-1 text-lg font-teko tracking-wide font-bold text-label lg:text-xl'>Message</label>
                                <textarea className='textarea p-1 text-base lg:text-lg font-teko border border-label resize-none hover:border-primary hover:outline-none' name="message" id="message" rows={3} placeholder='Write Your Message' required></textarea>
                            </div>
                            <Button title="Send" />
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home