import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="p-6 mb-4">
      <div className="mx-auto flex max-w-screen-xl justify-between items-center">
        <NavLink to="/"  className="text-3xl sm:text-4xl font-light tracking-tighter">Robbie.kiwi</NavLink>
        <ul className="gap-12 text-2xl font-medium hidden sm:flex">
          <NavLink to="/about-me" className="underline-offset-8 hover:underline">
            <li>About</li>
          </NavLink>
          <NavLink to="/projects" className="underline-offset-8 hover:underline">
            <li>Projects</li>
          </NavLink>
          <NavLink to="/contact" className="underline-offset-8 hover:underline">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
