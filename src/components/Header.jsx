import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiStackLine, RiCloseLine } from '@remixicon/react';

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const closeMenu = () => {
        setShowModal(false);
    };

    return (
        <>
            <header className='p-4 flex fixed top-0 left-0 right-0 z-20 bg-white/50 backdrop-blur'>
                <nav className='flex justify-between items-center w-full text-primary max-w-6xl mx-auto'>
                    <div className='font-bold text-base text-primary tracking-wide font-teko lg:text-lg'>
                        <Link to="/" onClick={closeMenu}>kunalkcube.pro</Link>
                    </div>
                    <div className='flex justify-center items-center text-base font-semibold cursor-pointer md:hidden' onClick={toggleModal}>
                        <RiStackLine
                            size={16}
                            color='black'
                        />
                    </div>
                    <div className='hidden md:flex'>
                        <ul className='flex space-x-6 lg:space-x-8'>
                            <li>
                                <Link to="/" className='no-underline text-lg lg:text-xl font-semibold font-teko cursor-pointer text-primary hover:text-black' onClick={closeMenu}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className='no-underline text-lg lg:text-xl font-semibold font-teko cursor-pointer text-primary hover:text-black' onClick={closeMenu}>About</Link>
                            </li>
                            <li>
                                <Link to="/projects" className='no-underline text-lg lg:text-xl font-semibold font-teko cursor-pointer text-primary hover:text-black' onClick={closeMenu}>Projects</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            {showModal && (
                <div className="flex fixed top-0 left-0 w-full h-full justify-center items-center bg-black/50 backdrop-blur z-30 md:hidden">
                    <span className="flex justify-center items-center text-white cursor-pointer absolute top-5 right-4 font-semibold text-base" onClick={toggleModal}>
                        <RiCloseLine
                            size={16}
                            color='white'
                            className='font-bold'
                        />
                    </span>
                    <div className="absolute bottom-7 right-4 p-5">
                        <ul className='list-none p-0 m-0'>
                            <li className='my-2'>
                                <Link to="/" className='flex justify-end mt-4 no-underline text-white text-xl cursor-pointer font-semibold font-teko' onClick={closeMenu}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className='flex justify-end mt-4 no-underline text-white text-xl cursor-pointer font-semibold font-teko' onClick={closeMenu}>About</Link>
                            </li>
                            <li>
                                <Link to="/projects" className='flex justify-end mt-4 no-underline text-white text-xl cursor-pointer font-semibold font-teko' onClick={closeMenu}>Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
