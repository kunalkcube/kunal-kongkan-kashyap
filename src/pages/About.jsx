import React from 'react'
import Marquee from '../components/Marquee'
import { Kongkan } from '../assets/index'

const About = () => {
    return (
        <>
            <section className='px-4 pt-24 pb-3 bg-secondary text-left max-w-6xl mx-auto relative'>
                <Marquee title="ABOUT" textSize="text-7xl lg:text-9xl" marginBottom="mb-24" />
                <div className='w-60 h-60 absolute z-10 top-0 right-0 flex justify-center items-center overflow-hidden rounded-bl-[100px]'>
                    <img className='w-full h-full object-cover' src={Kongkan} alt="Kunal Kongkan Kashyap" />
                </div>
                <h1 className='text-2xl mb-1 font-lora font-bold lg:text-3xl'>Kunal Kongkan Kashyap</h1>
                <h3 className='text-xl mb-2 font-teko font-semibold lg:text-2xl'>Developer</h3>
                <p className='text-base font-teko sm:text-lg lg:text-xl'>Passionate about coding and web development. Experienced in creating websites and chatbots. Always seeking innovation and continuous improvement. Enjoys playing carrom and chess for strategic thinking.</p>
            </section>
            <section className='py-7 px-4 bg-secondary max-w-6xl mx-auto'>
                <h2 className='text-xl font-teko font-bold lg:text-2xl'>Education</h2>
                <div class="relative flex flex-col">
                    <div class="relative p-2 mt-5 border border-label">
                        <div className='absolute top-2 right-2'>
                            <div className='animate-ping w-3 h-3 rounded-full bg-primary'></div>
                            <div className='absolute top-0 right-0 w-3 h-3 rounded-full bg-primary'></div>
                        </div>
                        <h2 className='text-xl mb-1 font-teko font-bold lg:text-2xl'>Gauhati University</h2>
                        <h3 className='text-lg mb-1 font-teko font-semibold lg:text-xl'>Computer Science</h3>
                        <span className='text-base font-teko font-semibold bg-slate-300 px-2 py-1 lg:text-lg'>Integrated MSc</span>
                    </div>
                    <div class="relative p-2 mt-5 border border-label">
                        <div className='absolute top-2 right-2 w-3 h-3 rounded-full bg-primary'></div>
                        <h2 className='text-xl mb-1 font-teko font-bold lg:text-2xl'>Gateway Senior Secondary School</h2>
                        <h3 className='text-lg mb-1 font-teko font-semibold lg:text-xl'>Science</h3>
                        <span className='text-base font-teko font-semibold bg-slate-300 px-2 py-1 lg:text-lg'>Class 12</span>
                    </div>
                    <div class="relative p-2 mt-5 border border-label">
                        <div className='absolute top-2 right-2 w-3 h-3 rounded-full bg-primary'></div>
                        <h2 className='text-xl mb-1 font-teko font-bold lg:text-2xl'>Adarsha Jatiya Vidyalaya, Bihdia</h2>
                        <span className='text-base font-teko font-semibold bg-slate-300 px-2 py-1 lg:text-lg'>Class 10</span>
                    </div>
                </div>
            </section>
            <section className='py-7 px-4 bg-secondary max-w-6xl mx-auto'>
                <div class="flex flex-col">
                    <h2 className='text-xl mb-2 font-teko font-bold lg:text-2xl'>Main Skills</h2>
                    <div class="flex flex-wrap">
                        <span className='inline-block py-2 px-3 m-1 bg-secondary border border-label text-lg lg:text-xl font-semibold font-teko'>HTML</span>
                        <span className='inline-block py-2 px-3 m-1 bg-secondary border border-label text-lg lg:text-xl font-semibold font-teko'>CSS</span>
                        <span className='inline-block py-2 px-3 m-1 bg-secondary border border-label text-lg lg:text-xl font-semibold font-teko'>JavaScript</span>
                        <span className='inline-block py-2 px-3 m-1 bg-secondary border border-label text-lg lg:text-xl font-semibold font-teko'>PHP</span>
                        <span className='inline-block py-2 px-3 m-1 bg-secondary border border-label text-lg lg:text-xl font-semibold font-teko'>SQl</span>
                        <span className='inline-block py-2 px-3 m-1 bg-secondary border border-label text-lg lg:text-xl font-semibold font-teko'>Tailwind CSS</span>
                        <span className='inline-block py-2 px-3 m-1 bg-secondary border border-label text-lg lg:text-xl font-semibold font-teko'>BootStrap</span>
                    </div>
                </div>
            </section>
            <section className='py-7 px-4 bg-secondary max-w-6xl mx-auto'>
                <div class="flex flex-col">
                    <h2 className='text-xl mb-2 font-teko font-bold lg:text-2xl'>Languages</h2>
                    <div class="flex flex-col">
                        <ul className='list-disc'>
                            <li className='text-lg lg:text-xl font-teko mb-1 text-primary relative ml-6'><span className='font-semibold'>English</span> (Intermediate)</li>
                            <li className='text-lg lg:text-xl font-teko mb-1 text-primary relative ml-6'><span className='font-semibold'>Assamese</span> (Native)</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About