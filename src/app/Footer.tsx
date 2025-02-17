'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

const socialLinks = [
  { url: 'https://github.com/manguriu', network: 'github' },
  { url: 'https://www.linkedin.com/in/brian-manguriu-3b0b07207', network: 'linkedin' },
  { url: 'https://twitter.com/mainnet', network: 'twitter' },
];



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Brian Manguriu</h3>
            <p className="text-gray-900">Software Developer | Data analyst | Car Enthusiast/Mechanic as a Hobby</p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.network}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SocialIcon
                    url={link.url}
                    network={link.network}
                    fgColor="black"
                    bgColor="transparent"
                    style={{ height: 30, width: 30 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
      
        </div>
        <div className="mt-8 pt-8 border-t border-gray-900 text-center">
          <p className="text-gray-900">
            &copy; {currentYear} Brian Manguriu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

