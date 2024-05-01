import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navlink = "text-center py-3 px-4 text-stone-50 hover:bg-red-300";

export default function Navbar() {
  return (
    <div className = "z-10 fixed w-full top-0 bg-gradient-to-t from-red-400 to-red-500 ">
      <header>
        <div class="py-3 flex items-center text-stone-50">
          <img src="IBLogo.png" class="w-7 ml-8" alt="Logo" />
          <h1 className="red-hat ml-4 text-2xl font-bold text-white">
            Resources for French B
          </h1>
        </div>
      </header>

      <nav className="navbar">
        <ul className="montserrat list-none pb-3 px-4">
          <NavLink to="/" className={navlink}>
            Home
          </NavLink>
          <NavLink to="/reading" className={navlink}>
            Reading
          </NavLink>
          <NavLink to="/listening" className={navlink}>
            Listening
          </NavLink>
          <NavLink to="/writing" className={navlink}>
            Writing
          </NavLink>
          <NavLink to="/grammar" className={navlink}>
            Grammar
          </NavLink>
        </ul>
      </nav>
      </div>      
  );
}
