import Image from "next/image";
import React from "react";

const NavWithBack = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container align-items-center">
          <div className="d-flex align-items-center">
            <a href="/register/Adminlogin"></a>
            <a href="/Home"></a>
          </div>

          <div className=" align-items-center justify-content-end">
            <div className="d-flex align-items-center">
              <div className="name mx-4">
                <h6>John Doe</h6>
                <p className="text-muted role p-0 my-0">Admin</p>
              </div>

              {/* <div className="profilePicture" style="background-image: url(/Images/Profile.jpg);"></div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavWithBack;
