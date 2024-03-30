import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br mt-4 from-cognac-700 to-cognac-800 p-6 text-white min-h-48">
      <div className="mx-auto grid max-w-screen-xl gap-4 justify-center sm:justify-items-center sm:grid-cols-3">
        <div className="flex flex-col gap-1">
          <span className="text-2xl">Robbie.kiwi</span>
          <hr className="w-24 border border-sage-400"></hr>
          <p className="font-light max-w-64">Helping small businesses thrive online in a digital age</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-2xl">Quick Links</span>
          <hr className="w-24 border border-sage-400"></hr>
          <ul className="grid font-medium">
            <NavLink className="underline-offset-4 hover:underline font-light">
              <li>About</li>
            </NavLink>
            <NavLink className="underline-offset-4 hover:underline font-light">
              <li>Projects</li>
            </NavLink>
            <NavLink className="underline-offset-4 hover:underline font-light">
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-2xl">Contact</span>
          <hr className="w-24 border border-sage-400"></hr>
          <a href="tel:+64211011105" className="font-light">021 101 1105</a>
          <a href="mailto:robbiedob21@gmail.com" className="font-light">robbiedob21@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
