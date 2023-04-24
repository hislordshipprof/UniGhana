import SignUpContent from "@/components/Register/SignUpContent";
import Link from "next/link";
import React from "react";

const signup = () => {
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
      <SignUpContent />
    </>
  );
};

export default signup;
