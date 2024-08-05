"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import Nav from './Nav';

const Header = () => {
    const [navActive, setNavActive] = useState(false);

    return (
        <header className='fixed top-0 left-0 right-0 z-[60] bg-black'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <Link href="/" className='relative w-[100px] h-[40px] xl:w-[120px] xl:h-[40px] z-[60] ml-8'>
                        <Image 
                            src='/assets/logo.svg'
                            alt="Logo"
                            layout="fill"
                            objectFit="contain"
                            className='cursor-pointer'
                        />
                    </Link>
                    {/* Nav trigger button */}
                    <button 
                        onClick={() => setNavActive(!navActive)} 
                        className='w-8 h-6 text-accent relative flex items-center justify-center z-[60] outline-none mr-6'
                    >
                        {/* 1 */}
                        <span className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"}`}></span>
                        {/* 2 */}
                        <span className={`w-full h-[1.5px] bg-current absolute left-0 transition-opacity duration-300 ${navActive ? "opacity-0" : "top-1/2"}`}></span>
                        {/* 3 */}
                        <span className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"}`}></span>
                    </button>
                </div>
            </div>
            {/* Nav */}
            <AnimatePresence mode="wait">
                {navActive && <Nav />}
            </AnimatePresence>
        </header>
    );
};

export default Header;
