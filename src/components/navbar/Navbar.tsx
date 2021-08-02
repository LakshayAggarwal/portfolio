import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = (): JSX.Element => {
  const [showNavItems, setShowNavItems] = useState(false);

  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];

  return (
    <div>
      <div
        className={`flex items-center ${
          showNavItems ? "" : "shadow"
        } lg:shadow h-screen-10 px-4`}
      >
        <div className="flex-grow text-left text-2xl">Lakshay</div>
        <ul className="hidden lg:flex">
          {navItems.map((navItem, index) => (
            <li className="text-xl px-4" key={index}>
              <a href={navItem.link}>{navItem.name}</a>
            </li>
          ))}
        </ul>
        <div
          className="flex-shrink lg:hidden"
          onClick={() => setShowNavItems(!showNavItems)}
        >
          <FontAwesomeIcon icon="bars" size="lg" />
        </div>
      </div>
      {showNavItems && (
        <div className="shadow lg:hidden">
          <ul>
            {navItems.map((navItem, index) => (
              <li className="text-lg p-1.5" key={index}>
                <a href={navItem.link}>{navItem.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
