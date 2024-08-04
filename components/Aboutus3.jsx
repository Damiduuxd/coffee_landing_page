"use client";
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Badge from './Badge';
import Separator from './Separator';

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        imgSrc: "/assets/about/photo-1.jpg",
        title: "Our Journey",
        description: "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time.",
    },
    {
        imgSrc: "/assets/about/photo-2.jpg",
        title: "Our Promise",
        description: "At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community.",
    },
    {
        imgSrc: "/assets/about/photo-3.jpg",
        title: "Our Team",
        description: "At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.",
    }
];

const Aboutus = () => {
    const sectionsRef = useRef([]);

    useLayoutEffect(() => {
        sectionsRef.current.forEach((section, index) => {
            gsap.fromTo(section, 
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0,
                    scrollTrigger: {
                        trigger: section,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                    },
                }
            );
        });
    }, []);

    return (
        <section className='overflow-hidden bg-primary'>
            <div>
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        ref={el => sectionsRef.current[index] = el} 
                        className='w-screen h-screen flex flex-col justify-center items-center relative'>
                        <div className='container mx-auto'>
                            <div className='flex relative'>
                                {/* Text */}
                                <div className='flex-1 flex flex-col justify-center items-center'>
                                    <Badge containerStyles="w-[180px] h-[180px]" />
                                    <div className='max-w-[560px] text-center'>
                                        {/* Title */}
                                        <h2 className='h2 text-white mb-4'>
                                            {item.title.split('').map((char, i) => (
                                                <span key={i} className={i === 1 ? 'text-accent' : ''}>
                                                    {char}
                                                </span>
                                            ))}
                                        </h2>
                                        {/* Separator */}
                                        <div className='mb-8'>
                                            <Separator />
                                        </div>
                                        {/* Description */}
                                        <p className='leading-relaxed mb-16 px-8 xl:px-0'>
                                            {item.description}
                                        </p>
                                        {/* Button */}
                                        <button className='btn'>See more</button>
                                    </div>
                                </div>
                                {/* Image */}
                                <div className='hidden xl:flex flex-1 w-full h-[70vh] relative'>
                                    <Image
                                        src={item.imgSrc}
                                        layout="fill"
                                        className='object-cover'
                                        quality={100}
                                        priority
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Aboutus;
