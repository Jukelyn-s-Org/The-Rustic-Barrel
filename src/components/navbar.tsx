"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavbarItems from "@/src/components/navbar-items";

interface Props {
  locationTitle?: string;
}

export default function Navbar({ locationTitle = "The Rustic Barrel" }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-amber-900 text-amber-100 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/barrel-wood.svg"
            alt="The Rustic Barrel Logo"
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
        <NavbarItems ulClassName="hidden md:flex space-x-4" />
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-fit bg-amber-900 z-20 flex flex-col items-center justify-start py-20">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-2xl focus:outline-none"
          >
            <AiOutlineClose />
          </button>
          <NavbarItems
            ulClassName="flex flex-col items-center space-y-6 text-lg"
            listItemClassName="border-4 border-amber-100 rounded-lg p-4 w-full"
            buttonClassName="w-full block text-center"
          />
        </div>
      )}
    </nav>
  );
}
