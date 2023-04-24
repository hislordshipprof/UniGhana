import { images } from "@/components/Global/Image";
import LoginContent from "@/components/Register/LoginContent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <div>
              <h2 style={{ color: "#F28705" }}> UniGhana</h2>
            </div>
          </Link>
        </div>
      </nav>
      <LoginContent />
    </>
  );
};

export default login;
