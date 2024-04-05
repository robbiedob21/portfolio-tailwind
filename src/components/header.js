import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [dropdown, setDropdown] = useState("false");

  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  return (
    <header className="sticky top-0 z-50 border-b-2 bg-white px-4 py-3 shadow-sm sm:p-6">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-light tracking-tighter sm:text-4xl"
        >
          Robbie.kiwi
        </NavLink>
        <ul
          className={`${dropdown ? "scale-y-0 sm:scale-y-100" : "scale-y-100"} min-w-1/2 absolute right-0 top-full origin-top flex-col rounded-bl-sm border-l-2 border-t-2 bg-white text-2xl font-medium shadow-sm transition-transform sm:static sm:mt-0 sm:flex sm:flex-row sm:gap-12 sm:border-none sm:shadow-none`}
        >
          <NavLink
            to="/about-me"
            className="sm:underline-offset-8 sm:hover:underline"
            onClick={toggleDropdown}
          >
            <li className="border-b-2 px-16 py-4 hover:bg-sage-100 sm:border-none sm:p-0 sm:hover:bg-transparent">
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 512 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-dark sm:hidden"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>about</title>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="about-white"
                        fill="#000000"
                        transform="translate(42.666667, 42.666667)"
                      >
                        {" "}
                        <path
                          d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z"
                          id="Shape"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p>About</p>
              </div>
            </li>
          </NavLink>
          <NavLink
            to="/projects"
            className="underline-offset-8 sm:hover:underline"
            onClick={toggleDropdown}
          >
            <li className="border-b-2 px-16 py-4 hover:bg-sage-100 sm:border-none sm:p-0 sm:hover:bg-transparent">
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 512 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-dark sm:hidden"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>project</title>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Combined-Shape"
                        fill="#000000"
                        transform="translate(64.000000, 34.346667)"
                      >
                        {" "}
                        <path d="M192,7.10542736e-15 L384,110.851252 L384,332.553755 L192,443.405007 L1.42108547e-14,332.553755 L1.42108547e-14,110.851252 L192,7.10542736e-15 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M341.333,157.655 L213.333,231.555 L213.333,381.82 L341.333333,307.920144 L341.333,157.655 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z">
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p>Projects</p>
              </div>
            </li>
          </NavLink>
          <NavLink
            to="/contact"
            className="underline-offset-8 sm:hover:underline"
            onClick={toggleDropdown}
          >
            <li className="rounded-bl-sm border-b-2 px-16 py-4 hover:bg-sage-100 sm:border-none sm:p-0 sm:hover:bg-transparent">
              <div className="flex items-center gap-2">
                <svg
                  fill="#000000"
                  width="256px"
                  height="256px"
                  viewBox="-2.4 -2.4 28.80 28.80"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-dark sm:hidden"
                >
                  <g
                    id="SVGRepo_bgCarrier"
                    stroke-width="0"
                    transform="translate(0,0), scale(1)"
                  ></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.048"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M4,21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3ZM12,7.5a2,2,0,1,1-2,2A2,2,0,0,1,12,7.5ZM8.211,16.215a4,4,0,0,1,7.578,0A.993.993,0,0,1,14.83,17.5H9.18A1,1,0,0,1,8.211,16.215Z"></path>
                  </g>
                </svg>
                <p>Contact</p>
              </div>
            </li>
          </NavLink>
        </ul>
        <button
          className="h-8 w-8 fill-dark sm:hidden"
          onClick={toggleDropdown}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full stroke-dark"
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
