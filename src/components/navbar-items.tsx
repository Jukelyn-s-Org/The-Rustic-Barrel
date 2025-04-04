import React from "react";
import { useRouter } from "next/navigation";

interface NavbarItemsProps {
  ulClassName: string;
  listItemClassName?: string;
  buttonClassName?: string;
}

const NavbarItems: React.FC<NavbarItemsProps> = ({
  ulClassName,
  listItemClassName,
  buttonClassName,
}) => {
  const router = useRouter();
  const defaultButtonClassName = "hover:text-amber-300";
  const combinedButtonClassName = buttonClassName
    ? `${defaultButtonClassName} ${buttonClassName}`
    : defaultButtonClassName;

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <ul className={ulClassName}>
        <li className={listItemClassName}>
          <button
            onClick={() => handleNavigation("/")}
            className={combinedButtonClassName}
          >
            Home
          </button>
        </li>
        <li className={listItemClassName}>
          <button
            onClick={() => handleNavigation("/menu")}
            className={combinedButtonClassName}
          >
            Menu
          </button>
        </li>
        <li className={listItemClassName}>
          <button
            onClick={() => handleNavigation("/events")}
            className={combinedButtonClassName}
          >
            Events
          </button>
        </li>
        <li className={listItemClassName}>
          <button
            onClick={() => handleNavigation("/contact")}
            className={combinedButtonClassName}
          >
            Contact
          </button>
        </li>
        <li className={listItemClassName}>
          <button
            onClick={() => handleNavigation("/about")}
            className={combinedButtonClassName}
          >
            About Us
          </button>
        </li>
      </ul>
    </>
  );
};

export default NavbarItems;
