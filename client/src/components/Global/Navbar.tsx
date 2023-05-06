import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  name: string;
  text: string;
}
const Navbar = ({ name, text }: NavbarProps) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <div>
              <h2 style={{ color: "#F28705" }}> {name}</h2>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div
            className="collapse navbar-collapse py-4 justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              {text === "login" && (
                <li className="nav-item">
                  <Link className=" btn px-3" href="/register/login">
                    {text}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
