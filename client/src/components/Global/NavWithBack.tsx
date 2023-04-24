import Image from "next/image";
import React from "react";
import { images } from "./Image";

const NavWithBack = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container align-items-center">
          <div className="d-flex align-items-center">
            <a href="/register/Adminlogin">
              <Image src={images.logout} alt="" className="img-fluid" />
            </a>
            <a href="/Home">
              <Image src={images.mainMenu} alt="" className="img-fluid mx-5" />
            </a>
          </div>

          <div className=" align-items-center justify-content-end">
            <div className="d-flex align-items-center">
              <div className="name mx-4">
                <h6>John Doe</h6>
                <p className="text-muted role p-0 my-0">Admin</p>
              </div>
              <div
                className="profilePicture"
                style={{ backgroundImage: `url(${images.profile.src})` }}
              ></div>
              {/* <div className="profilePicture" style="background-image: url(/Images/Profile.jpg);"></div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavWithBack;
