'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logout from './Logout';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from './logoWhite.png';

export function Navbar() {
  const { email, isLogged, role } = useSelector((state) => state.login);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav
        className={`fixed w-screen z-50 bg-gray-500 ${
          isScrolled ? 'bg-opacity-75' : 'bg-opacity-100'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
                src={Logo}
                height={50} // Výchozí velikost
                width={50}
                alt="Logo stránky Jiřího Kočvary"
                priority
                className="sm:height-[50px] sm:width-[50px] lg:height-[65px] lg:width-[65px]"
            />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center w-full">
            {/* Page Links */}
            <div className="flex space-x-8">
              {[
                { href: '/', label: 'Domů' },
                { href: '/sluzby', label: 'Služby' },
                { href: '/profil', label: 'Profil' },
                { href: '/vzdelani', label: 'Vzdělání' },
                { href: '/reference', label: 'Reference' },
                { href: '/kontakt', label: 'Kontakt' },
                { href: '/konzultace', label: 'Konzultace' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg text-white font-semibold hover:text-orange hover:scale-105 transition-all ${
                    pathname === link.href
                      ? 'text-orange border-2 rounded-full px-3'
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex mt-0  mx-0 sm:mr-0 md:order-2 md:mt-2 lg:mt-0">
          {!isLogged?
          <div className="flex flex-col md:flex-row lg:flex-col gap-1 mr-2 md:mr-2">
            <button className=" border-2 rounded-full p-1 xl:p-1 whitespace-nowrap text-white hover:brightness-110 hover:scale-105 transition-all"><Link href="/register">Registrovat se</Link></button>
            <button className=" border-2 rounded-full p-1 xl:p-1 text-white hover:brightness-110 hover:scale-105 transition-all"><Link href="/login">Přihlásit se</Link></button>
          </div>
          :
          <div className="">
            <Logout></Logout>
          </div>
          }

        </div>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden p-2 text-white bg-gray-700 rounded"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                ></path>
            </svg>
            </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:hidden bg-gray-500 p-4`}
        >
          <ul className="flex flex-col space-y-2">
            {[
              { href: '/', label: 'Domů' },
              { href: '/sluzby', label: 'Služby' },
              { href: '/profil', label: 'Profil' },
              { href: '/vzdelani', label: 'Vzdělání' },
              { href: '/reference', label: 'Reference' },
              { href: '/kontakt', label: 'Kontakt' },
              { href: '/konzultace', label: 'Konzultace' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2 px-4 text-lg text-white font-semibold hover:text-orange hover:scale-105 transition-all ${
                    pathname === link.href
                      ? 'text-orange border-2 rounded-full px-2'
                      : ''
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Login/Register Links for Mobile */}
            {!isLogged ? (
              <>
                <li>
                  <Link
                    href="/register"
                    className="block py-2 px-4 text-lg text-white font-semibold border-2 rounded-full hover:text-orange hover:scale-105 transition-all text-center"
                    onClick={closeMenu}
                  >
                    Registrovat se
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="block py-2 px-4 text-lg text-white font-semibold border-2 rounded-full hover:text-orange hover:scale-105 transition-all text-center"
                    onClick={closeMenu}
                  >
                    Přihlásit se
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Logout />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
