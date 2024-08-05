"use client";
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Aboutus from '@/components/Aboutus3';
import Explore from '@/components/Explore';
import Menu from '@/components/Menu';
import Testimonials from '@/components/Testimonials';
import OpeningHours from '@/components/OpeningHours';
import 'react-toastify/dist/ReactToastify.css';

function Page({ Component, pageProps }) {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll({
        el: document.querySelector('.scroll-container'),
        smooth: true,
      });
    };

    loadLocomotiveScroll();
  }, []);

  return (
    <div className='min-h-screen overflow-x-hidden scroll-container'>
      <Hero />
      <Explore />
      <Aboutus />
      <Menu />
      <OpeningHours />
      <Testimonials />
    </div>
  );
}

export default Page;
