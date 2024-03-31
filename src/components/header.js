import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [dropdown, setDropdown] = useState('false')

	function toggleDropdown() {
		setDropdown(!dropdown);
	}

  return (
    <header className="sticky top-0 bg-white border-b-2 p-6 z-50 shadow-sm">
      <div className="relative mx-auto flex max-w-screen-xl items-center justify-between">
        <NavLink
          to="/"
          className="text-3xl font-light tracking-tighter sm:text-4xl"
        >
          Robbie.kiwi
        </NavLink>
        <ul className={`${dropdown ? 'scale-y-0 sm:scale-y-100': 'scale-y-100'} shadow-sm sm:shadow-none transition-transform origin-top absolute -right-6 top-full flex-col border-l-2 border-t-2 rounded-bl-md bg-white text-2xl mt-6 min-w-1/2 sm:mt-0 font-medium sm:static sm:flex sm:flex-row sm:gap-12 sm:border-none`}>
          <NavLink
            to="/about-me"
            className="sm:underline-offset-8 sm:hover:underline"
            onClick={toggleDropdown}
          >
            <li className="border-b-2 px-16 py-4 hover:bg-sage-100 sm:border-none sm:p-0 sm:hover:bg-transparent">
              About
            </li>
          </NavLink>
          <NavLink
            to="/projects"
            className="underline-offset-8 sm:hover:underline"
            onClick={toggleDropdown}
          >
            <li className="border-b-2 px-16 py-4 hover:bg-sage-100 sm:border-none sm:p-0 sm:hover:bg-transparent">
              Projects
            </li>
          </NavLink>
          <NavLink
            to="/contact"
            className="underline-offset-8 sm:hover:underline"
            onClick={toggleDropdown}
          >
            <li className="border-b-2 px-16 py-4 hover:bg-sage-100 sm:border-none sm:p-0 sm:hover:bg-transparent rounded-bl-md">
              Contact
            </li>
          </NavLink>
        </ul>
        <button className="fill-dark w-12 h-12 sm:hidden" onClick={toggleDropdown}>
          <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-dark w-full h-full"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M20 7L4 7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M20 12L4 12"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M20 17L4 17"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
        </button>
      </div>
    </header>
  );
}
