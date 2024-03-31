import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="from-cognac-700 to-cognac-800 mt-4 min-h-48 bg-gradient-to-br p-6 text-white">
      <div className="mx-auto grid max-w-screen-xl justify-center gap-4 sm:grid-cols-3 sm:justify-items-center">
        <div className="flex flex-col gap-1">
          <span className="text-2xl">Robbie.kiwi</span>
          <hr className="border-sage-400 w-24 border"></hr>
          <p className="max-w-64 font-light">
            Helping small businesses thrive online in a digital age
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-2xl">Quick Links</span>
          <hr className="border-sage-400 w-24 border"></hr>
          <ul className="grid font-medium">
            <NavLink
              to="/"
              className="font-light underline-offset-4 hover:underline"
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about-me"
              className="font-light underline-offset-4 hover:underline"
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to="/projects"
              className="font-light underline-offset-4 hover:underline"
            >
              <li>Projects</li>
            </NavLink>
            <NavLink
              to="/contact"
              className="font-light underline-offset-4 hover:underline"
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-2xl">Contact</span>
          <hr className="border-sage-400 w-24 border"></hr>
          <a href="tel:+64211011105" className="font-light">
            021 101 1105
          </a>
          <a href="mailto:robbiedob21@gmail.com" className="font-light">
            robbiedob21@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
