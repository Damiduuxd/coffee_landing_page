import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const link = [
  { href: "/", name: "home" },
  { href: "/explore", name: "Explore" },
  { href: "/aboutus", name: "About us" },
  { href: "/menu", name: "Menu" },
  { href: "/contactus", name: "Contact us" }
];

const letterAnim = {
  initial: { y: "100%", opacity: 0 },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.60, 0, 0.20, 1], delay: i[0] },
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.8, ease: [0.60, 0, 0.20, 1], delay: i[1] },
  }),
};

const getLetter = (name) => {
  return name.split("").map((letter, index) => (
    <motion.span
      variants={letterAnim}
      initial="initial"
      animate="enter"
      custom={[index * 0.04, (name.length - index) * 0.01]}
      exit="exit"
      key={index}
    >
      {letter}
    </motion.span>
  ));
};

const heightAnimation = {
  initial: {
    height: 0
  },
  open: {
    height: "85vh",
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] }
  },
  closed: {
    height: 0,
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] }
  }
};

const Nav = ({ closeNav }) => {
  const handleLinkClick = () => {
    closeNav();
  };

  return (
    <motion.nav
      variants={heightAnimation}
      initial="initial"
      animate="open"
      exit="closed"
      className='bg-primary overflow-hidden absolute z-[50] -top-full w-full'
    >
      <div className='container mx-auto h-full flex items-center justify-center'>
        <ul className='flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase'>
          {link.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className='flex overflow-hidden hover:text-white transition-all'
              onClick={handleLinkClick}
            >
              {getLetter(link.name)}
            </Link>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
