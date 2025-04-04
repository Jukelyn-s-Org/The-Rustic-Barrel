"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface Props {
  locationTitle?: string;
}

export default function Navbar({ locationTitle = "Person Street Bar" }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-amber-900 text-amber-100 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://placehold.co/40"
            alt="Person Street Bar Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold">{locationTitle}</span>
        </Link>

        {/* Hamburger Menu Icon (Visible on smaller screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Navigation Links (Visible on larger screens) */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="hover:text-amber-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-amber-300">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-amber-300">
              Events
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-amber-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-amber-300">
              About Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Collapsible Menu (Visible on smaller screens when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-amber-900 py-2">
          <ul className="flex flex-col items-center space-y-2">
            <li>
              <Link href="/" className="hover:text-amber-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-amber-300">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-amber-300">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-300">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
