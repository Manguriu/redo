'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

const CustomLink = ({ href, title, className = '', onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} relative group`}
      onClick={onClick} // Handle click to close menu
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-cyan-500 absolute left-0 -bottom-0.5 
        ${isActive ? 'w-full' : 'w-0'} 
        group-hover:w-full transition-[width] ease duration-300`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const navItems = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/projec', title: 'Projects' },
  { href: '/contacts', title: 'Contact' },
];

const socialLinks = [
  { url: 'https://github.com/manguriu', network: 'github' },
  { url: 'https://www.linkedin.com/in/brian-manguriu-3b0b07207', network: 'linkedin' },
  { url: 'https://twitter.com/mainnet', network: 'twitter' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-gray-200 text-gray-900 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <CustomLink
                key={item.href}
                href={item.href}
                title={item.title}
                className="text-lg font-medium hover:text-cyan-400 transition-colors" onClick={undefined}              />
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-4">
            {socialLinks.map((link) => (
              <motion.div
                key={link.network}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialIcon
                  url={link.url}
                  network={link.network}
                  fgColor="dark"
                  bgColor="transparent"
                  style={{ height: 30, width: 30 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <CustomLink
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  className="block px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white transition-colors"
                  onClick={closeMenu} 
                />
              ))}
            </div>
            <div className="flex justify-center space-x-4 py-4">
              {socialLinks.map((link) => (
                <SocialIcon
                  key={link.network}
                  url={link.url}
                  network={link.network}
                  fgColor="white"
                  bgColor="transparent"
                  style={{ height: 30, width: 30 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
