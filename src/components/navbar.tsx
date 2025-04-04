import Link from "next/link";
import Image from "next/image";

interface Props {
  locationTitle?: string;
}

export default function Navbar({ locationTitle = "Person Street Bar" }: Props) {
  return (
    <nav className="bg-amber-900 text-amber-100 p-4">
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
        <ul className="flex space-x-4">
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
    </nav>
  );
}
